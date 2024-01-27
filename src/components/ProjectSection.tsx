import projectList from "../data/project-list.json";

const images = [
  require("../images/111.png"),
  require("../images/2.png"),
  require("../images/1.png"),
  require("../images/3.png"),
  require("../images/5.png"),
  require("../images/4.png"),
];

const ProjectSection = () => {
  return (
    <div className="lg:flex">
      <div className="lg:flex lg:flex-row-reverse lg:space-x-4 lg:justify-end lg:items-start">
        <div className="flex">
          <section className="relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16">
            {projectList.projects.map((project, index) => (
              <div
                className="col-span-12 flex flex-col md:col-span-6 xl:col-span-4"
                key={project.id}
              >
                <article>
                  <figure
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                      transition: "transform 700ms ease-in-out",
                    }}
                  >
                    <a
                      href={project.button_url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl"
                    >
                      <img
                        alt={project.title}
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out mb-8 rounded-2xl"
                        src={images[index]}
                      />
                    </a>
                  </figure>
                  <h3 className="mt-3 mb-6 text-3xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-normal text-gray-300">
                    {project.description}
                  </p>
                </article>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
