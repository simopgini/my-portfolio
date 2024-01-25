import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoJavascript,
} from "react-icons/bi";
import { IconType } from "react-icons";

const iconComponents: Record<string, IconType> = {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoJavascript,
};

interface SkillsProps {
  id: number;
  icon: keyof typeof iconComponents;
  title: string;
  color: string;
  index: number;
}

const SkillsComponent: React.FC<SkillsProps> = ({
  id,
  icon,
  title,
  color,
  index,
}) => {
  const IconComponent = iconComponents[icon];

  if (!IconComponent) {
    return <div>Error: Icon not found</div>;
  }
  return (
    // md:items-start
    <ul
      key={id}
      className="flex flex-col items-center lg:mr-8 xl:pr-20 2xl:pr-32"
    >
      <li
        style={{ color }}
        className="text-6xl mb-4 hover:scale-105 transition-transform duration-500 ease-in-out"
      >
        <IconComponent />
      </li>
      <h3 className="uppercase font-bold xs:pb-24 text-gray-300">{title}</h3>
    </ul>
  );
};

export default SkillsComponent;
