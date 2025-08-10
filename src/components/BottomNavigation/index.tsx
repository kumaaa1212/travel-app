import React, { useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

interface DateNavigationProps {
  dates?: Array<{
    day: number;
    month: number;
    date: number;
    weekday: string;
  }>;
  value?: number;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
}

const DateNavigation: React.FC<DateNavigationProps> = ({
  dates = [
    { day: 1, month: 4, date: 20, weekday: "土" },
    { day: 2, month: 4, date: 21, weekday: "日" },
    { day: 3, month: 4, date: 22, weekday: "月" },
    { day: 4, month: 4, date: 23, weekday: "火" },
    { day: 4, month: 4, date: 23, weekday: "火" },
    { day: 4, month: 4, date: 23, weekday: "火" },
  ],
  value: propValue,
  onChange,
}) => {
  const [value, setValue] = useState(propValue ?? 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange?.(event, newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        borderTop: "1px solid #e0e0e0",
      }}
      elevation={0}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          height: 80,
          "& .MuiBottomNavigationAction-root": {
            minWidth: "auto",
            padding: "6px 0",
            flex: 1,
            "&.Mui-selected": {
              color: "#1976d2",
            },
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "11px",
            marginTop: "4px",
            "&.Mui-selected": {
              fontSize: "11px",
            },
          },
        }}
      >
        {dates.map((date, index) => (
          <BottomNavigationAction
            key={index}
            label={
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    fontSize: "14px",
                    fontWeight: value === index ? 600 : 400,
                    color: value === index ? "#fff" : "#666",
                    backgroundColor:
                      value === index ? "#1976d2" : "transparent",
                    borderRadius: "20px",
                    padding: "4px 16px",
                    display: "inline-block",
                    minWidth: "60px",
                  }}
                >
                  {date.day}日目
                </Box>
                <Box sx={{ fontSize: "10px", color: "#999", marginTop: "4px" }}>
                  {date.month}月{date.date}日({date.weekday})
                </Box>
              </Box>
            }
            sx={{
              "&.Mui-selected .MuiBottomNavigationAction-label": {
                color: "inherit",
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default DateNavigation;
