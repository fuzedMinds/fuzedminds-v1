import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/home#"
      >
        Home
      </HashLink>

      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#services"
      >
        Services
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
      >
        About
      </HashLink>

      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/contact#"
      >
        Contact Us
      </HashLink>
      <HashLink
        className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-auto px-6 py-2 shadow-xl rounded-xl"
        smooth
        to="/internship#"
      >
        Internship
      </HashLink>
      <HashLink
        className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-auto px-6 py-2 shadow-xl rounded-xl "
        smooth
        to="/training#"
      >
        Training
      </HashLink>
    </>
  );
};

export default NavLinks;
