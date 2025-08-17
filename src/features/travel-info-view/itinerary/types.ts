export interface ItineraryItem {
  id: string;
  icon: string;
  title: string;
  time: string;
  location: string;
  description: string;
  cost?: number;
  category: "transport" | "sightseeing" | "meal" | "accommodation" | "other";
  date?: string;
  memo?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  dayOfWeek: string;
  items: ItineraryItem[];
}