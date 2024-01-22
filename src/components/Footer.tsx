import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex pb-10 space-x-3 ">
      <div className="xs:p-3 lg:p-4 rounded-sm bg-slate-800 hover:bg-[#f73062]  duration-300 ease-in-out">
        <a
          href="https://www.linkedin.com/in/simona-perugini/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl" />{" "}
        </a>
      </div>
      <div className="xs:p-3 lg:p-4 rounded-sm bg-slate-800 hover:bg-[#f73062]  duration-300 ease-in-out">
        <a href="https://github.com/simopgini" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
