import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, styled } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  const StyledBox = styled(Box)({
    marginTop: 16,
  });

  return (
    <>
      <CssBaseline />
      <Header {...props} />
      <Toolbar />
      <Container>
        <StyledBox>{children}</StyledBox>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
