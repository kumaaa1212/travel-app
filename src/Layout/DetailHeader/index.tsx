import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Typography } from "@mui/material";

export default function DetailHeader() {
  return (
    <AppBar elevation={1} position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <ChevronLeftOutlinedIcon />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">沖縄リゾート旅行</Typography>
          <Typography variant="body2">沖縄</Typography>
        </Box>
        <SettingsOutlinedIcon />
      </Toolbar>
    </AppBar>
  );
}
