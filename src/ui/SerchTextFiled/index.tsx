import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

// TextFieldProps を継承
export type TextFieldProps = MuiTextFieldProps;

export default function TextField(props: TextFieldProps) {
  // デフォルトデザイン
  const defaultSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      backgroundColor: "#f9fafb",
      "&:hover fieldset": {
        borderColor: "secondary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: "secondary.main",
        borderWidth: 2,
      },
      "& input": {
        "&::placeholder": {
          opacity: 0.7,
        },
      },
    },
  };

  // propsのsxとデフォルトのsxをマージ
  const mergedSx = {
    ...defaultSx,
    ...props.sx,
  };

  // slotPropsをマージ
  const mergedSlotProps = {
    ...props.slotProps,
    input: {
      ...props.slotProps?.input,
      ...props.InputProps, // 後方互換性のため
    },
  };

  return (
    <MuiTextField
      variant="outlined"
      placeholder=""
      size="small"
      fullWidth
      {...props}
      sx={mergedSx}
      slotProps={mergedSlotProps}
    />
  );
}
