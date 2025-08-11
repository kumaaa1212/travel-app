import { Paper, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconCover from "@/ui/IconCover";
import SearchTextField from "@/ui/SerchTextFiled";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function TravelBasicInfoCard() {
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconCover backgroundColor="#06710a">
            <LocationOnIcon sx={{ fontSize: 20, color: "#ceedd0" }} />
          </IconCover>
          <Typography variant="body1" fontWeight="800">
            基本情報
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="400">
          旅行の基本的な情報を入力してください
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" fontWeight="400">
            旅行タイトル
          </Typography>
          <SearchTextField />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" fontWeight="400">
            旅行タイトル
          </Typography>
          <SearchTextField />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" fontWeight="400">
            開始日時
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker sx={{ width: "100%" }} />
          </LocalizationProvider>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" fontWeight="400">
            終了日時
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker sx={{ width: "100%" }} />
          </LocalizationProvider>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="body2" fontWeight="400" sx={{ marginBottom: 1 }}>
            旅行画像（任意）
          </Typography>
          <Box
            sx={{
              border: "2px dashed #e0e0e0",
              borderRadius: 2,
              padding: 4,
              textAlign: "center",
              backgroundColor: "#fafafa",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <ImageIcon
              sx={{ fontSize: 48, color: "#bdbdbd", marginBottom: 1 }}
            />
            <Typography
              variant="body2"
              sx={{ color: "#757575", marginBottom: 0.5 }}
            >
              画像を選択してください
            </Typography>
            <Typography variant="caption" sx={{ color: "#9e9e9e" }}>
              旅行カードに表示されます。
              <br />
              選択されない場合はランダムに選ばれた画像が表示されます。
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                sx={{
                  textTransform: "none",
                  color: "#757575",
                  borderColor: "#e0e0e0",
                  "&:hover": {
                    borderColor: "#bdbdbd",
                  },
                }}
              >
                アップロード
              </Button>
              <Button
                variant="outlined"
                startIcon={<SearchIcon />}
                sx={{
                  textTransform: "none",
                  color: "#757575",
                  borderColor: "#e0e0e0",
                  "&:hover": {
                    borderColor: "#bdbdbd",
                  },
                }}
              >
                素材から選択
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
