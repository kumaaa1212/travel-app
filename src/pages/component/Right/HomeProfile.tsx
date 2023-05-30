import Image from "next/image";
import React from "react";
import Noperson from "../../../../public/noperson.png";
import Link from "next/link";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { openEdit } from "../features/EditProfile";

const HomeProfile = () => {
  const dispatch = useDispatch();
  const handleedit = () => {
    dispatch(openEdit());
  };
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <div>
        <Image
          priority
          src={user.photoURL !== "" ? user.photoURL : Noperson}
          alt={user.photoURL !== "" ? "" : "nopersson"}
          width={130}
          height={130}
          className="w-32 h-32 rounded-full mx-auto"
        />
      </div>
      <div className="">
        <h1 className="text-center">{user.displayName}</h1>
        <p className="text-center mb-3">TEAM:{user.team}</p>
        <Link
          href="/component/Mypage"
          className="bg-gray-700 p-1 rounded-md text-white mx-auto block w-44 text-center"
          onClick={() => handleedit()}
        >
          プロフィールを編集
        </Link>
      </div>
    </div>
  );
};
export default HomeProfile;
