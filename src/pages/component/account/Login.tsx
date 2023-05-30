import React, { useEffect } from "react";
import { auth, db } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, login } from "../features/User";
import { RootState } from "@/store";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
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
    if (user.uid) {
      serchUser();
    }
  }, [user.uid]);
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) return;
        const user = result.user;
        const newuser = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        };
        dispatch(login(newuser));
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <div onClick={handleLogin} className="cursor-pointer text-white ">
        Login
      </div>
    </>
  );
};
export default Login;
