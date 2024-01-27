import React, { useRef, useState } from "react";

export const ContactForm: React.FC = () => {
  const formRef: any = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [messageLength, setMessageLength] = useState(0);

  const minMessageLength = 10;
  const maxMessageLength = 800;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        window.location.href = `mailto:${email}`;
      } else {
        console.log("Validation failed. Please check your inputs.");
      }
    }
  };

  return (
    <>
      <form
        className="style-form flex flex-col"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <label className="pb-2 text-gray-300">Name</label>
        <input
          className="block xs:w-full lg:w-2/4 p-2 rounded-md bg-gray-200 text-gray-600"
          type="text"
          name="name"
          required
        />

        <label className="p-2 text-gray-300">Email</label>
        <input
          className={`block xs:w-full lg:w-2/4 p-2 rounded-md bg-gray-200 text-gray-600 ${
            isValidEmail ? "" : "border-red-500"
          }`}
          type="email"
          name="email"
          onChange={(e) => setIsValidEmail(validateEmail(e.target.value))}
          required
        />

        <label className="p-2 text-gray-300">Message</label>
        <textarea
          className="block xs:w-full lg:w-2/4 p-2 mb-1 bg-gray-200 text-gray-600 rounded-md min-h-40"
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
    </>
  );
};
