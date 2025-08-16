import React, { useState } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import IconCover from "@/ui/IconCover";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

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
        <Button
          variant={travelStatus === "計画中" ? "contained" : "outlined"}
          onClick={() => setTravelStatus("計画中")}
          sx={{
            flex: 1,
            textTransform: "none",
            borderRadius: 2,
            fontWeight: 500,
            backgroundColor:
              travelStatus === "計画中" ? "primary.main" : "transparent",
            color: travelStatus === "計画中" ? "white" : "primary.main",
            borderColor:
              travelStatus === "計画中" ? "primary.main" : "grey.300",
            "&:hover": {
              backgroundColor:
                travelStatus === "計画中" ? "primary.dark" : "primary.light",
              borderColor: "primary.main",
            },
          }}
        >
          計画中
        </Button>
        <Button
          variant={travelStatus === "旅行中" ? "contained" : "outlined"}
          onClick={() => setTravelStatus("旅行中")}
          sx={{
            flex: 1,
            textTransform: "none",
            borderRadius: 2,
            fontWeight: 500,
            backgroundColor:
              travelStatus === "旅行中" ? "success.main" : "transparent",
            color: travelStatus === "旅行中" ? "white" : "success.main",
            borderColor:
              travelStatus === "旅行中" ? "success.main" : "grey.300",
            "&:hover": {
              backgroundColor:
                travelStatus === "旅行中" ? "success.dark" : "success.light",
              borderColor: "success.main",
            },
          }}
        >
          旅行中
        </Button>
        <Button
          variant={travelStatus === "完了" ? "contained" : "outlined"}
          onClick={() => setTravelStatus("完了")}
          sx={{
            flex: 1,
            textTransform: "none",
            borderRadius: 2,
            fontWeight: 500,
            backgroundColor:
              travelStatus === "完了" ? "grey.500" : "transparent",
            color: travelStatus === "完了" ? "white" : "grey.600",
            borderColor: travelStatus === "完了" ? "grey.500" : "grey.300",
            "&:hover": {
              backgroundColor:
                travelStatus === "完了" ? "grey.600" : "grey.100",
              borderColor: travelStatus === "完了" ? "grey.600" : "grey.400",
            },
          }}
        >
          完了
        </Button>
      </Box>
    </Paper>
  );
}
