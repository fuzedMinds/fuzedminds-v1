import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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

const Home = () => {
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
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link
                to="/contact"
                className="text-white bg-[#494bf5] hover:bg-[#fe7062] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
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
