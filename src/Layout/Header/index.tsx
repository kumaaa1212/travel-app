import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Box, TextField } from "@mui/material";
import style from "./index.module.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Header(props: LayoutProps) {
  return (
    <HideOnScroll {...props}>
      <AppBar elevation={1}>
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
                  marginBottom: 2,
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
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
