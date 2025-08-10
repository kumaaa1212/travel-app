import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import style from "./index.module.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchTextField from "@/ui/SerchTextFiled";

export default function Header() {
  return (
    <AppBar elevation={1} position="static">
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
              <p className={style.title}>Travel Planner</p>
              <p className={style.subTitle}>グループで楽しい旅行を</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                marginTop: 1,
              }}
            >
              <NotificationsNoneOutlinedIcon />
              <PersonOutlineOutlinedIcon />
            </Box>
          </Box>
          <SearchTextField placeholder="旅行を検索" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
