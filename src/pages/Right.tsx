import React from "react";
import HomeProfile from "./component/Right/HomeProfile";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Right = () => {
  const user = useSelector((state: RootState) => state.user);
  return <div className="mt-16">{user ? <HomeProfile /> : null}</div>;
};

export default Right;
