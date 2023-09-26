import React from "react";
import img4 from "../assets/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [expanded, setExpanded] = useState(true);
  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <header>
      <nav className="cursor-pointer mx-auto flex  min-h-full w-full justify-between relative py-2 bg-dred ">
        <div className="z-40 w-[40px] h-[40px] my-2 py-3 items-center">
          <img className="static z-30 w-[40px] mx-7" src={img4} alt="" />
        </div>
        <div
          className={`${
            expanded ? "hidden" : "block"
          } lg:block  overflow-hidden`}
        >
          <ul
            className=" right-0 absolute items-center text-justify justify-between gap-10
            top-0 px-16 z-30 text-sm rounded-xl lg:flex py-5 backdrop-blur-3xl lg:backdrop-blur-0"
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
                class="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
              >
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          id="menu-btn"
          className="z-30 fixed right-0 text-white px-5  lg:hidden py-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h- cursor-pointer text-dred p-1 bg-dcream rounded-full "
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
