import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import IconCover from "@/ui/IconCover";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StatusButton from "@/ui/StatusButton";

export default function TravelStatusCard() {
  const [travelStatus, setTravelStatus] = useState<
    "計画中" | "旅行中" | "完了"
  >("計画中");

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconCover backgroundColor="#9c27b0">
            <CalendarTodayIcon sx={{ fontSize: 20, color: "#f3e5f5" }} />
          </IconCover>
          <Typography variant="body1" fontWeight="800">
            旅行ステータス
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontWeight="400"
          sx={{ marginTop: 1, color: "text.secondary" }}
        >
          現在の旅行の状況を選択してください
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
        <StatusButton
          selected={travelStatus === "計画中"}
          variant="secondary"
          onClick={() => setTravelStatus("計画中")}
        >
          計画中
        </StatusButton>
        <StatusButton
          selected={travelStatus === "旅行中"}
          variant="success"
          onClick={() => setTravelStatus("旅行中")}
        >
          旅行中
        </StatusButton>
        <StatusButton
          selected={travelStatus === "完了"}
          variant="grey"
          onClick={() => setTravelStatus("完了")}
        >
          完了
        </StatusButton>
      </Box>
    </Paper>
  );
}
