import { useState } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DayTabs from "@/components/DayTabs";
import SortableItineraryCard from "./components/SortableItineraryCard";
import ItineraryDetail from "./components/ItineraryDetail";
import { ItineraryDay, ItineraryItem } from "./types";

export default function Itinerary() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDayChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedDay(newValue);
  };

  const days = [
    { day: 1, date: "4月20日", dayOfWeek: "土" },
    { day: 2, date: "4月21日", dayOfWeek: "日" },
    { day: 3, date: "4月22日", dayOfWeek: "月" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
  ];

  const [itineraryData, setItineraryData] = useState<ItineraryDay[]>([
    {
      day: 1,
      date: "4月20日",
      dayOfWeek: "土",
      items: [
        {
          id: "1",
          icon: "🚌",
          title: "東京駅出発",
          time: "09:00",
          location: "東京駅",
          description: "新幹線で京都へ",
          cost: 13000,
          category: "transport",
        },
        {
          id: "2",
          icon: "🚌",
          title: "京都駅到着",
          time: "11:45",
          location: "京都駅",
          description: "",
          category: "transport",
        },
        {
          id: "3",
          icon: "🎯",
          title: "清水寺観光",
          time: "14:00",
          location: "清水寺",
          description: "世界遺産の古寺を見学",
          cost: 400,
          category: "sightseeing",
        },
      ],
    },
    {
      day: 2,
      date: "4月21日",
      dayOfWeek: "日",
      items: [
        {
          id: "4",
          icon: "🍜",
          title: "朝食",
          time: "08:00",
          location: "ホテル",
          description: "ビュッフェ形式",
          category: "meal",
        },
        {
          id: "5",
          icon: "⛩️",
          title: "伏見稲荷大社",
          time: "10:00",
          location: "伏見稲荷大社",
          description: "千本鳥居を散策",
          cost: 0,
          category: "sightseeing",
        },
      ],
    },
    {
      day: 3,
      date: "4月22日",
      dayOfWeek: "月",
      items: [],
    },
    {
      day: 4,
      date: "4月23日",
      dayOfWeek: "火",
      items: [],
    },
  ]);

  const handleCardClick = (item: ItineraryItem) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  const handleBackFromDetail = () => {
    setShowDetail(false);
    setSelectedItem(null);
  };

  const handleEditItem = () => {
    console.log("Edit item:", selectedItem);
  };

  const handleDeleteItem = () => {
    if (selectedItem) {
      setItineraryData((prevData) =>
        prevData.map((day) => ({
          ...day,
          items: day.items.filter((item) => item.id !== selectedItem.id),
        }))
      );
      setShowDetail(false);
      setSelectedItem(null);
    }
  };

  const handleAddItem = () => {
    console.log("Add new item");
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItineraryData((prevData) => {
        const newData = prevData.map((day, index) => {
          if (index === selectedDay) {
            const oldIndex = day.items.findIndex((item) => item.id === active.id);
            const newIndex = day.items.findIndex((item) => item.id === over?.id);
            
            if (oldIndex !== -1 && newIndex !== -1) {
              return {
                ...day,
                items: arrayMove(day.items, oldIndex, newIndex),
              };
            }
          }
          return day;
        });
        
        return newData;
      });
    }
  };

  const currentDayItems = itineraryData[selectedDay]?.items || [];

  if (showDetail && selectedItem) {
    return (
      <ItineraryDetail
        item={selectedItem}
        onBack={handleBackFromDetail}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
      />
    );
  }

  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <DayTabs days={days} value={selectedDay} onChange={handleDayChange} />
      
      <Box sx={{ p: 2, pb: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Fab
            color="secondary"
            aria-label="add"
            size="medium"
            onClick={handleAddItem}
          >
            <AddIcon />
          </Fab>
        </Box>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <Box sx={{ pl: 4 }}>
            {currentDayItems.length > 0 ? (
              <SortableContext
                items={currentDayItems.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {currentDayItems.map((item) => (
                  <SortableItineraryCard
                    key={item.id}
                    item={item}
                    onClick={() => handleCardClick(item)}
                  />
                ))}
              </SortableContext>
            ) : (
              <Box
                sx={{
                  textAlign: "center",
                  py: 8,
                  color: "text.secondary",
                }}
              >
                この日の予定はまだありません
              </Box>
            )}
          </Box>
        </DndContext>
      </Box>
    </Box>
  );
}
