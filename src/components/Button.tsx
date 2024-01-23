import React from "react";
import "../App.css";

const Button = () => {
  return (
    <div className="flex mt-8  md:mt-16 ">
      <a
        href="#work"
        className="uppercase ease-in-out duration-300 mt-8  flex justify-center rounded-full xs:mb-28 md:mb-40 bg-[#fd4370] hover:bg-[#f73062]   py-4 xs:w-full md:px-2 md:w-2/4 lg:w-2/5 font-bold"
      >
        My projects
      </a>
    </div>
  );
};

export default Button;
