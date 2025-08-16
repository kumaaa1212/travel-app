import * as React from "react";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MapIcon from "@mui/icons-material/Map";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
              color: "#1976d2",
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
          label="一覧"
          icon={
            <Box
              sx={{
                border: value === 0 ? "2px solid #1976d2" : "2px solid #757575",
                borderRadius: "8px",
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListAltIcon />
            </Box>
          }
        />
        <BottomNavigationAction
          label="旅程"
          icon={<MapIcon />}
        />
        <BottomNavigationAction
          label="経費"
          icon={<AttachMoneyIcon />}
        />
        <BottomNavigationAction
          label="写真"
          icon={<CameraAltIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
