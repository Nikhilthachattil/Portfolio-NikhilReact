import React, { useRef } from "react";
import { useState } from "react";
import img20 from "../assets/menubar.png";
import { NavLink } from "react-router-dom";

function MenuBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const svgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== svgRef.current) {
      setOpen(false);
    }
  });
  return (
    <div>
      <nav className="cursor-pointer mx-auto flex min-h-full w-full justify-between relative py-2 bg-dred">
        {open && (
          <div ref={menuRef} className={`lg:block overflow-hidden`}>
            <ul
              className="right-0 absolute items-center text-justify justify-between gap-10
            top-0 px-16 z-30 text-sm rounded-xl lg:flex py-5 backdrop-blur-3xl lg:backdrop-blur-0"
            >
              <NavLink to="/">
                <li
                  onClick={() => setOpen(false)}
                  href="#features"
                  className="px-8 py-2 text-white border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Home
                </li>
              </NavLink>
              <NavLink to="/Profile">
                <li
                  onClick={() => setOpen(false)}
                  href="#download"
                  className="px-8 py-2 text-white border-[1px] rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Profile
                </li>
              </NavLink>
              <NavLink to="/Skill">
                <li
                  onClick={() => setOpen(false)}
                  href="#faq"
                  className="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Skills
                </li>
              </NavLink>
              <NavLink to="/Apps">
                <li
                  onClick={() => setOpen(false)}
                  href="#faq"
                  className="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Apps
                </li>
              </NavLink>
              <NavLink to="/Contact">
                <li
                  onClick={() => setOpen(false)}
                  href="/"
                  className="px-8 py-2 text-white  border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        )}

        <div
          id="menu-btn"
          className="z-30 static right-0 text-white px-5  lg:hidden py-5"
        >
          <img
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
            ref={svgRef}
            className="w-6 h-6 cursor-pointer "
            src={img20}
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}

export default MenuBar;
