import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import AllInOne from "../components/AllInOne";
import We from "../components/We";

const Main = () => {
  //
  // <Portfolio />
  //    <Cta />
  //      <Clients />
  return (
    <body className="overflow-x-hidden">
      <Home />
      <AllInOne />
      <We />
      <About />

      <Footer />

      {
        //   <div className="rounded-lg group fixed bottom-52 md:bottom-72 right-0 p-2  flex w-40 h-14 bg-[#38b000] hover:bg-[#494bf5] shadow-xl cursor-pointer  items-center">
        //   <HashLink
        //     to="/internship#"
        //     className="text-white inline-flex items-center justify-center  text-lg  rounded-2xl w-40 h-14"
        //   >
        //     Career
        //   </HashLink>
        // </div>
        //  <div className="rounded-lg group fixed bottom-36 md:bottom-56 right-0 p-2  flex w-40 h-14 bg-[#38b000] hover:bg-[#494bf5] shadow-xl cursor-pointer  items-center">
        //   <HashLink
        //     to="/training#"
        //     className="text-white inline-flex items-center justify-center  text-lg rounded-2xl w-40 h-14"
        //   >
        //     Training
        //   </HashLink>
        // </div>
      }
    </body>
  );
};

export default Main;
