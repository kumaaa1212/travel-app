import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import IconCover from "@/ui/IconCover";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TextField from "@/ui/TextFiled";

export default function TravelBudgetCard() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconCover backgroundColor="#188139">
            <AttachMoneyIcon sx={{ fontSize: 20, color: "#cbd7cf" }} />
          </IconCover>
          <Typography variant="body1" fontWeight="800">
            予算設定
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
            InputProps={{
              startAdornment: (
                <Typography sx={{ mr: 1, color: "text.secondary" }}>
                  ¥
                </Typography>
              ),
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
}
