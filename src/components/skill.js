import React from "react";

function skill() {
  return (
    <section>
      <div className="text-dgreen font-thin font-Satisfy text-2xl mx-5 pt-5 ">
        <h1>Skills : </h1>
      </div>
      <div className="relative grid xs:grid-cols-1 md:text-md mb-5 md:grid-rows-3 w-screen gap-10 xs:column sm:grid-cols-3 md:grid-cols-4 mx-auto lg:grid-cols-6 items-center md:w-full text-center jusitfy-center px-14 ">
        <div className="font-thin md:col-span-3 w-full text-xl text-dcream text-center rounded-xl py-12 px-10 h-32 md:mx-5 bg-dblack">
          HTML 5
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 px-10 h-32 md:mx-5 bg-dorange">
          CSS 3
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 px-5 h-32 md:mx-5 bg-lbrown">
          JavaScript
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 px-5 h-32 md:mx-5 bg-lgreen">
          React Js
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 md:py-12  px-5 h-32 md:mx-5 bg-mred">
          Tailwind CSS
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 md:py-12  px-5 h-32 md:mx-5 bg-mgreen">
          Matieral UI
        </div>
        <div className="font-thin w-full text-xl md:col-span-2 text-dcream text-center rounded-xl py-12 px-5 h-32 md:mx-5 bg-claret ">
          Git
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 px-5 h-32 md:mx-5 bg-dblue">
          Git Hub
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 px-5 md:py-8 h-32 md:mx-5 bg-indigo">
          Adobe Photoshop
        </div>
        <div className="font-thin w-full text-xl text-dcream text-center rounded-xl py-12 px-5 md:py-8 h-32 md:mx-5 bg-indian ">
          Adobe Illustrator
        </div>
      </div>
    </section>
  );
}

export default skill;
