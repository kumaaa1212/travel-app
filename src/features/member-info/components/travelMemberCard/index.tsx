import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import IconCover from "@/ui/IconCover";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function TravelMemberCard() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconCover backgroundColor="#7800e8">
          <CalendarTodayIcon sx={{ fontSize: 20, color: "#d2bae8" }} />
        </IconCover>
        <Typography variant="body1" fontWeight="800">
          メンバー
        </Typography>
      </Box>
      <Typography variant="body2" fontWeight="400">
        一緒に旅行するメンバーを追加してください
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
