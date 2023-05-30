import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "./component/NavBar";
import { motion } from "framer-motion";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Login from "./component/account/Login";
import Logout from "./component/account/Logout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
interface LayoutProps {
  children?: React.ReactNode;
  pageContent: string;
}
const AnimationTitle = () => {
  const title = "TOKOTOKO-J";
  const Icon = <SportsSoccerIcon fontSize="inherit" />;
  const hoverVariants = {
    hover: {
      y: -10,
      x: -10,
      rotate: 360, // 回転する量
    },
  };
  return (
    <div className="flex items-center text-gray-100">
      {title.split("").map((letter, index) =>
        letter === "O" ? (
          <motion.span
            key={index}
            className="text-4xl text-white "
            whileHover="hover"
            variants={hoverVariants}
          >
            {Icon}
          </motion.span>
        ) : (
          <span key={index} className="text-4xl pt-2 text-white ">
            {letter}
          </span>
        )
      )}
    </div>
  );
};
const Layout = ({ children, pageContent }: LayoutProps) => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <Head>
        <title>{pageContent}</title>
        <meta name="description" content={pageContent} />
      </Head>
      <header className="h-14 fixed top-0 left-0 z-50 w-full bg-gray-700 flex justify-between">
        <AnimationTitle />
        <div className="flex text-3xl items-center mr-4 mt-3">
          <div className=" rounded-xl text-black font-bold">
            <Login />
          </div>
          <div className="mx-6 rounded-xl text-black font-bold">
            <Logout />
          </div>
        </div>
      </header>
      <main className="flex mt-14 container">
        <div className="w-1/6 fixed top-20 left-0 z-50">
          <NavBar />
        </div>
        <div className="w-5/6 absolute right-0">{children}</div>
      </main>
      <footer></footer>
    </>
  );
};
export default Layout;
