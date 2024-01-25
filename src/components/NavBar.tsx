import { useState } from "react";
import logo from "../images/logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import "../App.css";

// w-full
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("work"); // Default active link

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenuAndScroll = (sectionId: string) => {
    setMenuOpen(false);
    setActiveLink(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex justify-between items-center xs:mb-16 lg:mb-0 transition-all duration-200 ease-in-out">
        <a href="#home" className="">
          <img
            alt="logo"
            className="h-8 hover:opacity-70 duration-300 ease-in-out"
            src={logo}
          />
        </a>

        <nav className="hidden md:block space-x-4 text-gray-300 font-semibold">
          <a
            href="#work"
            onClick={() => closeMenuAndScroll("work")}
            className={`${
              activeLink === "work" ? "active" : ""
            } duration-300 ease-in-out`}
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => closeMenuAndScroll("about")}
            className={`${
              activeLink === "about" ? "active" : ""
            } duration-300 ease-in-out`}
          >
            About
          </a>
          <a
            href="#connect"
            onClick={() => closeMenuAndScroll("connect")}
            className={`${
              activeLink === "connect" ? "active" : ""
            } duration-300 ease-in-out`}
          >
            Connect
          </a>
        </nav>
        {/* <nav className="hidden md:block space-x-4 text-gray-300 font-semibold">
          <a
            href="#work"
            onClick={() => closeMenuAndScroll("work")}
            className="hover:text-white hover:underline hover:underline-offset-8 duration-300 ease-in-out"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => closeMenuAndScroll("about")}
            className="hover:text-white hover:underline hover:underline-offset-8 duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#connect"
            onClick={() => closeMenuAndScroll("connect")}
            className="hover:text-white hover:underline hover:underline-offset-8 duration-300 ease-in-out"
          >
            Connect
          </a>
        </nav> */}

        <nav className="md:hidden z-50">
          {isMenuOpen ? (
            <BiX
              className="text-white text-4xl cursor-pointer z-50"
              onClick={toggleMenu}
            />
          ) : (
            <BiMenu
              className="block md:hidden text-white text-4xl cursor-pointer z-50"
              onClick={toggleMenu}
            />
          )}
        </nav>
      </header>

      {isMenuOpen && (
        <div className="z-10 md:z-0 fixed md:hidden h-screen w-full bg-indigo-950 md:bg-none top-0 left-0 flex items-center justify-center">
          <ul className="flex flex-col items-center text-white">
            <li className="pb-2">
              <a
                href="#work"
                onClick={() => closeMenuAndScroll("work")}
                className="hover:text-white duration-300 text-xl font-semibold ease-in-out"
              >
                Work
              </a>
            </li>
            <li className="pb-2">
              <a
                href="#about"
                onClick={() => closeMenuAndScroll("about")}
                className="hover:text-white duration-300 text-xl font-semibold ease-in-out"
              >
                About
              </a>
            </li>
            <li className="pb-2">
              <a
                href="#connect"
                onClick={() => closeMenuAndScroll("connect")}
                className="hover:text-white duration-300 text-xl font-semibold ease-in-out"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;

// <>
//   <header className="flex justify-between items-center xs:mb-16 lg:mb-0 transition-all duration-200 ease-in-out">
//     <a href="#home" className="">
//       <img
//         alt="logo"
//         className="h-8 hover:opacity-70 duration-300 ease-in-out"
//         src={logo}
//       />
//     </a>

//     <nav className="hidden md:block space-x-4 text-gray-300 font-semibold">
//       <a href="#work" className="hover:text-white duration-300 ease-in-out">
//         Work
//       </a>
//       <a
//         href="#about"
//         className="hover:text-white duration-300 ease-in-out"
//       >
//         About
//       </a>
//       <a
//         href="#connect"
//         className="hover:text-white duration-300 ease-in-out"
//       >
//         Connect
//       </a>
//     </nav>

//     <nav className="md:hidden z-50">
//       {isMenuOpen ? (
//         <BiX
//           className="text-white text-4xl cursor-pointer z-50"
//           onClick={toggleMenu}
//         />
//       ) : (
//         <BiMenu
//           className="block md:hidden text-white text-4xl cursor-pointer z-50"
//           onClick={toggleMenu}
//         />
//       )}
//     </nav>
//   </header>

//   {isMenuOpen && (
//     <div className="z-10 md:z-0 fixed md:hidden h-screen w-full bg-indigo-950 md:bg-none top-0 left-0 flex items-center justify-center">
//       <ul className="flex flex-col items-center text-white">
//         <li className="pb-2">
//           <a
//             href="#work"
//             className="hover:text-white duration-300 text-xl font-semibold ease-in-out"
//           >
//             Work
//           </a>
//         </li>
//         <li className="pb-2">
//           <a
//             href="#about"
//             className="hover:text-white duration-300 text-xl font-semibold ease-in-out"
//           >
//             About
//           </a>
//         </li>
//         <li className="pb-2">
//           <a
//             href="#connect"
//             className="hover:text-white duration-300 text-xl font-semibold ease-in-out"
//           >
//             Connect
//           </a>
//         </li>
//       </ul>
//     </div>
//   )}
// </>

// <header className="flex justify-between items-center xs:mb-16 lg:mb-0 transition-all duration-200 ease-in-out">
//   {" "}
//   <a href="#home" className="">
//     <img
//       alt="logo"
//       className="h-8 hover:opacity-70 duration-300 ease-in-out"
//       src={logo}
//     />
//   </a>
//   <nav className="hidden md:block space-x-4 text-gray-300 font-semibold">
//     <a href="#work" className="hover:text-white duration-300 ease-in-out">
//       Work
//     </a>
//     <a href="#about" className="hover:text-white duration-300 ease-in-out">
//       About
//     </a>
//     <a
//       href="#connect"
//       className="hover:text-white duration-300 ease-in-out"
//     >
//       Connect
//     </a>
//   </nav>
//   <nav className="md:hidden">
//     {isMenuOpen ? (
//       <BiX
//         className="text-white text-4xl cursor-pointer"
//         onClick={toggleMenu}
//       />
//     ) : (
//       <BiMenu
//         className="block md:hidden text-white text-4xl cursor-pointer"
//         onClick={toggleMenu}
//       />
//     )}
//   </nav>
//   <nav
//     className={`${
//       isMenuOpen ? "flex" : "hidden"
//     } md:hidden xs:space-x-4 sm:space-x-8 lg:space-x-10 text-gray-300 font-semibold`}
//   >
//     <a href="#work" className="hover:text-white duration-300 ease-in-out">
//       Work
//     </a>
//     <a href="#about" className="hover:text-white duration-300 ease-in-out">
//       About
//     </a>
//     <a
//       href="#connect"
//       className="hover:text-white duration-300 ease-in-out"
//     >
//       Connect
//     </a>
//   </nav>
// </header>

// <header className=" flex justify-between items-center xs:mb-16 lg:mb-0 transition-all duration-200 ease-in-out">
//   <a href="#home" className="">
//     <img
//       alt="logo"
//       className="h-8 hover:opacity-70 duration-300 ease-in-out"
//       src={logo}
//     ></img>
//   </a>
//   <nav className="xs:space-x-4 sm:space-x-8 lg:space-x-10 text-gray-300 font-semibold">
//     <a href="#work" className="hover:text-white duration-300 ease-in-out">
//       Work
//     </a>
//     <a href="#about" className="hover:text-white duration-300 ease-in-out">
//       About
//     </a>
//     <a
//       href="#connect"
//       className="hover:text-white duration-300 ease-in-out"
//     >
//       Connect
//     </a>
//   </nav>
// </header>
