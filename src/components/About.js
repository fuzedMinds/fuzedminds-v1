import React from "react";
import img from "../images/about.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <HashLink to="/services#">
              <div class="relative group">
                <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div class="relative z-10 flex items-center space-x-2">
                      <span class="transition-all duration-500 group-hover:translate-x-1">
                        Our offerings
                      </span>
                      <svg
                        class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
