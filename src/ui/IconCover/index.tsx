import { Box } from "@mui/material";

interface IconCoverProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function IconCover({
  children,
  backgroundColor,
}: IconCoverProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        padding: "5px",
        bgcolor: backgroundColor,
      }}
    >
      {children}
    </Box>
  );
}
