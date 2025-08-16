import { useRouter } from "next/router";
import Itinerary from "./itinerary";
import QuickSetting from "./components/quickSetting";
import ExpensesList from "./components/ExpensesList";

export default function TravelInfoView() {
  const router = useRouter();

  return (
    <div>
      {/* <QuickSetting /> */}
      <div>
        {router.query.tab === "itinerary" && <Itinerary />}
        {router.query.tab === "expenses" && <ExpensesList />}
      </div>
    </div>
  );
}
