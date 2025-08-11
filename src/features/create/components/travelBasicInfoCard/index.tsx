import { Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconCover from "@/ui/IconCover";
import SearchTextField from "@/ui/SerchTextFiled";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Box from "@mui/material/Box";

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
      </Paper>
    </Box>
  );
}
