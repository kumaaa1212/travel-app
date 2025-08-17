import * as React from "react";
import { Box, IconButton, Chip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface DayTabData {
  day: number;
  date: string;
  dayOfWeek: string;
}

interface DayTabsProps {
  days: DayTabData[];
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function DayTabs({ days, value, onChange }: DayTabsProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(days.length / itemsPerPage);
  
  const showLeftButton = currentPage > 0;
  const showRightButton = currentPage < totalPages - 1;
  
  const handleScrollLeft = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };
  
  const handleScrollRight = () => {
    setCurrentPage(Math.min(totalPages - 1, currentPage + 1));
  };
  
  const startIndex = currentPage * itemsPerPage;
  const visibleDays = days.slice(startIndex, startIndex + itemsPerPage);
  
  // 4つ未満の場合は空の要素で埋める
  const displayDays = [...visibleDays];
  while (displayDays.length < itemsPerPage) {
    displayDays.push(null);
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5, px: 2, py: 1 }}>
      {/* Left scroll button */}
      <IconButton
        onClick={handleScrollLeft}
        size="small"
        sx={{
          visibility: showLeftButton ? "visible" : "hidden",
          color: "primary.main",
          bgcolor: "transparent",
          p: 0.5,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 20 }} />
      </IconButton>

      {/* White background container with tabs */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          py: 1.5,
          px: 2,
          width: "100%",
          maxWidth: 600,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
          }}
        >
          {displayDays.map((day, index) => {
            if (!day) {
              return <Box key={`empty-${index}`} />;
            }
            
            const actualIndex = startIndex + index;
            const isSelected = value === actualIndex;

            return (
              <Box
                key={actualIndex}
                onClick={(e) => onChange(e, actualIndex)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                }}
              >
                {isSelected ? (
                  <Chip
                    label={`${day.day}日目`}
                    size="small"
                    sx={{
                      bgcolor: "secondary.main",
                      color: "white",
                      fontWeight: 500,
                      fontSize: "13px",
                      height: 28,
                      borderRadius: "14px",
                      px: 1,
                      minWidth: 70,
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      bgcolor: "#f5f5f5",
                      borderRadius: "14px",
                      px: 1.5,
                      py: 0.5,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 70,
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 500 }}>
                      {day.day}日目
                    </span>
                  </Box>
                )}
                <Box
                  sx={{
                    fontSize: "11px",
                    color: isSelected ? "primary.main" : "text.secondary",
                    whiteSpace: "nowrap",
                  }}
                >
                  {day.date}({day.dayOfWeek})
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Right scroll button */}
      <IconButton
        onClick={handleScrollRight}
        size="small"
        sx={{
          visibility: showRightButton ? "visible" : "hidden",
          color: "primary.main",
          bgcolor: "transparent",
          p: 0.5,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  );
}
