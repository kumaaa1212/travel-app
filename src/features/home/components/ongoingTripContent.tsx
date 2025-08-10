import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PlaceIcon from "@mui/icons-material/Place";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
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
    originLabel = "京都駅\n現在地",
    destinationLabel = "清水寺\n目的地",
    requiredMinutes = 25,
    distanceKm = 4.2,
    transport = "車",
    scheduleTitle = "清水寺観光",
    scheduleTime = "14:00",
  } = props;

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        color: "#fff",
        background: "linear-gradient(180deg, #1456F0 0%, #1550D8 100%)",
        boxShadow: "0 10px 24px rgba(20,86,240,0.35)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Chip
            label="旅行中"
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              color: "#fff",
              fontWeight: 600,
            }}
          />

          <IconButton size="small" sx={{ color: "#fff" }} aria-label="open">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box mt={1.5}>
          <Typography variant="h6" fontWeight={800} lineHeight={1.3}>
            {tripTitle}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            {tripSubTitle}
          </Typography>
        </Box>

        <Box
          mt={2}
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            borderRadius: 2,
            px: 2,
            py: 1.5,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack minWidth={80} spacing={0.5} alignItems="flex-start">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <FmdGoodIcon sx={{ fontSize: 18 }} />
                <Typography variant="caption">現在地</Typography>
              </Stack>
              <Typography variant="body2" fontWeight={700}>
                京都駅
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: 2,
                  bgcolor: "rgba(255,255,255,0.5)",
                  flex: 1,
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  mx: 1,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  bgcolor: "#3A6BFF",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box
                sx={{
                  height: 2,
                  bgcolor: "rgba(255,255,255,0.5)",
                  flex: 1,
                  borderRadius: 1,
                }}
              />
            </Stack>

            <Stack minWidth={80} spacing={0.5} alignItems="flex-end">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography variant="caption">目的地</Typography>
                <PlaceIcon sx={{ fontSize: 18 }} />
              </Stack>
              <Typography variant="body2" fontWeight={700}>
                清水寺
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.25)" }} />

          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 4, sm: 3 }}>
              <Stack>
                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                  所要時間
                </Typography>
                <Typography variant="subtitle1" fontWeight={800}>
                  {requiredMinutes}分
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 4, sm: 3 }}>
              <Stack>
                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                  距離
                </Typography>
                <Typography variant="subtitle1" fontWeight={800}>
                  {distanceKm}km
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 4, sm: 3 }}>
              <Stack>
                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                  移動手段
                </Typography>
                <Typography variant="subtitle1" fontWeight={800}>
                  {transport}
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Stack alignItems={{ xs: "flex-start", sm: "flex-end" }}>
                <Typography variant="subtitle2" fontWeight={700}>
                  {scheduleTitle}
                </Typography>
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  sx={{ opacity: 0.85 }}
                >
                  <AccessTimeIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption">{scheduleTime}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
