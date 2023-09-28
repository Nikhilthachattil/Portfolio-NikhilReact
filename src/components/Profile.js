import React from "react";

import img14 from "../assets/behance-2.png";
import img15 from "../assets/instagram-2.png";
import img16 from "../assets/linkedin-2.png";
import img12 from "../assets/facbooklogo3.png";

function Profile() {
  return (
    <section>
      <div className="font-thin font-Satisfy text-2xl text-dgreen py-2">
        <h1 className="px-5">Profile : </h1>
      </div>
      <div className="relative block p-5 mx-4 md:mx-12  md:flex md:flex-wrap gap-5 md:px-10 text-dgreen backdrop-blur-lg place-content-center bg-mgreen lg:mx-12 rounded-xl md:rounded-[50px]">
        <div className="md:flex-col  md:w-2/6 gap-2 shadow-xl px-6 m-2 bg-dcream backdrop-blur-lg rounded-xl">
          <h1 className="text-dgreen py-5 text-2xl">Nikhil Babu Thachattil</h1>
          <h2 className="text-dgreen py-5">Front End Developer</h2>
          <h2 className="text-dgreen py-5 pb-2">Computer Science Engineer</h2>

          <p className="text-justify align-middle py-4 text-dcream bg-mgreen px-2 rounded-t-xl md:rounded-xl text-xs">
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
        <div className="flex flex-wrap bg-dcream m-2 rounded-2xl">
          <div className="flex flex-col gap-2 px-10 py-5 m-2 bg-dcream rounded-xl text-xs">
            <p className="pt-5 pb-2">DOB : 11/07/1992</p>
            <p className="py-2">Country: INDIA</p>
            <p className="py-2">Current Place: DUBAI</p>
            <p className="py-2">Education: B.E Computer Science</p>
            <p className="py-2">College: Study World college of Engineering</p>
            <div className="flex gap-2 mx-5">
              <a
                href="https://www.facebook.com/thachattilnikhil"
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer py-2"
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full m-1  border-none"
                  src={img12}
                  alt=""
                />
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
          </div>
          <div className="flex flex-col gap-2 px-10 py-5 w-full md:w-auto bg-mgreen m-2 rounded-xl text-dcream text-xs">
            <p className="pt-5 pb-2">SKILLS :</p>
            <p className="py-1"> &#8226; HTML 5</p>
            <p className="py-1"> &#8226; CSS 3</p>
            <p className="py-1"> &#8226; Javascript</p>
            <p className="py-1"> &#8226; React Js</p>
            <p className="py-1"> &#8226; Tailwind CSS</p>
            <p className="py-1"> &#8226; Material UI</p>
            <p className="py-1"> &#8226; Git</p>
            <p className="py-1"> &#8226; Git Hub</p>
            <p className="py-1"> &#8226; Adobe Ilustrator</p>
            <p className="py-1 pb-5"> &#8226; Abode Photoshop</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
