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
  const { children, header, showBottomNavigation = false } = props;

  const StyledBox = styled(Box)({
    marginTop: 16,
    paddingBottom: showBottomNavigation ? 100 : 16,
  });

  return (
    <Container
      sx={{
        padding: 0,
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {header}
      <Container>
        <StyledBox>{children}</StyledBox>
      </Container>
      <Footer />
    </Container>
  );
}
