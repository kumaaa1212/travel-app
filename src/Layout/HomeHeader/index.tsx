import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Fab, Typography } from "@mui/material";
import style from "./index.module.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchTextField from "@/ui/SerchTextFiled";
import AddIcon from "@mui/icons-material/Add";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";

export default function Header() {
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 1,
                width: "100%",
              }}
            >
              <p className={style.title}>Tripli</p>
              <p className={style.subTitle}>どこへでも、みんなで</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: 4,
              marginRight: 4,
              marginBottom: 2,
              marginTop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Fab color="secondary" aria-label="add">
                <LocalAirportOutlinedIcon />
              </Fab>
              <Typography>予約する</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Fab color="secondary" aria-label="add">
                <IosShareOutlinedIcon />
              </Fab>
              <Typography>共有する</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Fab color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
              <Typography>旅行を作成</Typography>
            </Box>
          </Box>
          {/* <SearchTextField placeholder="旅行を検索" /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
