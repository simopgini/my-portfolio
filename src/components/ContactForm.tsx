import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BiX } from "react-icons/bi";

export const ContactForm = () => {
  const formRef: any = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [messageLength, setMessageLength] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const minMessageLength = 10;
  const maxMessageLength = 800;

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleTextareaChange = (e: any) => {
    const currentLength = e.target.value.length;
    setMessageLength(currentLength);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      const name = (formData.get("name") as string)?.trim() || "";
      const email = (formData.get("email") as string)?.trim() || "";
      const message = (formData.get("message") as string)?.trim() || "";

      const isValid = validateEmail(email);
      // const isValid = validateEmail(email) && message.length > minMessageLength;

      if (name && email && message && isValid) {
        emailjs
          .sendForm(
            "service_rgvq35v",
            "template_t9k5xp9",
            formRef.current,
            "XrphkE041injPua32"
          )
          .then(
            (result) => {
              console.log(result.text);
              setIsModalVisible(true);
              console.log("Message sent");
            },
            (error) => {
              console.log(error.text);
              console.log("An error has occurred");
            }
          );
      } else {
        console.log("Validation failed. Please check your inputs.");
      }
    }
  };

  return (
    <>
      <form
        className="style-form flex flex-col mb-40"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <label className="pb-2">Name</label>
        <input
          className="block xs:w-full lg:w-2/4 p-2 rounded-md text-gray-600"
          type="text"
          name="name"
          required
        />

        <label className="p-2">Email</label>
        <input
          className={`block xs:w-full lg:w-2/4 p-2 rounded-md text-gray-600 ${
            isValidEmail ? "" : "border-red-500"
          }`}
          type="email"
          name="email"
          onChange={(e) => setIsValidEmail(validateEmail(e.target.value))}
          required
        />

        <label className="p-2">Message</label>
        <textarea
          className="block xs:w-full lg:w-2/4 p-2 mb-1 text-gray-600 rounded-md min-h-40"
          name="message"
          onChange={handleTextareaChange}
          minLength={minMessageLength}
          maxLength={maxMessageLength}
          required
        />
        <p className="text-sm text-gray-300 mb-6">
          {messageLength}/{maxMessageLength} characters
        </p>

        <button
          className="rounded-full xs:mb-28 md:mb-40 flex justify-center  bg-[#fd4370] hover:bg-[#f73062] duration-300 py-4 ease-in-out xs:w-full md:w-1/4 lg:w-1/4 font-semibold"
          type="submit"
          value="Send"
        >
          Send
        </button>
      </form>

      {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="relative bg-white  p-6 rounded-md shadow-md">
            <p className="text-gray-600 mt-4 mb-8">Email sent successfully!</p>

            <BiX
              className=" absolute top-2 right-2 text-gray-600 cursor-pointer"
              size={20}
              onClick={() => setIsModalVisible(false)}
            />

            <button
              onClick={() => setIsModalVisible(false)}
              className="flex font-semibold justify-center p-2 rounded-lg bg-[#fd4370] hover:bg-[#f73062] mx-auto w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
