import React, { useRef, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { createAlubm, createPost, pushPost } from "./features/Postdata";
const AlbumItem = ({ index }: { index: number }) => {
  const [editstate, seteditstate] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const post = useSelector((state: RootState) => state.post);
  const handleAddItem = () => {
    const title = titleRef.current?.value ?? "";
    const content = contentRef.current?.value ?? "";
    const newItem = {
      title,
      content,
      time: "", // Default value
      img: "", // Default value
    };
    dispatch(createAlubm({ type: "ADD_ITEM", payload: newItem }));
    seteditstate(true);
  };
  console.log(post.TimeSeparator);
  return (
    <div>
      <div className="">
        <div className="w-5/6 border border-gray-600  mx-auto h-100">
          <div className="mt-10">
            {editstate ? (
              <p
                placeholder="タイトルを入力"
                className="text-5xl block mx-auto text-center border-gray-700 border w-2/3 "
              >
                {post.TimeSeparator[index].title}
              </p>
            ) : (
              <input
                ref={titleRef}
                type="text"
                placeholder="タイトルを入力"
                className="text-5xl block mx-auto text-center border-gray-700 border w-2/3"
              />
            )}
          </div>
          <div className="p-9">
            {editstate ? (
              <p
                placeholder="タイトルを入力"
                className="block w-full border border-gray-700 text-2xl pb-44"
              >
                {post.TimeSeparator[index].content}
              </p>
            ) : (
              <input
                ref={contentRef}
                type="text"
                placeholder="本文を入力"
                className="block w-full border border-gray-700 text-2xl pb-44"
              />
            )}
            <div className="">
              <ImageIcon className="mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {editstate ? (
          <p className="w-20 block text-2xl ml-9 p-2 bg-gray-100 my-10 rounded-lg text-white">
            保存
          </p>
        ) : (
          <button
            className="w-20 block text-2xl ml-9 p-2 bg-gray-700 my-10 rounded-lg text-white"
            onClick={handleAddItem}
          >
            保存
          </button>
        )}
      </div>
    </div>
  );
};

export default AlbumItem;
