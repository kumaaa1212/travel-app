import TextField from "@/ui/SerchTextFiled";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  AlertTitle,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";
import ShareIcon from "@mui/icons-material/Share";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import IconCover from "@/ui/IconCover";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useState } from "react";

export default function Share() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const [showNotFound, setShowNotFound] = useState<boolean>(false);

  const shareFeatures = [
    "リンクを受け取った人は旅行の詳細を閲覧できます",
    "編集権限は旅行作成者とログインしたユーザーのみです",
    "写真の共有も可能です",
  ];

  const handleSearch = () => {
    // 検索処理のシミュレーション
    if (searchValue.trim()) {
      setShowNotFound(true);
    }
  };

  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <Alert severity="info">
        <AlertTitle>旅行をシェアしよう</AlertTitle>
        リンクをコピーして友達に送ることで、旅行の詳細や写真を共有できます。
        <Link
          href="/share/tips"
          sx={{
            display: "inline-block",
            marginTop: 1,
            fontSize: "14px",
            color: "#0361e3",
            textDecoration: "underline",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          コツを見る
        </Link>
      </Alert>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          marginTop: 3,
        }}
      >
        <SearchOffIcon
          sx={{ fontSize: 80, color: "#e0e0e0", marginBottom: 2 }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
          該当する旅行が見つかりません
        </Typography>
        <Typography variant="body2" sx={{ color: "#757575" }}>
          検索条件を変更してお試しください
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          <IconCover backgroundColor="#ff9800">
            <ShareIcon sx={{ fontSize: 20, color: "#fff3e0" }} />
          </IconCover>
          <Typography variant="body1" fontWeight="800">
            共有のコツ
          </Typography>
        </Box>

        <List sx={{ padding: 0 }}>
          {shareFeatures.map((feature, index) => (
            <ListItem
              key={index}
              sx={{ padding: "4px 0", alignItems: "flex-start" }}
            >
              <ListItemIcon sx={{ minWidth: 20, marginTop: "6px" }}>
                <FiberManualRecordIcon sx={{ fontSize: 8, color: "#757575" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "14px", color: "#424242" }}
                  >
                    {feature}
                  </Typography>
                }
                sx={{ margin: 0 }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}
