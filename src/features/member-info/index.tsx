import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import TravelMemberCard from "./components/travelMemberCard";

export default function MemberInfo() {
  const router = useRouter();
  return (
    <>
      <TravelMemberCard />
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
            router.push("/home");
          }}
        >
          次に進む
        </Button>
      </Box>
    </>
  );
}
