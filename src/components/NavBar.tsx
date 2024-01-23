import logo from "../images/logo.png";

// w-full
const NavBar = () => {
  return (
    <header className=" flex justify-between items-center xs:mb-16 lg:mb-0 transition-all duration-200 ease-in-out">
      <a href="#home" className="">
        <img
          alt="logo"
          className="h-8 hover:opacity-70 duration-300 ease-in-out"
          src={logo}
        ></img>
      </a>
      <nav className="xs:space-x-4 sm:space-x-8 lg:space-x-10 text-gray-300 font-semibold">
        <a href="#work" className="hover:text-white duration-300 ease-in-out">
          Work
        </a>
        <a href="#about" className="hover:text-white duration-300 ease-in-out">
          About
        </a>
        <a
          href="#connect"
          className="hover:text-white duration-300 ease-in-out"
        >
          Connect
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
