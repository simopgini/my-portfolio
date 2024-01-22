import React from "react";
import "../App.css";

const Button = () => {
  return (
    <div className="flex mt-8  md:mt-16 ">
      <a
        href="#work"
        // bg-[#f84572] hover:bg-[#f73062] bg-[#6a4afb] bg-[#6750cf] bg-[#00c0ff]
        className="uppercase ease-in-out duration-300 mt-8  flex justify-center rounded-full xs:mb-28 md:mb-40 bg-[#00c0ff] hover:bg-[#00a2ff]   py-4 xs:w-full md:px-2 md:w-2/4 lg:w-2/5 font-bold"
      >
        Check my projects
      </a>
    </div>
  );
};

export default Button;
