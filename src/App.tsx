import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    // xs:px-6 xs:py-8 md:px-10 md:py-12 md2:px-16 md2:py-20 lg:px-10 lg:py-0 xl:px-20 xl:py-0
    <div className="bg-img app-container	text-white w-screen h-full xs:px-6 xs:py-8 md:px-10 md:py-12 md2:px-16 md2:py-20 lg:px-10 lg:py-0 xl:px-20 xl:py-0 2xl:px-60 3xl:px-96">
      <AppHeader />
      <MainBody />
      <Footer />
    </div>
  );
};

export default App;
