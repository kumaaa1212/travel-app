import React from "react";
import { Paper, Typography, Box, Chip } from "@mui/material";
import IconCover from "@/ui/IconCover";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function TravelSummaryCard() {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconCover backgroundColor="#e75816">
          <ImportContactsIcon sx={{ fontSize: 20, color: "#eac3b1" }} />
        </IconCover>
        <Typography variant="body1" fontWeight="800">
          旅行サマリー
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          marginTop: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "text.secondary",
              minWidth: "80px",
              flexShrink: 0,
              textAlign: "left",
            }}
          >
            旅行タイトル
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              flex: 1,
            }}
          >
            ああああ
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "text.secondary",
              minWidth: "80px",
              flexShrink: 0,
              textAlign: "left",
            }}
          >
            目的地
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              flex: 1,
            }}
          >
            s
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "text.secondary",
              minWidth: "80px",
              flexShrink: 0,
              textAlign: "left",
            }}
          >
            期間
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              flex: 1,
            }}
          >
            2025-08-07 - 2025-08-28
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "text.secondary",
              minWidth: "80px",
              flexShrink: 0,
              textAlign: "left",
            }}
          >
            予算
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              flex: 1,
            }}
          >
            未設定
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "text.secondary",
              minWidth: "80px",
              flexShrink: 0,
              textAlign: "left",
            }}
          >
            メンバー
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              flex: 1,
            }}
          >
            1人
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "text.secondary",
              minWidth: "80px",
              flexShrink: 0,
              textAlign: "left",
            }}
          >
            ステータス
          </Typography>
          <Box sx={{ flex: 1 }}>
            <Chip label="計画中" color="info" />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
