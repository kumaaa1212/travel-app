import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { format } from "timeago.js";
import PostTemplate from "./component/PostTemplate";
export const Timeago = ({ time }: any) => {
  const convertedTime = format(time.seconds * 1000);
  return <p className="text-3xl mr-4">{convertedTime}</p>;
};
const HeroArea = () => {
  const [state, setstate] = useState<any>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));
      const postData = querySnapshot.docs.map((doc) => doc.data());
      const updatedPosts = [...state, ...postData];
      setstate(updatedPosts);
    };
    dataFetch();
  }, []);
  return (
    <div>
      {state.map((post: any) => (
        <div key={post.postid}>
          <PostTemplate post={post} />
        </div>
      ))}
    </div>
  );
};
export default HeroArea;
