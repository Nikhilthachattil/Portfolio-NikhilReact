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
      <div className="relative block p-5 mx-4 md:mx-5 cursor-pointer md:flex md:flex-wrap gap-2 md:px-5 text-dgreen backdrop-blur-lg  bg-mgreen lg:mx-12 rounded-xl md:rounded-[50px]">
        <div className="md:flex-col py-4 md:w-2/6 gap-2 shadow-xl px-4 m-2 bg-dcream backdrop-blur-lg rounded-[26px]">
          <h1 className=" md:py-2 py-2 md:text-2xl bg-mgreen text-dcream text-center jusitfy-center rounded-t-[18px] hover:bg-mred">
            Nikhil Babu Thachattil
          </h1>
          <h2 className=" py-2 my-4 bg-mgreen text-dcream text-center jusitfy-center hover:bg-mred shadow-inner">
            Front End Developer
          </h2>
          <h2 className=" py-2 my-4 bg-mgreen text-dcream text-center jusitfy-center  hover:bg-mred pb-2 shadow-inner">
            Computer Science Engineer
          </h2>
          <p className="text-justify align-middle py-5 text-dcream bg-mgreen px-2 rounded-b-xl md:rounded-b-[18px] shadow-inner text-xs hover:bg-mred">
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
        <div className="flex flex-wrap bg-dcream m-2 rounded-[26px] shadow-2xl">
          <div className="flex flex-col gap-2 px-5 py-2 m-2 bg-dcream text-xs">
            <p className="py-2 px-2 pb-2 bg-mgreen text-dcream jusitfy-center rounded-[14px] shadow-inner hover:bg-mred">
              DOB : 11/07/1992
            </p>
            <p className="py-2 px-2 pb-2 bg-mgreen text-dcream jusitfy-center rounded-[14px] shadow-inner hover:bg-mred">
              Country : INDIA
            </p>
            <p className="py-2 px-2 pb-2 bg-mgreen text-dcream jusitfy-center rounded-[14px] shadow-inner hover:bg-mred">
              Current Place : DUBAI
            </p>
            <p className="py-2 px-2 pb-2 bg-mgreen text-dcream jusitfy-center rounded-[14px] shadow-inner hover:bg-mred">
              Education : B.E Computer Science
            </p>
            <p className="py-2 px-2 pb-2 bg-mgreen text-dcream jusitfy-center rounded-[14px] hover:bg-mred">
              College : Study World college of Engineering
            </p>
            <p className="py-2 px-2 pb-2 bg-mgreen text-dcream jusitfy-center rounded-[14px] hover:bg-mred">
              G.P.A : 5.9
            </p>
            <div className="flex gap-2 mx-5">
              <a
                href="https://www.facebook.com/thachattilnikhil"
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer py-2"
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full m-1 border-none shadow-xl "
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
                <img
                  className="w-6 h-6 md:w-8 md:h-8 m-1 shadow-xl rounded-full"
                  src={img14}
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/nikhilbabuthachattil/"
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer py-2"
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8 m-1 shadow-xl rounded-full"
                  src={img15}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-babu-thachattil-058158284/"
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer py-2"
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8 m-1 shadow-xl rounded-full"
                  src={img16}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-10 py-3 w-full md:w-auto bg-mgreen m-3 rounded-[20px] text-dcream text-xs shadow-inner">
            <p className="pt-5 pb-2">SKILLS :</p>
            <p className="py-1"> &#8226; HTML 5</p>
            <p className="py-1"> &#8226; CSS 3</p>
            <p className="py-1"> &#8226; JavaScript</p>
            <p className="py-1"> &#8226; React Js</p>
            <p className="py-1"> &#8226; JQuery</p>
            <p className="py-1"> &#8226; Tailwind CSS</p>
            <p className="py-1"> &#8226; Git</p>
            <p className="py-1"> &#8226; Git Hub</p>
            <p className="py-1"> &#8226; Responsive Design</p>
            <p className="py-1 pb-5"> &#8226; APIs</p>
          </div>
        </div>
        <div className="m-2">
          <div className="flex flex-col gap-2 px-12 md:px-3 py-3 w-full md:w-auto border-2 border-dcream bg-mgreen md:m-3 rounded-[20px] text-dcream text-xs shadow-inner">
            <p className="pt-7 py-1">&#8226; Adobe XD</p>
            <p className="py-1"> &#8226; Abode Illustrator</p>
            <p className="py-1"> &#8226; Abode Photoshop</p>
            <p className="py-1"> &#8226; Problem-Solving</p>
            <p className="py-1"> &#8226; Communication</p>
            <p className="py-1"> &#8226; Sass & Less</p>
            <p className="py-1"> &#8226; VS Code Editor</p>
            <p className="py-1"> &#8226; Command Line</p>
            <p className="py-1"> &#8226; Windows OS</p>
            <p className="py-1"> &#8226; Troubleshooting</p>
            <p className="py-1 pb-5"> &#8226; JSON</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
