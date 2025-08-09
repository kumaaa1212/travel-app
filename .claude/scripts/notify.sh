#!/usr/bin/env bash
set -euo pipefail

# 定数定義
readonly NOTIFICATION_TITLE="🔔 Claude Code が確認を求めているよ！"
readonly STOP_TITLE="✅ Claude Code が作業を完了させたよ！"
readonly NOTIFICATION_SOUND="Blow"
readonly STOP_SOUND="Glass"

TYPE="$1"
BRANCH=$(git branch --show-current 2>/dev/null || echo "ブランチ名を特定できないよ")
WORKTREE=$(basename "$(pwd)")
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

case "$TYPE" in
  "notification")
    TITLE="$NOTIFICATION_TITLE"
    SUBTITLE="ブランチ名: $BRANCH"
    MESSAGE="ワークツリー名: $WORKTREE
Date: $TIMESTAMP"
    SOUND="$NOTIFICATION_SOUND"
    ;;
  "stop")
    TITLE="$STOP_TITLE"
    SUBTITLE="ブランチ名: $BRANCH"
    MESSAGE="ワークツリー名: $WORKTREE
Date: $TIMESTAMP"
    SOUND="$STOP_SOUND"
    ;;
  *)
    echo "予期しない通知タイプです: $TYPE" >&2
    exit 1
    ;;
esac

# グループIDをworktree名に設定して通知をまとめる
GROUP_ID="claude-code-$WORKTREE"

# terminal-notifierで通知を表示
terminal-notifier \
    -title "$TITLE" \
    -subtitle "$SUBTITLE" \
    -message "$MESSAGE" \
    -sound "$SOUND" \
    -group "$GROUP_ID"
