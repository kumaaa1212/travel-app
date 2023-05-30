import { Inter } from "next/font/google";
import HeroArea from "./HeroArea";
import Right from "./Right";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { collection, Timestamp, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { fetchUser, login } from "./component/features/User";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    const serchUser = async () => {
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        if (doc.data().uid == user.uid) {
          dispatch(fetchUser(doc.data()));
        }
      });
    };
    serchUser();
  }, [dispatch, login]);
  return (
    <div className="flex">
      <div className="w-4/5 ">
        <HeroArea />
      </div>
      <div className="w-1/6 fixed right-2">
        <Right />
      </div>
      {auth.currentUser ? (
        <Link
          href="/Post"
          className="fixed bottom-10 right-6 bg-gray-700 rounded-full"
        >
          <AddIcon style={{ fontSize: "100px", color: "white" }} />
        </Link>
      ) : null}
    </div>
  );
}
