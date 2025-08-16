import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function ButtonBase() {
  const router = useRouter();
  return (
    <>
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
      </>
  )
}