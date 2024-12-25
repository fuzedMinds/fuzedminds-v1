import React from "react";
import img from "../images/about.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="about m-auto max-w-6xl p-2 md:p-12 h-5/6 font-sans"
        id="about"
      >
        <h2 className="my-2 text-center text-3xl text-blue-900  font-bold uppercase">
          About Us !
        </h2>

        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900"></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left">
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t float-right"
              src={img}
              loading="lazy"
            />
          </div>
          <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8">
            <h3 className="text-3xl  text-blue-900 font-semibold">
              We create high-quality, custom web applications designed
              specifically to meet the needs of organizations, institutions, and
              SMEs
            </h3>
            <div>
              <p className="my-3 text-xl text-black">
                Our team of experienced software developers is ready to assist
                in building the applications you envision.
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-black">
                We take responsibility for developing custom software solutions
                that automate your business processes and enhance efficiency.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white  bg-[#494bf5] hover:bg-[#fe7062]  inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
