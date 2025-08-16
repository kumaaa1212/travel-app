import { Container } from "@mui/material";
import OngoingTripContent from "./components/ongoingTripContent";
import MyTrip from "./components/myTrip";
import ModalBase from "@/ui/Modal";

export default function Home() {
  return (
    <Container sx={{ padding: 0 }}>
      <OngoingTripContent />
      {/* <MyTrip /> */}
      <ModalBase />
    </Container>
  );
}
