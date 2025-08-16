import Box from "@mui/material/Box";
import StepperBase from "../../ui/StepperBase";
import TravelBasicInfoCard from "./components/travelBasicInfoCard";
import TravelSummaryCard from "./components/tracelSummaryCard";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function BasicInfo() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ width: "100%", marginTop: 1 }}>
        <Box sx={{ marginTop: 3 }}>
          <StepperBase
            activeStep={0}
            steps={["基本情報", "詳細設定", "参加者"]}
          />
        </Box>
        <TravelBasicInfoCard />
        <TravelSummaryCard />
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "primary.main",
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
