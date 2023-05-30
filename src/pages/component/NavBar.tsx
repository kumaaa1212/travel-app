import Link from "next/link";
import React from "react";
import SportsIcon from "@mui/icons-material/Sports";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import ShowChartIcon from "@mui/icons-material/ShowChart";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="flex items-center mt-1 border border-gray-300 rounded-md p-1 ">
          <HomeIcon />
          <Link href={"/"} className="text-3xl ml-2 font-light">
            HOME
          </Link>
        </div>
        <div className="flex items-center mt-1 border border-gray-300 rounded-md p-1">
          <PersonIcon />
          <Link href="/component/Mypage" className="text-3xl ml-2 font-light">
            MYPAGE
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
