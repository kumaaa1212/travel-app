import React from "react";
import { Box } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ItineraryCard from "./ItineraryCard";
import DragHandle from "./DragHandle";
import { ItineraryItem } from "../types";

interface SortableItineraryCardProps {
  item: ItineraryItem;
  onClick: () => void;
}

const SortableItineraryCard: React.FC<SortableItineraryCardProps> = ({
  item,
  onClick,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        {...attributes}
        {...listeners}
        sx={{
          position: "absolute",
          left: -40,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <DragHandle isDragging={isDragging} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <ItineraryCard item={item} onClick={onClick} />
      </Box>
    </Box>
  );
};

export default SortableItineraryCard;