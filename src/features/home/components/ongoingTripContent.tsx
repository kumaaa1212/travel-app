import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export interface ItineraryCardProps {
  tripTitle?: string;
  tripSubTitle?: string;
  originLabel?: string;
  destinationLabel?: string;
  requiredMinutes?: number;
  distanceKm?: number;
  transport?: string;
  scheduleTitle?: string;
  scheduleTime?: string;
}

export default function OngoingTripContent(props: ItineraryCardProps) {
  const {
    tripTitle = "京都・奈良 古都めぐり",
    tripSubTitle = "京都・奈良",
    originLabel = "京都駅",
    destinationLabel = "清水寺",
    requiredMinutes = 25,
    distanceKm = 4.2,
    transport = "車",
    scheduleTitle = "清水寺観光",
    scheduleTime = "14:00",
  } = props;

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "visible",
        backgroundColor: "#fff",
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Chip
            label="旅行中"
            size="small"
            color="secondary"
            sx={{
              // bgcolor: "#1976d2",
              color: "#fff",
              fontWeight: 600,
              fontSize: "12px",
              height: "24px",
              borderRadius: "4px",
            }}
          />

          <IconButton size="small" sx={{ color: "#999" }} aria-label="open">
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Stack>

        <Box mb={3}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ fontSize: "18px", color: "#333", mb: 0.5 }}
          >
            {tripTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", fontSize: "14px" }}>
            {tripSubTitle}
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={3} mb={3}>
          <Stack alignItems="center" spacing={0.5}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 20, color: "#666" }} />
            </Box>
            <Typography
              variant="caption"
              sx={{ color: "#333", fontSize: "12px" }}
            >
              {originLabel}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "11px" }}
            >
              現在地
            </Typography>
          </Stack>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 2,
                background: "linear-gradient(90deg, #1976d2 0%, #4caf50 100%)",
                borderRadius: 1,
                position: "relative",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 12,
                  color: "#1976d2",
                }}
              />
            </Box>
          </Box>

          <Stack alignItems="center" spacing={0.5}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "#06710a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 20, color: "#fff" }} />
            </Box>
            <Typography
              variant="caption"
              sx={{ color: "#333", fontSize: "12px" }}
            >
              {destinationLabel}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "11px" }}
            >
              目的地
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center">
          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              sx={{ fontSize: "20px", fontWeight: 700, color: "#333" }}
            >
              {requiredMinutes}分
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#999", fontSize: "11px" }}
            >
              所要時間
            </Typography>
          </Stack>

          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              sx={{ fontSize: "20px", fontWeight: 700, color: "#333" }}
            >
              {distanceKm}km
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#999", fontSize: "11px" }}
            >
              距離
            </Typography>
          </Stack>

          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#333" }}
            >
              {transport}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#999", fontSize: "11px" }}
            >
              移動手段
            </Typography>
          </Stack>

          <Box sx={{ flex: 1 }} />

          <Stack alignItems="flex-end" spacing={0.5}>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", fontWeight: 600, color: "#333" }}
            >
              {scheduleTitle}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTimeIcon sx={{ fontSize: 14, color: "#999" }} />
              <Typography
                variant="caption"
                sx={{ color: "#999", fontSize: "12px" }}
              >
                {scheduleTime}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
