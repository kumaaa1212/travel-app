import { Box, Button } from "@mui/material";
import TravelBudgetCard from "./components/travelBudgetCard";
import TravelStatusCard from "./components/travelStatusCard";
import { useRouter } from "next/router";
import StepperBase from "../../ui/StepperBase";
import TravelSummaryCard from "./components/travelSummaryCard";

export default function DetailInfo() {
  const router = useRouter();
  return (
    <>
      <StepperBase activeStep={1} steps={["基本情報", "詳細設定", "参加者"]} />
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
