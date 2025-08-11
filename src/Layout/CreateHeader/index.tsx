import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography } from "@mui/material";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export default function CreateHeader() {
  return (
    <AppBar
      elevation={1}
      position="static"
      sx={{ backgroundColor: "#05203c", color: "white" }}
    >
      <Toolbar>
        <Box
          sx={{
            margin: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <WestOutlinedIcon />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              新しい旅行を作成
            </Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 400, marginTop: 1 }}>
              ステップ1/3
            </Typography>
          </Box>
          <Box />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
