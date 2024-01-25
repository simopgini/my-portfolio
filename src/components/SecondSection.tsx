import ProjectSection from "./ProjectSection";

const SecondSection = () => {
  return (
    <section id="work" className="font-semibold  mb-40">
      <div className="mb-8 flex flex-row items-center">
        <div className="section-line bg-[#fd4370] w-16 h-1 mr-6"></div>
        <p className="section-category  text-gray-300 text-base font-medium">
          Work
        </p>
      </div>
      {/* lg:pb-32 xl:pb-32  */}
      <h1 className="lg:text-6xl lg:leading-snug md:text-5xl py-2 pb-8 text-4xl font-semibold leading-normal ">
        Explore These Projects
      </h1>
      <p className="xs:pb-24 text-gray-300">
        Take a friendly tour of some key projects I've had the pleasure of
        working on! If you click on the pictures, you'll land to the websites.
      </p>
      <ProjectSection />
    </section>
  );
};

export default SecondSection;
