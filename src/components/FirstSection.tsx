import helloImage from "../images/code.png";
import Button from "./Button";
import Card from "./Card";

const cards = [
  {
    id: 1,
    icon: "BiSolidBriefcase",
    title: "Deeper Skillset",
    description:
      "I bring a colorful palette of skills to the table, blending the artistry of HTML, the styling finesse of CSS, and the interactiveness of React.js to create engaging, responsive and user-friendly web experiences.",
  },
  {
    id: 2,
    icon: "BiSolidDiamond",
    title: "Creative Work",
    description:
      " I thrive on turning imagination into reality, infusing passion into design, and crafting visually stunning solutions that captivate and inspire. I'm on a mission to make your user experience smooth and headache-free!",
  },
  {
    id: 3,
    icon: "BiSolidCog",
    title: "Strong Dedication",
    description:
      "With unwavering dedication to finding and embracing new technologies, I bring your ideas to life. Constantly staying up-to-date, I add a sprinkle of functionality and a dash of creativity to create apps that users will love!",
  },
];

const FirstSection = () => {
  return (
    <section id="hello-section" className="font-semibold py-8 ">
      <div className="pt-10 lg:flex lg:items-end lg:justify-between">
        <div className="z-10">
          <h1 className="xs:mt-32 lg:mt-40 lg:text-6xl lg:leading-snug md:text-5xl py-2 text-4xl font-semibold leading-normal">
            Hi! I'm <span className="text-[#f84572]">Simona</span>, a <br></br>
            <span className="text-[#f84572]">Frontend Developer</span>
          </h1>

          <p className="translate-p transition hero-add text-gray-300 text-normal font-medium xs:mb-16">
            I design and code user-friendly, responsive apps. Stick around and
            check my portfolio.
          </p>

          <Button />
        </div>
        <div className="p-4 xs:mb-28 md:px-6 lg:px-0 md:flex md:justify-center lg:items-center lg:z-0	">
          <img
            // 2xl:w-[600px]
            className="w-auto md:w-2/4 lg:w-2/5 xl:w-3/5 2xl:w-[30rem] lg:z-0 xs:animate-bounce lg:animate-bounce"
            src={helloImage}
            alt="Mobile App Project"
          ></img>
        </div>
      </div>

      {/* <div className=" flex-nowrap md:flex md:flex-wrap lg:flex-nowrap  gap-8 lg:gap-12"> */}
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 mb-40">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
