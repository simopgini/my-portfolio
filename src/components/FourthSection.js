import React, { useState, useEffect } from "react";
import "../App.css";
// import aaa from "../images";
// import logo from "../../"
// import projectList from "../data/project-list.json";

const FourthSection = () => {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format.";
    }

    if (!values.message) {
      errors.message = "Your message is required!";
    } else if (values.message.length > 500) {
      errors.message = "Your message cannot exceed 500 characters.";
    } else if (values.message.length < 10) {
      errors.message =
        "Your message requires a length of 10 characters or more.";
    }
    return errors;
  };

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
      <p className="mb-40  leading-loose text-gray-300 text-base font-medium">
        Thanks for taking the time to reach out. I'm always open to discussing
        work opportunities. Reach me by filling out the contact form below.
      </p>

      <div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="message success rounded-sm my-8 p-4 bg-slate-600 border-green-400 border-2 w-72 text-center">
            Message was sent successfully!
          </div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}

        <form
          onSubmit={handleSubmit}
          // bisogna fare meglio la validazione quando l'input è fatto bisogna vedere se da verde o no
          // e quando si fa send non può diventare verde se c'è un errore di input/formato ecc
          className={`grid grid-cols-1 gap-6 mb-20 border-a ${
            !isSubmit ? "default" : "success"
          }`}
          // className="grid grid-cols-1 gap-6 mb-20"
        >
          <label className="block">
            <span className="text-white">What’s your name?</span>
            <input
              type="text"
              name="username"
              id="name"
              value={formValues.username}
              // style={{borderColor: isSubmit ? "green" : "gray"}}
              onChange={handleChange}
              className="block
                xs:w-full lg:w-2/4 rounded-sm
                bg-slate-800
                border-transparent
                focus:border-gray-500  focus:ring-0
                border-l-4 px-4 py-3 mt-2 
                transition-all duration-200 ease-out 
                border-red-500 border-l-6"
            ></input>
          </label>
          <p className="text-[#fd4370] font-medium">{formErrors.username}</p>
          <label className="block">
            <span className="text-white">Your email address</span>
            <input
              type="text"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className="
            border-l-4 px-4 py-3 mt-2 transition-all duration-200 ease-out 
            block
            xs:w-full lg:w-2/4            rounded-sm
            bg-slate-800
            border-transparent
            focus:border-gray-500 focus:ring-0"
            ></input>
          </label>
          <p className="text-[#fd4370] font-medium">{formErrors.email}</p>

          <label className="block">
            <span className="text-white">Type your message here</span>
            <textarea
              maxLength="500"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="
            border-l-4 px-4 py-3 mt-2 transition-all duration-200 ease-out
            block
            xs:w-full lg:w-2/4
            rounded-sm
            bg-slate-800
            border-transparent
            focus:border-gray-500  focus:ring-0"
              rows="5"
            ></textarea>
          </label>
          <p className="text-[#fd4370] font-medium">{formErrors.message}</p>

          <button className="flex rounded-full">
            <a
              href="mailto:simop.914@gmail.com"
              className="rounded-full xs:mb-28 md:mb-40 flex justify-center  bg-[#fd4370] hover:bg-[#f73062] duration-300 py-4 ease-in-out xs:w-full md:w-1/4 lg:w-1/4 font-semibold"
            >
              Send message
            </a>
          </button>
        </form>
      </div>
    </section>
  );
};

export default FourthSection;
