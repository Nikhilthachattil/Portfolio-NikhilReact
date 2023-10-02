import React from "react";
import img7 from "../assets/facbooklogo.png";
import img8 from "../assets/whatsapp-01.png";
import img9 from "../assets/behance-01.png";
import img10 from "../assets/instagram-01.png";
import img11 from "../assets/linkedin-01.png";
import img20 from "../assets/telegram.png";
import img21 from "../assets/messenger.png";
import img22 from "../assets/skype.png";
import img23 from "../assets/twitter x.png";
import img24 from "../assets/github.png";

function contact() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("submited");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxOtlAL6fO3FFw1FfN6IhMWoZ41Jt8G-RTIRUI2FxE8ZDAFaoY-_FtmBzOjly7AcSoa/exec",
      { method: "POST", body: formData }
    );
  }
  return (
    <section className="flex flex-col place-content-center">
      <div className="font-thin font-Satisfy text-2xl text-dgreen py-2">
        <h1 className="px-5">Contact : </h1>
      </div>
      <div className="relative block text-xs py-5 mx-5  md:m-1 md:mx-5 md:flex md:flex-wrap md:gap-5  text-dgreen backdrop-blur-lg place-content-center bg-mgreen lg:mx-12 rounded-xl md:rounded-[50px]">
        <div className="md:flex-col mx-5  md:w-2/6 gap-2 md:px-6  bg-dcream shadow-inner backdrop-blur-lg rounded-xl">
          <h1 className="text-mgreen py-5 md:text-2xl mx-5">THANK YOU</h1>

          <p className="text-justify align-middle py-4 md:py-10 text-dcream bg-mgreen shadow-md px-2 m-2 rounded-t-xl md:rounded-xl text-xs">
            With a passion for drawing and creating, I started playing with the
            thought of being a designer already in my childhood. However,
            somewhere between childhood and my early twenties, I somehow dropped
            that dream since I was following the path of an IT support engineer
            Now, I am obsessed with changing my career to the design field of
            web development, where designing and coding come together to give me
            a thrill. I am looking to transition into a role as a front-end
            developer. With a background of 6 years in IT support, I am now
            drawn to the creative aspects of the field. While this might seem
            like a significant change, it is a direction I am eager to pursue.
          </p>
        </div>
        <div className="bg-dcream my-2 md:py-9 xs:m-5 md:m-1 flex md:flex-col justify-between md:gap-10 px-2 w-fit mx-auto lg:mx-5 text-justify place-content-center rounded-xl">
          <a
            href="https://www.facebook.com/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream rounded-full shadow-2xl p-1"
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
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
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
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
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
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
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
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img11}
              alt=""
            />
          </a>
        </div>
        <div className="bg-dcream my-2 md:py-9 xs:m-5 md:m-1 flex md:flex-col justify-between md:gap-10 px-2 w-fit mx-auto lg:mx-5 text-justify place-content-center rounded-xl">
          <a
            href="https://telegram.me/likhin_Nikki"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream rounded-full shadow-2xl p-1"
              src={img20}
              alt=""
            />
          </a>

          <a
            href=" https://m.me/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img21}
              alt=""
            />
          </a>
          <a
            href="https://join.skype.com/invite/qz3zEdfquObT"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img22}
              alt=""
            />
          </a>
          <a
            href="https://twitter.com/BabuNikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img23}
              alt=""
            />
          </a>
          <a
            href="https://github.com/Nikhilthachattil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img24}
              alt=""
            />
          </a>
        </div>
        <form
          className="text-dcream bg-dcream block rounded-2xl py-2 px-10 mx-5 justify-center text-md text-center"
          onSubmit={(e) => Submit(e)}
        >
          <div class="flex flex-wrap text-justify md:gap-6 justify-between">
            <label for="name" class="py-4 text-dblack">
              Name:
            </label>
            <input
              name="your-name"
              type="text"
              id="number"
              placeholder="Full Name"
              class=" rounded-[20px] place-content-end  bg-mgreen py-2 my-2 px-4  outline-none "
            />
          </div>
          <div class="flex flex-wrap text-justify justify-between">
            <label for="name" class="py-4 text-dblack">
              Phone:
            </label>
            <input
              type="phonenumber"
              name="your-number"
              id="name"
              placeholder="Phone Number"
              class=" rounded-[20px] place-content-end  bg-mgreen py-2 my-2 px-4  outline-none "
            />
          </div>
          <div class="flex flex-wrap text-justify justify-between">
            <label for="name" class="py-4 text-dblack">
              Email:
            </label>
            <input
              type="text"
              name="your-email"
              id="name"
              placeholder="username@domain.com"
              class=" rounded-[20px] place-content-end  bg-mgreen py-2 my-2 px-4  outline-none "
            />
          </div>
          <div class="flex flex-wrap text-justify justify-between">
            <label for="name" class="py-4 text-dblack">
              Subject:
            </label>
            <input
              type="text"
              name="your-subject"
              id="name"
              placeholder="Subject"
              class=" rounded-[20px] place-content-end  bg-mgreen py-2 my-2 px-4  outline-none "
            />
          </div>

          <div class="relative mb-2">
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Your Message"
              class="md:w-full w-full my-2 bg-mgreen rounded-xl text-center resize-none"
              required
            ></textarea>
          </div>
          <div className="">
            <button
              class="bg-mgreen hover:bg-blue-700 text-dcream font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div>
            <h1 className="text-dgreen py-4 md:text-2xl mx-5 font-Satisfy">
              Nikhil Babu Thachattil
            </h1>
            <p className="text-dgreen py-2">
              Phone: +971551227158, +918907117188
            </p>
            <a
              href="mailto:thachattilnikhil@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer text-dgreen py-2"
            >
              Thachattilnikhil@gmail.com
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default contact;
