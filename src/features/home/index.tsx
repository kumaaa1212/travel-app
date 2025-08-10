import { Container } from "@mui/material";
import OngoingTripContent from "./components/ongoingTripContent";

export default function Home() {
  return (
    <Container sx={{ padding: 0 }}>
      <OngoingTripContent />
    </Container>
  );
}
