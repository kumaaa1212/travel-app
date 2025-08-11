import Box from "@mui/material/Box";
import TravelCreateStepper from "./components/travelCreateStepper";
import TravelBasicInfoCard from "./components/travelBasicInfoCard";
import TravelSummaryCard from "./components/tracelSummaryCard";
import { Button } from "@mui/material";

export default function Create() {
  const steps = ["", "", ""];
  return (
    <>
      <Box sx={{ width: "100%", marginTop: 1 }}>
        <TravelCreateStepper activeStep={1} steps={steps} />
        <TravelBasicInfoCard />
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
          >
            次に進む
          </Button>
        </Box>
      </Box>
    </>
  );
}
