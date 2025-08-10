import React from "react";
import { TextField, TextFieldProps, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// TextFieldProps を継承
export type SearchTextFieldProps = TextFieldProps;

export default function SearchTextField(props: SearchTextFieldProps) {
  // デフォルトデザイン
  const defaultProps: TextFieldProps = {
    variant: "outlined",
    placeholder: "",
    size: "small",
    fullWidth: true,
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: "grey.500" }} />
        </InputAdornment>
      ),
      sx: {
        borderRadius: 5,
        backgroundColor: "#f9fafb",
      },
    },
  };

  // 渡された props で上書き
  return <TextField {...defaultProps} {...props} />;
}
