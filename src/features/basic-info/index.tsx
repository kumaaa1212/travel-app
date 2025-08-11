import Box from "@mui/material/Box";
import TravelCreateStepper from "./components/travelCreateStepper";
import TravelBasicInfoCard from "./components/travelBasicInfoCard";
import TravelSummaryCard from "./components/tracelSummaryCard";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function BasicInfo() {
  const steps = ["", "", ""];
  const router = useRouter();
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
            onClick={() => {
              router.push("/create/detail-info");
            }}
          >
            次に進む
          </Button>
        </Box>
      </Box>
    </>
  );
}
