import { Box, Container, Fab, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddIcon from "@mui/icons-material/Add";
import CardActionArea from "@mui/material/CardActionArea";

export default function MyTrip() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
          あなたの旅行
        </Typography>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <Box sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345, borderRadius: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/okinawa.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                沖縄旅行
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                2025/08/11 ~ 2025/08/15
                <br />
                沖縄県
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
