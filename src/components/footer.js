import React from "react";
import img13 from "../assets/whatsapp-2.png";
import img14 from "../assets/behance-3.png";
import img15 from "../assets/instagram-3.png";
import img16 from "../assets/linkedin-03.png";
import img12 from "../assets/facbooklogo2.png";
function footer() {
  return (
    <footer>
      <nav className="cursor-pointer mx-auto flex text-xs md:text-[16px] mt-8 min-h-full w-full justify-between relative py-2 bg-mgreen ">
        <h3 className="text-dcream mx-5 py-2 my-3 ">
          &#169; NikhilbabuThachattil
        </h3>
        <div className="flex gap-2 mx-5">
          <a
            href="https://www.facebook.com/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img
              className="w-6 h-6 md:w-8 md:h-8 rounded-full m-1"
              src={img12}
              alt=""
            />
          </a>

          <a
            href=" https://wa.me/+918907117188"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-6 h-6 md:w-8 md:h-8 m-1" src={img13} alt="" />
          </a>
          <a
            href="https://www.behance.net/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-6 h-6 md:w-8 md:h-8 m-1" src={img14} alt="" />
          </a>
          <a
            href="https://www.instagram.com/nikhilbabuthachattil/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-6 h-6 md:w-8 md:h-8 m-1" src={img15} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-babu-thachattil-058158284/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-6 h-6 md:w-8 md:h-8 m-1" src={img16} alt="" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default footer;
