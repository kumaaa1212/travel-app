import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  showBottomNavigation?: boolean;
  footer?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children, header, showBottomNavigation = false } = props;

  const StyledBox = styled(Box)({
    marginTop: 16,
    paddingBottom: showBottomNavigation ? 90 : 16,
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
      {showBottomNavigation && <Footer />}
    </Box>
  );
}
