import React from "react";
import { Paper, Typography, Box, Link, Chip } from "@mui/material";
import IconCover from "@/ui/IconCover";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

interface TravelSummaryItem {
  label: string;
  value: string | React.ReactNode;
}

export default function TravelSummaryCard() {
  const summaryItems: TravelSummaryItem[] = [
    {
      label: "旅行タイトル",
      value:
        "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
    { label: "目的地", value: "s" },
    { label: "期間", value: "2025-08-07 - 2025-08-28" },
    { label: "予算", value: "未設定" },
    { label: "メンバー", value: "1人" },
    {
      label: "ステータス",
      value: (
        <Link
          href="#"
          underline="always"
          sx={{ color: "primary.main", fontSize: "14px" }}
        >
          <Chip label="計画中" color="info" />
        </Link>
      ),
    },
  ];

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
        {summaryItems.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
          >
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
              {item.label}
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
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
