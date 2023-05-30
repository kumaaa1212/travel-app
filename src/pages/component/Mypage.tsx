import Image from "next/image";
import React, { useEffect, useState } from "react";
import bgImg from "../../../public/ProfilebgImg.jpg";
import Noperson from "../../../public/noperson.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { openEdit } from "./features/EditProfile";
import { editProfile, login } from "./features/User";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import PostTemplate from "./PostTemplate";
import { auth, db } from "@/firebase";
const Mypage = () => {
  const [state, setstate] = useState<any>([]);
  const user = useSelector((state: RootState) => state.user);
  // 自分の投稿を取得
  useEffect(() => {
    const dataFetch = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "post"), where("postedUid", "==", user.uid))
      );
      const postData = querySnapshot.docs.map((doc) => doc.data());
      const updatedPosts = [...state, ...postData];
      setstate(updatedPosts);
    };
    dataFetch();
  }, [login]);
  useEffect(() => {}, []);
  const edit = useSelector((state: RootState) => state.edit.edit);
  const dispatch = useDispatch();
  const handleedit = () => {
    dispatch(openEdit());
    const userKeep = async () => {
      try {
        await setDoc(doc(db, "user", user.uid), user);
        console.log("Document written with ID: ");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    userKeep();
  };
  const handleChenge = (value: String, key: String) => {
    dispatch(editProfile({ type: key, payload: value }));
  };
  return (
    <div className="min-h-screen p-5">
      <div className="">
        <Image src={bgImg} alt="" className="h-80 object-cover relative" />
        <Image
          priority
          src={user.photoURL !== "" ? user.photoURL : Noperson}
          alt={user.photoURL !== "" ? "" : "nopersson"}
          width={130}
          height={130}
          className="h-48 w-48 rounded-full object-cover absolute top-48  left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="mx-auto text-3xl w-5/6 p-6 border border-black mt-10 rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={() => handleedit()}
            className="block bg-gray-700 text-white w-24 p-2 rounded-md mr-10 mt-4"
          >
            編集
          </button>
        </div>
        <div className="flex mb-3">
          <p>名前</p>
          <p className="ml-7">{user.displayName}</p>
        </div>
        <div className="flex mb-3">
          <p>TEAM</p>
          {edit ? (
            <span className="ml-7">{user.team}</span>
          ) : (
            <select
              value={user.team}
              onChange={(e) => handleChenge(e.target.value, "TEAM_NAME")}
            >
              <option value=""></option>
              <option value="FC東京">FC東京</option>
            </select>
          )}
        </div>
        <div>
          <p className="mb-3">自己紹介</p>
          {edit ? (
            <span className="">{user.userIntro}</span>
          ) : (
            <input
              type="text"
              value={user.userIntro}
              onChange={(e) => handleChenge(e.target.value, "USER_INTRO")}
            ></input>
          )}
        </div>
      </div>
      <div>
        {auth.currentUser ? (
          <div>
            {state.map((post: any) => (
              <div key={post.postid}>
                <PostTemplate post={post} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Mypage;
