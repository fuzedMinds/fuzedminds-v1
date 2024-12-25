import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-sans font-semibold text-black hover:text-blue-500"
        smooth
        to="/home#"
      >
        Home
      </HashLink>

      <HashLink
        className="px-4 font-sans font-semibold text-black hover:text-blue-500"
        smooth
        to="/services#"
      >
        Services
      </HashLink>
      <HashLink
        className="px-4 font-sans font-semibold text-black hover:text-blue-500"
        smooth
        to="/#about"
      >
        About
      </HashLink>

      <HashLink
        className="px-4 font-sans font-semibold text-black hover:text-blue-500"
        to="/contact#"
      >
        Contact Us
      </HashLink>
      {
        // <HashLink
        //   className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-auto px-6 py-2 shadow-xl rounded-xl"
        //   smooth
        //   to="/internship#"
        // >
        //   Internship
        // </HashLink>
        // <HashLink
        //   className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-auto px-6 py-2 shadow-xl rounded-xl "
        //   smooth
        //   to="/training#"
        // >
        //   Training
        // </HashLink>
      }
      <HashLink
        className="px-4 font-sans font-semibold text-black hover:text-blue-500"
        smooth
        to="/career#"
      >
        Career
      </HashLink>
    </>
  );
};

export default NavLinks;
