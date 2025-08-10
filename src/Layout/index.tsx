import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, styled } from "@mui/material";
import Header from "./Header";

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
      <Header />
      <Container>
        <StyledBox>{children}</StyledBox>
      </Container>
    </>
  );
}
