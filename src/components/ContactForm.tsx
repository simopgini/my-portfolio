import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const formRef: any = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [messageLength, setMessageLength] = useState(0);
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
    <form
      className="style-form flex flex-col mb-40"
      ref={formRef}
      onSubmit={sendEmail}
    >
      <label className="pb-2">Name</label>
      <input
        className="p-2 rounded-md text-gray-600"
        type="text"
        name="name"
        required
      />

      <label className="p-2">Email</label>
      <input
        className={`p-2 rounded-md text-gray-600 ${
          isValidEmail ? "" : "border-red-500"
        }`}
        type="email"
        name="email"
        onChange={(e) => setIsValidEmail(validateEmail(e.target.value))}
        required
      />

      <label className="p-2">Message</label>
      <textarea
        className="p-2 mb-1 text-gray-600 rounded-md min-h-40"
        name="message"
        onChange={handleTextareaChange}
        maxLength={maxMessageLength}
        required
      />
      <p className="text-sm text-gray-300 mb-6">
        {messageLength}/{maxMessageLength} characters
      </p>

      <button className="p-2 bg-red-500 rounded-2xl" type="submit" value="Send">
        Send
      </button>
    </form>
  );
};
