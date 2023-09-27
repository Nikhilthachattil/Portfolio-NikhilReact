import React from "react";
import img4 from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import MenuBar from "./menuBar";

function Header() {
  return (
    <header>
      <nav className="cursor-pointer mx-auto flex min-h-full w-full justify-between relative bg-dred">
        <div className="z-40 w-[40px] h-[40px] my-4 py-5 md:py-3 items-center">
          <img className="static z-30 w-[40px] mx-7" src={img4} alt="" />
        </div>
        <div className={` lg:block overflow-hidden`}>
          <ul
            className=" items-center text-justify justify-between gap-10 hidden place-content-center align-middle mt-3 
             px-16  lg:flex lg:backdrop-blur-0"
          >
            <NavLink to="/">
              <li
                href="#features"
                className="px-8 py-2 text-white border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/Profile">
              <li
                href="#download"
                className="px-8 py-2 text-white border-[1px] rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
              >
                Profile
              </li>
            </NavLink>
            <NavLink to="/Skill">
              <li
                href="#faq"
                className="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
              >
                Skills
              </li>
            </NavLink>
            <NavLink to="/Apps">
              <li
                href="#faq"
                className="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
              >
                Apps
              </li>
            </NavLink>
            <NavLink to="/Contact">
              <li
                href="/"
                className="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
              >
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          id="menu-btn"
          className="z-30 static right-0 text-white px-5  lg:hidden py-1"
        >
          <MenuBar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
