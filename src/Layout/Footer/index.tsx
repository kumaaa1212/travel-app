import * as React from "react";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MapIcon from "@mui/icons-material/Map";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useRouter } from "next/router";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (key: string) => {
    router.push(`/travel-info/1/view?tab=${key}`);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
      }}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          backgroundColor: "#fff",
          borderTop: "1px solid #e0e0e0",
          height: 72,
          "& .MuiBottomNavigationAction-root": {
            color: "#757575",
            "&.Mui-selected": {
              color: "secondary.main",
            },
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "12px",
            "&.Mui-selected": {
              fontSize: "12px",
            },
          },
        }}
      >
        <BottomNavigationAction
          onClick={() => handleClick("view")}
          label="一覧"
          icon={<ListAltIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleClick("itinerary")}
          label="旅程"
          icon={<MapIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleClick("expenses")}
          label="経費"
          icon={<AttachMoneyIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleClick("photos")}
          label="写真"
          icon={<CameraAltIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
