import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import IconCover from "@/ui/IconCover";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function TravelStatusCard() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconCover backgroundColor="#f920b5">
          <CalendarTodayIcon sx={{ fontSize: 20, color: "#ffb8e9" }} />
        </IconCover>
        <Typography variant="body1" fontWeight="800">
          旅行ステータス
        </Typography>
      </Box>
      <Typography variant="body2" fontWeight="400">
        旅行の基本的な情報を入力してください
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          marginTop: 2,
        }}
      ></Box>
    </Paper>
  );
}
