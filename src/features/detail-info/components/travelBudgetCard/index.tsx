import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import IconCover from "@/ui/IconCover";
import TextField from "@/ui/TextFiled";
import StatusButton from "@/ui/StatusButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function TravelBudgetCard() {
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
            詳細設定
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontWeight="400"
          sx={{ marginTop: 1, color: "text.secondary" }}
        >
          旅行の予算を設定してください
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            予算（1人あたり）
          </Typography>
          <TextField
            placeholder="50000"
            slotProps={{
              input: {
                startAdornment: (
                  <Typography sx={{ mr: 1, color: "text.secondary" }}>
                    ¥
                  </Typography>
                ),
              },
            }}
          />
          <Typography variant="body2" fontWeight="500">
            旅行ステータス
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
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
        </Box>
      </Box>
    </Paper>
  );
}
