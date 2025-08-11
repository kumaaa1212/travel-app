import { Box, Button } from "@mui/material";
import TravelSummaryCard from "./components/tracelSummaryCard";
import TravelBudgetCard from "./components/travelBudgetCard";
import TravelStatusCard from "./components/travelStatusCard";
import { useRouter } from "next/router";

export default function DetailInfo() {
  const router = useRouter();
  return (
    <>
      <TravelBudgetCard />
      <TravelStatusCard />
      <TravelSummaryCard />
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "grey.500",
            color: "white",
            height: 40,
            borderRadius: 2,
          }}
          onClick={() => {
            router.push("/create/member-info");
          }}
        >
          次に進む
        </Button>
      </Box>
    </>
  );
}
