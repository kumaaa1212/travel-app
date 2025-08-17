import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ItineraryItem } from "../types";

interface ItineraryDetailProps {
  item: ItineraryItem;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ItineraryDetail: React.FC<ItineraryDetailProps> = ({
  item,
  onBack,
  onEdit,
  onDelete,
}) => {
  const getCategoryName = (category: string) => {
    switch (category) {
      case "transport":
        return "移動";
      case "sightseeing":
        return "観光";
      case "meal":
        return "食事";
      case "accommodation":
        return "宿泊";
      default:
        return "その他";
    }
  };

  const getIconBackground = (category: string) => {
    switch (category) {
      case "transport":
        return "#2196F3";
      case "sightseeing":
        return "#9C27B0";
      case "meal":
        return "#FF9800";
      case "accommodation":
        return "#4CAF50";
      default:
        return "#757575";
    }
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <IconButton onClick={onBack} sx={{ p: 0 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" fontWeight={600}>
          予定詳細
        </Typography>
        <Box sx={{ width: 40 }} />
      </Box>

      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        <Paper sx={{ p: 3, borderRadius: 2, mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                backgroundColor: getIconBackground(item.category),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "2rem" }}>{item.icon}</Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                  display: "inline-block",
                  mt: 0.5,
                }}
              >
                {getCategoryName(item.category)}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Box
              sx={{
                flex: 1,
                p: 2,
                backgroundColor: "#F8F8F8",
                borderRadius: 1,
                mr: 1,
              }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                開始時間
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {item.time}
              </Typography>
            </Box>
            {item.cost && (
              <Box
                sx={{
                  flex: 1,
                  p: 2,
                  backgroundColor: "#F8F8F8",
                  borderRadius: 1,
                  ml: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  予想費用
                </Typography>
                <Typography variant="h5" fontWeight={600} color="success.main">
                  ¥{item.cost.toLocaleString()}
                </Typography>
              </Box>
            )}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <CalendarTodayIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                日程
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ ml: 3.5 }}>
              {item.date || "1月目 - 1月30日(火)"}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <LocationOnIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                場所
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ ml: 3.5 }}>
              {item.location}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <AccessTimeIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                メモ
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ ml: 3.5 }}>
              {item.memo || item.description}
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ p: 2, borderTop: "1px solid #E0E0E0" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={onEdit}
            fullWidth
            sx={{
              borderRadius: 1.5,
              py: 1.5,
              textTransform: "none",
            }}
          >
            編集
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={onDelete}
            fullWidth
            color="error"
            sx={{
              borderRadius: 1.5,
              py: 1.5,
              textTransform: "none",
            }}
          >
            削除
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItineraryDetail;