import { useState } from "react";
import DayTabs from "@/components/DayTabs";

export default function Itinerary() {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedDay(newValue);
  };

  const days = [
    { day: 1, date: "4月20日", dayOfWeek: "土" },
    { day: 2, date: "4月21日", dayOfWeek: "日" },
    { day: 3, date: "4月22日", dayOfWeek: "月" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
    { day: 4, date: "4月23日", dayOfWeek: "火" },
  ];

  return (
    <>
      <DayTabs days={days} value={selectedDay} onChange={handleDayChange} />
    </>
  );
}
