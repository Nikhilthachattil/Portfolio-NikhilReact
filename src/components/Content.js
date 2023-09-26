import React from "react";
import img1 from "../assets/profile1.jpg";
import img5 from "../assets/spinner.png";
function Content() {
  return (
    <div className="relative flex flex-col  items-center  text-center  px-10 ">
      <h1 className="text-white text-[50px] md:text-[60px] font-Dancingfont-thin ">
        My Portfolio
      </h1>
      <div className="flex  flex-wrap  justify-between text-center text-white text-xl font-Dancing font-thin ">
        <h2>- Front End Developer -</h2>
      </div>
      <hr className="mx-10" />
      <h2 className=" font-Dancing font-thin text-white text-justify align-middle  text-[8px] md:px-5 md:text-xs">
        Hello! My name is Nikhil Babu, and I'm embarking on an exciting journey
        of transformation. I have six years of experience in IT support, and
        while this transition might seem like a significant change, I'm
        wholeheartedly embracing it. I have a strong foundation in various
        technologies, including HTML, CSS, JavaScript, React.js, Material-UI,
        and Tailwind CSS, which has prepared me to bring web experiences to
        life. In addition to my coding skills, I also have a creative toolkit
        that includes Illustrator, Photoshop, and XD, enabling me to design and
        craft digital wonders. I firmly believe that each line of code has the
        power to create something beautiful and meaningful. Welcome to my
        portfolio, where technology and artistry converge to create something
        special.
      </h2>
      <img
        className="w-[190px] rounded-full grayscale  m-4"
        src={img1}
        alt=""
      />
      <div className="flex flex-wrap justify-center gap-5 align-middle text-center divide-x-[1px] py-2 mx-auto">
        <div>
          <p className="text-green-500 text-xs text-start  font-bold">
            &lt; html 5 &gt; <br /> &lt; css 3 &gt;
            <br />
            &lt; javascript &gt; <br />
          </p>
        </div>
        <div>
          <p className="text-green-500 text-xs text-start px-2  font-bold">
            &lt; git &gt; <br />
            &lt; gitub &gt; <br />
            &lt; jsx &gt; <br />
          </p>
        </div>
        <div>
          <p className="text-green-500 text-xs text-start px-2  font-bold">
            &lt; tailwind css &gt; <br />
            &lt; material ui &gt; <br />
            &lt; react &gt; <br />
          </p>
        </div>
        <div>
          <p className="text-green-500 text-xs text-start px-2  font-bold">
            &lt; adobe illustartor &gt; <br />
            &lt; adobe photoshop &gt; <br />
            &lt; adobe Xd &gt; <br />
          </p>
        </div>
      </div>
      <div className="text-white text-2xl font-Satisfy font-thin py-2">
        Nikhil Babu Thachattil
      </div>
      <div className="flex justify-center">
        <img
          className="w-[20px] h-[20px] animate-spin rounded-full grayscale m-2"
          src={img5}
          alt=""
        />

        <p className="text-white text-xs pt-3">Loading.....</p>
      </div>
    </div>
  );
}

export default Content;
