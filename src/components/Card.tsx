import { BiSolidBriefcase, BiSolidDiamond, BiSolidCog } from "react-icons/bi";
import { IconType } from "react-icons";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  const boxShadowStyle = {
    transition: "all 700ms",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: isHovered ? "5px 5px rgba(255, 255, 255, 0.5)" : "none",
  };

  const IconComponent = iconComponents[icon];

  if (!IconComponent) {
    // Handle the case when the icon is not found
    return <div>Error: Icon not found</div>;
  }

  return (
    // transition: all .45s ease;
    <div
      style={boxShadowStyle}
      className="bg-[#3a2b71] flex flex-col px-4 py-4 justify-center rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-[#00c0ff] text-5xl">
        <IconComponent className="text-[#00c0ff] text-5xl" />
      </p>
      <h2 className="mt-3 mb-6 text-3xl">{title}</h2>
      <p className="text-gray-300 text-md font-medium">{description}</p>
    </div>
  );
};

export default Card;
