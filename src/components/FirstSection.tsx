import React from "react";
// import Button from "./Button";
import helloImage from "../images/code.png";
import Button from "./Button";
import Card from "./Card";

const cards = [
  {
    id: 1,
    icon: "BiSolidBriefcase",
    title: "Deeper Skillset",
    description: "Souhda ihoasd haiodh adh ioasd hoasd. Guhda ihoas seh0 ieej.",
  },
  {
    id: 2,
    icon: "BiSolidDiamond",
    title: "Creative Work",
    description: "Souhda ihoasd haiodh adh ioasd hoasd. Guhda ihoas seh0 ieej.",
  },
  {
    id: 3,
    icon: "BiSolidCog",
    title: "Strong Dedication",
    description: "Souhda ihoasd haiodh adh ioasd hoasd. Guhda ihoas seh0 ieej.",
  },
];

const FirstSection = () => {
  return (
    <section id="hello-section" className="font-semibold py-8 ">
      <div className="pt-10 lg:flex lg:items-end">
        <div className="z-10">
          <h1 className="xs:mt-32 lg:mt-40 lg:text-6xl lg:leading-snug md:text-5xl py-2 text-4xl font-semibold leading-normal">
            Hi! I'm <span className="text-[#f84572]">Simona</span>, a{" "}
            <span className="text-[#f84572]">Frontend Developer</span>
          </h1>

          <p className="translate-p transition hero-add text-gray-300 text-normal font-medium xs:mb-16">
            I design and code user-friendly, responsive apps. Stick around and
            check my portfolio.
          </p>

          <Button />
        </div>
        <div className="xs:mb-28 md:px-6 lg:px-0 lg:flex lg:justify-center lg:items-center lg:z-0	">
          <img
            className="w-auto lg:w-2/5 lg:z-0 xs:animate-bounce lg:animate-bounce"
            src={helloImage}
            alt="Mobile App Project"
          ></img>
        </div>
      </div>

      {/* <div className=" flex-nowrap md:flex md:flex-wrap lg:flex-nowrap  gap-8 lg:gap-12"> */}
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
