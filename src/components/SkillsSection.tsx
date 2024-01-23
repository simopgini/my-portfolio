import SkillsComponent from "./SkillsComponent";

const skillLogos = [
  {
    id: 0,
    icon: "BiLogoHtml5",
    title: "HTML5",
    color: "#e44d26",
  },
  {
    id: 1,
    icon: "BiLogoCss3",
    title: "CSS3",
    color: "#2299f8",
  },
  {
    id: 2,
    icon: "BiLogoReact",
    title: "React.js",
    color: "#61dbfb",
  },
  {
    id: 3,
    icon: "BiLogoTailwindCss",
    title: "Tailwind Css",
    color: "#38bdf8",
  },
  {
    id: 4,
    icon: "BiLogoBootstrap",
    title: "Bootstrap",
    color: "#7509f6",
  },
  {
    id: 5,
    icon: "BiLogoTypescript",
    title: "Typescript",
    color: "#0077c6",
  },
  {
    id: 6,
    icon: "BiLogoSass",
    title: "SASS",
    color: "#bf4080",
  },
  {
    id: 7,
    icon: "BiLogoFigma",
    title: "Figma",
    color: "#A259FF",
  },
  {
    id: 8,
    icon: "BiLogoGithub",
    title: "Github",
    color: "#ffffff",
  },
  {
    id: 9,
    icon: "BiLogoJavascript",
    title: "Javascript",
    color: "#e2c400",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="work" className="font-semibold  mb-40">
      <div className="mb-8 flex flex-row items-center">
        <div className="section-line bg-[#fd4370] w-16 h-1 mr-6"></div>
        <p className="section-category  text-gray-300 text-base font-medium">
          Main Skills
        </p>
      </div>
      <h1 className="text-center md:text-left pb-24 lg:text-6xl lg:leading-snug md:text-5xl py-2 text-4xl font-semibold leading-normal ">
        My skills
      </h1>

      <div className="grid md:gap-1 lg:gap-8 xl:gap-0 2xl:gap-4 grid-cols-2 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-2 mb-40">
        {skillLogos.map((logo, index) => (
          <SkillsComponent key={logo.id} {...logo} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
