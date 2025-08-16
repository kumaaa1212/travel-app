import React from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";

export interface StatusButtonProps extends ButtonBaseProps {
  selected?: boolean;
  variant?: "primary" | "secondary" | "success" | "grey";
  children: React.ReactNode;
}

export default function StatusButton({
  selected = false,
  variant = "primary",
  children,
  sx,
  ...props
}: StatusButtonProps) {
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          selectedBg: "#1976d2",
          selectedColor: "white",
          defaultColor: "#1976d2",
          defaultBg: "transparent",
          hoverBg: "rgba(25, 118, 210, 0.08)",
          selectedHoverBg: "#1565c0",
          borderColor: "#1976d2",
        };
      case "secondary":
        return {
          selectedBg: "#0361e3",
          selectedColor: "white",
          defaultColor: "#0361e3",
          defaultBg: "transparent",
          hoverBg: "rgba(3, 97, 227, 0.08)",
          selectedHoverBg: "#024fb8",
          borderColor: "#0361e3",
        };
      case "success":
        return {
          selectedBg: "#06710a",
          selectedColor: "white",
          defaultColor: "#06710a",
          defaultBg: "transparent",
          hoverBg: "rgba(6, 113, 10, 0.08)",
          selectedHoverBg: "#045907",
          borderColor: "#06710a",
        };
      case "grey":
        return {
          selectedBg: "#616161",
          selectedColor: "white",
          defaultColor: "#616161",
          defaultBg: "transparent",
          hoverBg: "rgba(97, 97, 97, 0.08)",
          selectedHoverBg: "#424242",
          borderColor: "#616161",
        };
      default:
        return {
          selectedBg: "primary.main",
          selectedColor: "white",
          defaultColor: "primary.main",
          hoverBg: "rgba(25, 118, 210, 0.04)",
          selectedHoverBg: "primary.dark",
          borderColor: "primary.main",
        };
    }
  };

  const colors = getColors();

  return (
    <ButtonBase
      sx={{
        flex: 1,
        padding: "10px 16px",
        borderRadius: "8px",
        fontWeight: selected ? 600 : 500,
        border: "2px solid",
        backgroundColor: selected ? colors.selectedBg : colors.defaultBg,
        color: selected ? colors.selectedColor : colors.defaultColor,
        borderColor: selected ? "transparent" : colors.borderColor,
        transition: "all 0.2s",
        boxShadow: selected ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
        "&:hover": {
          backgroundColor: selected ? colors.selectedHoverBg : colors.hoverBg,
          borderColor: selected ? "transparent" : colors.borderColor,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
