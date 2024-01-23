import React, { useState } from "react";
import FourthSection from "./FourthSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Card from "./Card";
import SkillsSection from "./SkillsSection";
// import ContactForm from "./ContactForm"

const MainBody = () => {
  // const [text, setText] = useState("");
  return (
    <>
      <FirstSection />
      <SkillsSection />
      <SecondSection />
      <ThirdSection />
      {/* 
      <ContactForm /> */}
      <FourthSection />
    </>
  );
};

export default MainBody;
