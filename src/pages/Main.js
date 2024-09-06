import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Main = () => {
  //
  // <Portfolio />
  //    <Cta />
  return (
    <body className="overflow-x-hidden">
      <Home />
      <Services />
      <About />
      <Clients />
      <Footer />

      <div className="rounded-lg group fixed bottom-52 md:bottom-72 right-0 p-2  flex w-40 h-14 bg-[#38b000] hover:bg-[#494bf5] shadow-xl cursor-pointer  items-center">
        <HashLink
          to="/internship#"
          className="text-white inline-flex items-center justify-center  text-lg  rounded-2xl w-40 h-14"
        >
          Internship
        </HashLink>
      </div>
      <div className="rounded-lg group fixed bottom-36 md:bottom-56 right-0 p-2  flex w-40 h-14 bg-[#38b000] hover:bg-[#494bf5] shadow-xl cursor-pointer  items-center">
        <HashLink
          to="/training#"
          className="text-white inline-flex items-center justify-center  text-lg rounded-2xl w-40 h-14"
        >
          Training
        </HashLink>
      </div>
    </body>
  );
};

export default Main;
