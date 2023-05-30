import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, pushPost } from "./component/features/Postdata";
import { RootState } from "@/store";
import AlbumItem from "./component/AlbumItem";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
const Album = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post);
  const user = useSelector((state: RootState) => state.user);
  const [inputValue, setInputValue] = useState<string>("");
  const [albumItems, setAlbumItems] = useState<JSX.Element[]>([]);
  const handleCreate = (value: string, key: string) => {
    // ユーザーの情報を追加
    const pusedPost = {
      postedUser: user.displayName,
      postedUid: user.uid,
      postedImg: user.photoURL,
    };
    dispatch(pushPost({ payload: pusedPost }));
    dispatch(createPost({ type: key, payload: value }));
    dispatch(createPost({ type: "ADD_POSTID", payload: uuidv4() }));
  };
  const handleAddSlug = () => {
    dispatch(createPost({ type: "SLUG", payload: inputValue }));
    setInputValue("");
  };
  const handleInputChange = (value: any) => {
    setInputValue(value);
  };
  const handleAddAlbumItem = () => {
    setAlbumItems([...albumItems, <AlbumItem index={0} key={albumItems.length}/>]);
  };
  const handlePush = () => {
    const docData = async () => {
      try {
        await addDoc(collection(db, "post"), post);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    docData();
    setAlbumItems([]);
    const clearAlbum = {
      postedUser: "",
      postedUid: "",
      title: "",
      weather: "",
      result: "",
      resultScore: "",
      place: "",
      slug: [],
      TimeSeparator: [],
      postid: null,
    };
    dispatch(createPost({ type: "CLEAR", payload: clearAlbum }));
  };
  return (
    <div className="w-5/6 border border-gray-600 mx-auto min-h-screen">
      <div className="">
        <div className="mt-10">
          <input
            value={post.title}
            onChange={(e) => handleCreate(e.target.value, "TRAVEL_TITLE")}
            type="text"
            placeholder="タイトルを入力"
            className="text-7xl block mx-auto text-center border-gray-700 border"
          />
        </div>
        <div className="border-b-2 border-gray-700 mx-10 flex justify-between mt-10">
          <div className="flex text-3xl">
            <p className="ml-1">天気</p>
            <select
              value={post.weather}
              onChange={(e) => handleCreate(e.target.value, "WEATHER")}
            >
              <option value="晴れ">晴れ</option>
              <option value="雨">雨</option>
              <option value="曇り">曇り</option>
              <option value="雪">雪</option>
            </select>
          </div>
          <div className="flex text-3xl mx-3">
            <p>試合結果</p>
            <input
              value={post.resultScore}
              onChange={(e) => handleCreate(e.target.value, "GAME_SCORE")}
              placeholder="1 - 0"
              className="block w-20"
            />
            <select
              value={post.result}
              onChange={(e) => handleCreate(e.target.value, "GAME_RESULT")}
            >
              <option value="勝ち">勝ち</option>
              <option value="負け">負け</option>
              <option value="引き分け">引き分け</option>
            </select>
          </div>
          <div className="flex  text-3xl mx-3">
            <p>会場</p>
            <select
              value={post.place}
              onChange={(e) => handleCreate(e.target.value, "GAME_PLACE")}
            >
              <option value="">選択してください</option>
              <option value="札幌ドーム">札幌ドーム</option>
              <option value="味の素スタジアム">味の素スタジアム</option>
            </select>
          </div>
          <div className="text-3xl flex">
            <input
              value={inputValue}
              type="text"
              placeholder="タグを追加"
              className="block w-40"
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              className="bg-gray-700 block w-10 h-10 rounded-full"
              onClick={() => handleAddSlug()}
            >
              <AddIcon className="text-white mb-1" />
            </button>
          </div>
        </div>
        <div className="mt-8 px-8 flex">
          {post.slug.map((tag:string,index:number) => (
            <p className="text-white text-2xl bg-gray-700 rounded-lg w-20 overflow-hidden px-2 py-1 ml-2" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-start">
        <button
          className="block text-5xl ml-9 p-5 bg-gray-700 my-10 rounded-lg text-white"
          onClick={() => handlePush()}
        >
          投稿
        </button>
        <button
          onClick={handleAddAlbumItem}
          className="block text-5xl ml-9 p-5 bg-gray-700 my-10 rounded-lg text-white"
        >
          追加
        </button>
      </div>
      <div className="">
        {albumItems.map((item, index) => (
          <div key={index} className="">
            <AlbumItem index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
