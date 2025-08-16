import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface TipSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ShareTips() {
  const tipSections: TipSection[] = [
    {
      icon: <VisibilityIcon sx={{ fontSize: 24, color: "#fff" }} />,
      title: "リンクを受け取った人は旅行の詳細を閲覧できます",
      description: "共有リンクを受け取った人は、旅行のスケジュール、場所、メンバー情報を見ることができます。",
      bgColor: "#2196f3",
    },
    {
      icon: <EditIcon sx={{ fontSize: 24, color: "#fff" }} />,
      title: "編集権限は旅行作成者とメンバーのみです",
      description: "閲覧者は内容を見ることはできますが、編集や変更はできません。安心して共有できます。",
      bgColor: "#9c27b0",
    },
    {
      icon: <PhotoCameraIcon sx={{ fontSize: 24, color: "#fff" }} />,
      title: "写真の共有も可能です",
      description: "旅行中に撮った写真やイメージも一緒に共有されるので、思い出を皆で楽しめます。",
      bgColor: "#4caf50",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "共有リンクはいつまで有効ですか？",
      answer: "共有リンクに有効期限はありません。旅行作成者が削除するまで、いつでもアクセス可能です。",
    },
    {
      question: "パスワードを設定することはできますか？",
      answer: "現在、パスワード保護機能はありませんが、リンクを知っている人のみアクセスできるため、安全に共有できます。",
    },
    {
      question: "共有を停止したい場合はどうすればいいですか？",
      answer: "旅行の設定画面から「共有を停止」を選択することで、リンクへのアクセスを無効にできます。",
    },
    {
      question: "何人まで共有できますか？",
      answer: "共有人数に制限はありません。リンクを受け取った全ての人が閲覧できます。",
    },
    {
      question: "共有した人の情報は確認できますか？",
      answer: "現在、リンクアクセス者の確認機能はありませんが、将来的に追加予定です。",
    },
    {
      question: "SNSで共有しても大丈夫ですか？",
      answer: "個人情報が含まれる可能性があるため、SNSでの公開共有は推奨しません。信頼できる人にのみ直接送信することをおすすめします。",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 3, display: "flex", alignItems: "center", gap: 1 }}>
        <LightbulbIcon sx={{ color: "#ff9800" }} />
        共有のコツ
      </Typography>

      {/* メインのコツセクション */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 4 }}>
        {tipSections.map((section, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              padding: 2,
              borderRadius: 2,
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: section.bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {section.icon}
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 0.5 }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#757575" }}>
                {section.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* よくある質問セクション */}
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <QuestionAnswerIcon sx={{ color: "#4caf50" }} />
        よくある質問
      </Typography>

      <Box sx={{ marginBottom: 3 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ marginBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ backgroundColor: "#fafafa" }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
                Q. {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "14px", color: "#616161" }}>
                A. {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* セキュリティに関する注意 */}
      <Alert 
        severity="warning" 
        icon={<LockIcon />}
        sx={{ backgroundColor: "#fff8e1", marginTop: 3 }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 0.5 }}>
          セキュリティについて
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          個人情報や重要な情報が含まれる旅行の共有時は、信頼できる人にのみリンクを送信することを強く推奨します。
        </Typography>
      </Alert>
    </Box>
  );
}