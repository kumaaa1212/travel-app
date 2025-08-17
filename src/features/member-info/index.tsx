import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import TravelMemberCard from "./components/travelMemberCard";
import StepperBase from "../../ui/StepperBase";
import TravelSummaryCard from "./components/travelSummaryCard";

export default function MemberInfo() {
  const router = useRouter();
  return (
    <>
      <StepperBase activeStep={2} steps={["基本情報", "詳細設定", "参加者"]} />
      <TravelMemberCard />
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
            router.push("/home");
          }}
        >
          次に進む
        </Button>
      </Box>
    </>
  );
}
