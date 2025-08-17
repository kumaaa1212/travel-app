import { useRouter } from "next/router";
import Itinerary from "./itinerary";
import QuickSetting from "./components/quickSetting";
import ExpensesList from "./components/ExpensesList";
import { Box, Button } from "@mui/material";

export default function TravelInfoView() {
  const router = useRouter();

  return (
    <div>
      <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
        <QuickSetting />
        {/* <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            "&:hover": {
              bgcolor: "secondary.dark",
            },
          }}
        >
          旅行中クイック情報を設定
        </Button> */}
      </Box>
      <div>
        {router.query.tab === "itinerary" && <Itinerary />}
        {router.query.tab === "expenses" && <ExpensesList />}
      </div>
    </div>
  );
}
