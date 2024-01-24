import "../App.css";
import { ContactForm } from "./ContactForm";

const FourthSection: React.FC = () => {
  return (
    <section id="connect" className="font-semibold">
      <div className="mb-8 flex flex-row items-center">
        <div className="section-line bg-[#fd4370] w-16 h-1 mr-6"></div>
        <p className="section-category  text-gray-300 text-base font-medium">
          Connect
        </p>
      </div>
      <h1 className="pb-8 lg:text-6xl lg:leading-snug md:text-5xl py-2 text-4xl font-semibold leading-normal">
        Interested in working with me?
      </h1>
      <p className="pb-24 leading-loose text-gray-300 text-base font-medium">
        Thanks for taking the time to reach out. I'm always open to discussing
        work opportunities. Reach me by filling out the contact form below.
      </p>

      <ContactForm />
    </section>
  );
};

export default FourthSection;
