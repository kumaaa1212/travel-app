import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  showBottomNavigation?: boolean;
}

export default function Layout(props: LayoutProps) {
  const { children, header } = props;

  const StyledBox = styled(Box)({
    marginTop: 16,
    paddingBottom: 90,
  });

  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      {header}
      <Container sx={{ flex: 1, paddingBottom: 0 }}>
        <StyledBox>{children}</StyledBox>
      </Container>
    </Box>
  );
}
