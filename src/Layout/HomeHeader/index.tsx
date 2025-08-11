import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Fab, Typography } from "@mui/material";
import style from "./index.module.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginTop: 2,
              }}
            >
              <NotificationsNoneOutlinedIcon />
              <PersonOutlineOutlinedIcon />
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
              onClick={() => {
                router.push("/create/basic-info");
              }}
            >
              <Fab color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
              <Typography>旅行作成</Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
