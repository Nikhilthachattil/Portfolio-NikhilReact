import React from "react";
import Weatherapp from "./weatherapp";
import Playground from "./playground";

function Apps() {
  return (
    <div className="flex flex-wrap sm:gap-3 mx-auto mb-5 lg:gap-5 place-content-center md:mx-5">
      <div>
        <Weatherapp />
      </div>
      <div>
        <Playground />
      </div>
    </div>
  );
}

export default Apps;
