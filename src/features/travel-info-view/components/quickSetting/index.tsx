import { Box, Paper, Typography, Chip, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";

export default function QuickSetting() {
  return (
    <>
      <Paper
        elevation={1}
        sx={{
          p: 3,
          mb: 2,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <LocationOnIcon sx={{ color: "secondary.main", fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            沖縄リゾート旅行
          </Typography>
          <Chip
            label="計画中"
            size="small"
            sx={{
              ml: "auto",
              bgcolor: "primary.main",
              color: "white",
              fontWeight: 500,
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <EventIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              4月20日 - 4月23日
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <GroupIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              3人
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AttachMoneyIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              ¥120,000
            </Typography>
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            "&:hover": {
              bgcolor: "secondary.dark",
            },
          }}
        >
          旅行中クイック情報を設定
        </Button>
      </Paper>
    </>
  );
}
