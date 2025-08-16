import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography } from "@mui/material";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useRouter } from "next/router";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const router = useRouter();
  return (
    <AppBar
      elevation={1}
      position="static"
      sx={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Toolbar>
        <Box
          sx={{
            margin: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <WestOutlinedIcon
            onClick={() => router.back()}
            sx={{ cursor: "pointer" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography sx={{ fontSize: 12, fontWeight: 400, marginTop: 1 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
          <Box />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
