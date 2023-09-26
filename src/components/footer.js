import React from "react";
import img7 from "../assets/facbooklogo.png";
import img8 from "../assets/whatsapp-01.png";
import img9 from "../assets/behance-01.png";
import img10 from "../assets/instagram-01.png";
import img11 from "../assets/linkedin-01.png";
function footer() {
  return (
    <footer>
      <nav className="cursor-pointer mx-auto flex text-xs md:text-sm mt-8 min-h-full w-full justify-between relative py-2 bg-mgreen ">
        <h3 className="text-dcream mx-5 py-2 ">&#169; NikhilbabuThachattil</h3>
        <div className="flex gap-2 mx-5">
          <a
            href="https://www.facebook.com/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-8 h-8 bg-dcream rounded-full shadow-2xl p-1"
              src={img7}
              alt=""
            />
          </a>

          <a
            href=" https://wa.me/+918907117188"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-8 h-8 bg-dcream rounded-full  p-1"
              src={img8}
              alt=""
            />
          </a>
          <a
            href="https://www.behance.net/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-8 h-8 bg-dcream rounded-full  p-1"
              src={img9}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/nikhilbabuthachattil/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-8 h-8 bg-dcream rounded-full shadow-2xl p-1"
              src={img10}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-babu-thachattil-058158284/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-8 h-8 bg-dcream rounded-full shadow-2xl p-1"
              src={img11}
              alt=""
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default footer;
