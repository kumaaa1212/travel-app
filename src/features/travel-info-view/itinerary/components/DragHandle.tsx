import React from "react";
import { Box } from "@mui/material";

interface DragHandleProps {
  isDragging?: boolean;
}

const DragHandle: React.FC<DragHandleProps> = ({ isDragging = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3px",
        padding: "8px",
        cursor: isDragging ? "grabbing" : "grab",
        opacity: isDragging ? 0.5 : 1,
        transition: "opacity 0.2s",
        "&:hover": {
          opacity: 0.7,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "3px",
        }}
      >
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#9E9E9E",
          }}
        />
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#9E9E9E",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "3px",
        }}
      >
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#9E9E9E",
          }}
        />
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#9E9E9E",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "3px",
        }}
      >
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#9E9E9E",
          }}
        />
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#9E9E9E",
          }}
        />
      </Box>
    </Box>
  );
};

export default DragHandle;