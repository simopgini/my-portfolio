import { BiSolidBriefcase, BiSolidDiamond, BiSolidCog } from "react-icons/bi";
import { IconType } from "react-icons";

const iconComponents: Record<string, IconType> = {
  BiSolidBriefcase,
  BiSolidDiamond,
  BiSolidCog,
};

interface CardProps {
  id: number;
  icon: keyof typeof iconComponents;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, icon, title, description }) => {
  const IconComponent = iconComponents[icon];

  if (!IconComponent) {
    // Handle the case when the icon is not found
    return <div>Error: Icon not found</div>;
  }

  return (
    <div className="bg-[#3a2b71] flex flex-col  px-4 py-4 justify-center  rounded-2xl ">
      <p className="text-[#00c0ff] text-5xl">
        <IconComponent className="text-[#00c0ff] text-5xl" />
      </p>
      <h2 className="mt-3 mb-6 text-3xl">{title}</h2>
      <p className="text-gray-300 text-md font-medium">{description}</p>
    </div>
  );
};

export default Card;
