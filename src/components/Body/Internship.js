import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import img1 from "../../images/java-backend.avif";
import img2 from "../../images/java-react-fullstack.avif";
import img3 from "../../images/java-angular-fullstack.avif";
import img4 from "../../images/MERN.avif";
import img5 from "../../images/MEAN.avif";
import img6 from "../../images/Python.avif";
import img7 from "../../images/dot-net.avif";
import img8 from "../../images/REACT.webp";
import img9 from "../../images/ANGULAR.webp";

const Internship = () => {
  const java = "";
  const javaAndReact = "";
  const javaAndAngular = "https://forms.office.com/r/Yb01xcYbsX";
  const mern = "";
  const mean = "";
  const react = "";
  const angular = "";
  const python = "";
  const dotNet = "";
  
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/internship" />
        <title>fuzedMinds - Internship</title>
        <meta name="description" content="Join our internship program at Fuzed Minds and start your IT career." />
      </Helmet>
      <div id="internship" className="internship ">
        <div>
          <NavBar />
        </div>
        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-0 p-2 md:p-12 h-5/6">
          <div
            id="home"
            className="flex flex-col lg:flex-row py-28 justify-between text-center lg:text-left"
          >
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900 text-">
                {/* We build digital solutions to help businesses scale */}
                Get industry-ready with our SDE{" "}
                <span className="text-[#fb443a]"> internship </span> program
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="internship" className="bg-gray-100 py-5">
        <section>
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900  font-bold">
              Internships
            </h2>

            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900"></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
              Gain practical SDE experience, learn from experts, and build your
              portfolio to launch your software engineering career.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center p-3">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img1}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  JAVA Backend <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime java backend development.
                </p>
              </div>
              <div className=" flex justify-center items-center">
                <a
                  href="https://forms.office.com/r/w8XwSN8H8h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img2}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  JAVA + React JS fullstack <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime java and react js fullstack
                  development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img3}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  JAVA + Angular fullstack <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime java and angular fullstack
                  development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href={javaAndAngular}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img4}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  MERN stack <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime Mongo db, Express js, React js,
                  Node js fullstack development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img5}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  MEAN stack <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime Mongo db, Express js, Angular,
                  Node js fullstack development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img8}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  REACT JS <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime Angular js development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>



            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img9}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  ANGULAR JS <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime React js fullstack development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img6}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Python <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime python development.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                    Apply
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
              <div className="text-justify text-sm h-[320px]">
                <img
                  alt="card img"
                  className="rounded-md "
                  src={img7}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  .NET fullstack <br />
                  Developer
                </h2>
                <p className="text-md font-medium">
                  Get an internship in realtime .net fullstack development.
                </p>
              </div>
              <div className="flex justify-center items-center ">
                <a
                  href="https://forms.gle/LzqanCp7FC7aa6Fr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center ">
                    Apply
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Internship;
