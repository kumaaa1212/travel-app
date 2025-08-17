import React from "react";
import { Card, CardActionArea, CardContent, Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ItineraryItem } from "../types";

interface ItineraryCardProps {
  item: ItineraryItem;
  onClick: () => void;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item, onClick }) => {
  const getIconBackground = (category: string) => {
    switch (category) {
      case "transport":
        return "#2196F3";
      case "sightseeing":
        return "#9C27B0";
      case "meal":
        return "#FF9800";
      case "accommodation":
        return "#4CAF50";
      default:
        return "#757575";
    }
  };

  return (
    <Card sx={{ mb: 1.5, borderRadius: 2, boxShadow: 1 }}>
      <CardActionArea onClick={onClick}>
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: getIconBackground(item.category),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>{item.icon}</Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Box>
                  <Typography variant="body1" fontWeight={600} sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="body1" fontWeight={600}>
                    {item.time}
                  </Typography>
                  {item.cost && (
                    <Typography variant="body2" color="success.main" fontWeight={500}>
                      ¥{item.cost.toLocaleString()}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItineraryCard;