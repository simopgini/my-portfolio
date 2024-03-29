import profilo from "../images/profile-gray.png";

const ThirdSection = () => {
  return (
    <section id="about" className="font-semibold mb-40">
      <div className="pb-8 flex flex-row items-center">
        <div className="section-line bg-[#fd4370] w-16 h-1 mr-6"></div>
        <p className="section-category  text-gray-300 text-base font-medium">
          About me
        </p>
      </div>
      <h1 className="pb-24 lg:text-6xl lg:leading-snug md:text-5xl py-2 text-4xl font-semibold leading-normal">
        Get a closer look at who I am
      </h1>
      <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
        <div className="pb-24 xs:px-4 sm:pl-10 lg:px-0 lg:pl-0">
          <img
            className="animate-bounce rounded-full xs:h-full md:w-2/3 lg:h-auto lg:w-auto bg-[#00c0ff]"
            alt="Immagine profilo"
            src={profilo}
          ></img>
        </div>

        <div className="lg:w-3/6 lg:mr-14">
          <div className="pb-6 flex items-center">
            <div className="section-line bg-[#fd4370] w-6 h-1 mr-6"></div>
            <div className="animate-bounce2">Who am I?</div>
          </div>
          <p className="pb-10  leading-loose text-gray-300 text-base font-medium animate-bounce2">
            Three years ago, I discovered my love for crafting user-friendly and
            responsive apps through programming. I find joy in unleashing my
            creativity and constantly exploring new technologies as a Front-End
            Developer. Being naturally curious, I'm always on a journey to
            enhance the design of the apps I work on. 🚀
          </p>
          <div className="pb-6 flex items-center">
            <div className="section-line bg-[#fd4370] w-6 h-1 mr-6"></div>
            <div className="animate-bounce2">Skills & Tools</div>
          </div>
          <div className="xs:pb-4 leading-loose text-gray-300 text-base font-medium">
            <p>Design: Photoshop, Affinity Designer, Figma, Sketch.</p>
          </div>
          <div className="xs:pb-16 leading-loose text-gray-300 text-base font-medium">
            <p>
              {" "}
              Development: React, HTML, CSS, SASS/scss, Tailwind CSS, Bootstrap,
              JavaScript, Gatsby.js, Git, VSCode, Yarn, Npm.
            </p>
          </div>

          <button className="rounded-full bg-[#fd4370]  hover:bg-[#f73062] duration-300 ease-in-out p-4 px-8 font-semibold">
            <a href="#connect">Get in touch</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
