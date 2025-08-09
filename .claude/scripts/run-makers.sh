#!/usr/bin/env bash
# 引数: ファイルパスを 1 つ受け取り、所属サービスのルートで makers を実行

set -euo pipefail

# direnvの存在確認
if ! which direnv >/dev/null 2>&1; then
    cat >&2 <<EOF
{
  "message": "開発環境のセットアップエラーが検出されました。以下を修正してください。",
  "results": [
    {
      "command": "direnv",
      "exitCode": 127,
      "stderr": "direnvがインストールされていません！ bin/rcmr-tool-version-inspector.bash を実行して開発環境のセットアップを完了してください。"
    }
  ]
}
EOF
    exit 2
fi

FILE_PATH="$1"
SERVICES=(zidane xavi zlatan modric rcmr_common alonso dimaria python_bin)

# スクリプトの位置からリポジトリルートを取得
SCRIPT_DIR=$(dirname "$(realpath "$0")")
REPO_ROOT=$(dirname $(dirname "$SCRIPT_DIR"))


for svc in "${SERVICES[@]}"; do
    # ファイルパスがそのサービスディレクトリ配下にあるかをチェック
    project_root="$REPO_ROOT/$svc"
    if [[ "${FILE_PATH}" == "$project_root/"* ]]; then
        # Makefile.tomlの存在でPythonプロジェクトか判定
        if [[ ! -f "$project_root/Makefile.toml" ]]; then
            echo "INFO: $svc はPythonプロジェクトではないため、処理をスキップします: $project_root" >&2
            continue
        fi

        # makersコマンドを実行し、出力とexit codeをキャプチャ
        temp_output=$(mktemp)
        trap 'rm -f "${temp_output}"' EXIT
        set +e  # makersの失敗をキャッチするため一時的に無効化
        # サブシェル内でdirenv allowを実行し、.envrc を許可した状態で makers を実行
        # python_bin や rcmr_common は direnv 管理外のため、direnv allow を実行しない
        # .envrc があるにも関わらず direnv allow が失敗する場合は警告メッセージを出力する
        (
          pushd "${project_root}" >/dev/null && \
          if ! direnv allow "${project_root}" >/dev/null 2>&1; then
            if [[ -f "${project_root}/.envrc" ]]; then
              echo "警告: .envrcファイルが存在しますが、direnv allowが失敗しました: ${project_root}" >&2
            fi
          fi && \
          direnv exec "${project_root}" makers
        ) 2>&1 | tee "${temp_output}"
        makers_exit_code=${PIPESTATUS[0]}
        set -e  # エラーハンドリング後に再度有効化
        
        if [ ${makers_exit_code} -eq 0 ]; then
            exit 0
        else
            # エラー内容をエスケープしてJSON形式で出力
            error_content=$(cat "${temp_output}" | jq -R -s .)
            # メッセージを変数に格納（改行を含む）
            message=$(printf "makersコマンドでlintエラーが検出されました。以下のエラーを修正してください。\n注意: import文は必ず実装の後に追加してください。makersのフォーマッターが未使用のimportを自動削除するため、実装前にimportを追加すると削除されます。")
            # メッセージをJSON用にエスケープ
            message_json=$(echo "$message" | jq -R -s .)
            cat >&2 <<EOF
{
  "message": ${message_json},
  "results": [
    {
      "command": "makers",
      "exitCode": ${makers_exit_code},
      "stderr": ${error_content}
    }
  ]
}
EOF
            exit 2
        fi
    fi
done

echo "makers 対象のサービスディレクトリではないため、処理をスキップします！: ${FILE_PATH}" >&2
exit 1
