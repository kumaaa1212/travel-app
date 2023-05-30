import { auth } from "@/firebase";
import React from "react";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "../features/User";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    dispatch(logout());
  };
  return (
    <div onClick={handleLogout} className="cursor-pointer text-white">
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Logout;
