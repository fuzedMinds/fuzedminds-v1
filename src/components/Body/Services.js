import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import ai from "../../images/tech/ai.png";
import android from "../../images/tech/android.png";
import angular from "../../images/tech/angular.png";
import css from "../../images/tech/css.png";
import db from "../../images/tech/db.png";
import dotnet from "../../images/tech/dotnet.png";
import git from "../../images/tech/git.png";
import html from "../../images/tech/html.png";
import ios from "../../images/tech/ios.png";
import java from "../../images/tech/java.png";
import jira from "../../images/tech/jira.png";
import js from "../../images/tech/js.png";
import mysql from "../../images/tech/mysql.png";
import nodejs from "../../images/tech/nodejs.png";
import oracle from "../../images/tech/oracle.png";
import php from "../../images/tech/php.png";
import python from "../../images/tech/python.png";
import react from "../../images/tech/react.png";

const Services = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/internship" />
        <title>fuzedMinds - Services</title>
        <meta
          name="description"
          content="Join our internship program at Fuzed Minds and start your IT career."
        />
      </Helmet>
      <div className="overflow-hidden">
        <div>
          <NavBar />
        </div>
        <div className=" md:max-h-screen  mx-auto  h-[300px] lg:h-[600px] ">
          <div className="mt-8 md:mt-0 object-cover h-[300px] lg:h-[600px] md:h-fit w-screen relative -z-1 top-0  ">
            <div className=" flex h-1/3 ">
              <div className="h-full w-1/6  bg-[#f0f0f0] flex justify-center items-center">
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={ai}
                />
              </div>
              <div className="h-full w-1/6 bg-[#e8fdf6] flex justify-center items-center">
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={android}
                />
              </div>
              <div className="h-full w-1/6 bg-[#fbe0e6] flex justify-center items-center">
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={angular}
                />
              </div>
              <div className="h-full w-1/6  bg-[#dffbdb] flex justify-center items-center">
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={css}
                />
              </div>
              <div className="h-full w-1/6 bg-[#f0f0f0] flex justify-center items-center">
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={db}
                />
              </div>
              <div className="h-full w-1/6 bg-[#f7f7e3] flex justify-center items-center">
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={dotnet}
                />
              </div>
            </div>
            <div className=" flex h-1/3">
              <div className="h-full w-1/6 bg-[#fbe0e6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={git}
                />
              </div>
              <div className="h-full w-1/6 bg-[#e5f1fb] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={html}
                />
              </div>
              <div className="h-full w-1/6 bg-[#dffbdb] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={ios}
                />
              </div>
              <div className="h-full w-1/6 bg-[#f7f7f7] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={java}
                />
              </div>
              <div className="h-full w-1/6 bg-[#f7f7e3] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={jira}
                />
              </div>
              <div className="h-full w-1/6 bg-[#f7f7f7] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={js}
                />
              </div>
            </div>
            <div className=" flex h-1/3">
              <div className="h-full w-1/6 bg-[#e8fdf6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={mysql}
                />
              </div>
              <div className="h-full w-1/6 bg-[#f0f0f0] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={nodejs}
                />
              </div>
              <div className="h-full w-1/6 bg-[#fbe0e6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={oracle}
                />
              </div>
              <div className="h-full w-1/6 bg-[#e5f1fb] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={php}
                />
              </div>
              <div className="h-full w-1/6 bg-[#e8fdf6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={python}
                />
              </div>
              <div className="h-full w-1/6 bg-[#fbe0e6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-rotate-y animate-infinite animate-duration-[15000ms] animate-delay-0 "
                  src={react}
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="absolute max-w-screen-xl mx-auto top-10 mt-12 md:mt-20 flex items-center my-auto justify-between "
          >
            <div className="flex flex-col justify-center text-center md:mt-20 md:pl-8 mt-5 ">
              <h1 className="mb-5 md:text-5xl text-2xl font-bold text-blue-900 font-sans bg-white bg-opacity-45  rounded-lg shadow-md">
                {/* We build digital solutions to help businesses scale */}
                We offer
                <span className="text-[#fb443a]"> services </span> that are
                tailored to your needs.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-10 bg-[#0060b4] mt-4 mb-0">
        <div className="text-black rounded-lg p-3 lg:w-2/5 m-3 items-start">
          <h1 className="font-sans text-[20px] font-medium">Oure Solution</h1>
          <h1 className="font-sans text-[36px] font-semibold">
            Makes your Business better
          </h1>
          <h1 className="font-sans text-[16px] font-medium pt-2">
            We offer extensive servicess accross multiple domains
          </h1>
          <ul className="list-disc ml-5">
            <li>Startups and Entrepreneurship</li>
            <li>Information Technology and Software Development</li>
            <li>E-commerce and Retail</li>
            <li>Artificial Inelligence</li>
            <li>Healthcare and Pharmaceuticals</li>
            <li>Agriculture and Agritech</li>
            <li>Education and Edtech</li>
            <li>Renewable Energy</li>
            <li>Tourism and Hospitality</li>
            <li>Portfolio</li>
            <li>Event Management</li>
          </ul>
          <div class="relative group">
            <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div class="relative z-10 flex items-center space-x-2">
                  <span class="transition-all duration-500 group-hover:translate-x-1">
                    Let's get started
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
        </div>
        <div className="text-black rounded-lg p-3 lg:w-2/5 m-3 items-start ">
          <h1 className="font-sans text-[20px] font-medium">
            You might have questions !!
          </h1>
          <h1 className="font-sans text-[36px] font-semibold">
            Why fuzedMinds?
          </h1>
          <p className="my-3 text-md text-[20px] font-light">
            "Whether you’re a small startup, growing mid-sized company, or a
            large enterprise, we’re here to guide you every step of the way.
            Let’s work together to achieve your goals!""
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
