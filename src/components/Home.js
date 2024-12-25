import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import app from "../images/app.png";
import aws from "../images/aws.png";
import db from "../images/db.png";
import azure from "../images/azure.png";
import api from "../images/api.png";
import gcp from "../images/gcp.png";
import website from "../images/website.png";
import linux from "../images/linux.png";
import consult from "../images/consult.png";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/" />
        <title>fuzedMinds - Home</title>
        <meta
          name="description"
          content="Your business, your rules. We'll build the software to match.
        We'll create software that perfectly fits your company's specific needs and way of doing things."
        />
      </Helmet>

      <div>
        <div>
          <NavBar />
        </div>

        <div className="flex flex-col lg:flex-row py-8 text-center lg:text-left m-auto overflow-hidden mx-4 mt-8 lg:mt-0 p-2 md:p-12 lg:h-[570px]">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="mt-10 mb-5 md:text-4xl text-3xl font-semibold text-blue-900 font-sans">
              Your business, your rules. We'll build the software to match
            </h1>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500 font-sans">
              We'll create software that perfectly fits your business's specific
              needs and unique way of doing things.
            </div>
            <HashLink to="/services#">
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
            </HashLink>
          </div>
          <div className=" h-80  lg:w-1/2 lg:h-[540px] bg-red-400">
            <div className=" flex h-1/3 ">
              <div className="h-full w-1/3  bg-[#f7f7e3] flex justify-center items-center">
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-[100ms] "
                  src={app}
                />
              </div>
              <div className="h-full w-1/3 bg-[#f0f0f0] flex justify-center items-center">
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-0 "
                  src={aws}
                />
              </div>
              <div className="h-full w-1/3 bg-[#dffbdb] flex justify-center items-center">
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-[200ms] "
                  src={db}
                />
              </div>
            </div>
            <div className=" flex h-1/3">
              <div className="h-full w-1/3 bg-[#f0f0f0] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-0 "
                  src={azure}
                />
              </div>
              <div className="h-full w-1/3 bg-[#e8fdf6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-[100ms] "
                  src={api}
                />
              </div>
              <div className="h-full w-1/3 bg-[#fbe0e6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-0 "
                  src={gcp}
                />
              </div>
            </div>
            <div className=" flex h-1/3">
              <div className="h-full w-1/3 bg-[#fbe0e6] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-[300ms] "
                  src={website}
                />
              </div>
              <div className="h-full w-1/3 bg-[#e5f1fb] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-0 "
                  src={linux}
                />
              </div>
              <div className="h-full w-1/3 bg-[#f7f7f7] flex justify-center items-center">
                {" "}
                <img
                  className="h-2/5  animate-jump-in animate-infinite animate-duration-[3000ms] animate-delay-[50ms] "
                  src={consult}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
