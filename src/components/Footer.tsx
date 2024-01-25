import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="p-12 bg-[#00c0ff] rounded-xl space-x-3 mb-12">
        <h4 className="text-black font-semibold pl-2.5 pb-3">Social</h4>
        <div className="flex items-center justify-start">
          <div className="rounded-sm  hover:scale-110  duration-300 ease-in-out mr-2">
            <a
              href="https://www.linkedin.com/in/simona-perugini/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl" />{" "}
            </a>
          </div>
          <div className="rounded-sm  hover:scale-110  duration-300 ease-in-out">
            <a
              href="https://github.com/simopgini"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <p className="pb-12">Developed with 🫶🏻 by Simona</p>
      </div>
    </>
  );
};

export default Footer;
