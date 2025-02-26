import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

import skillDevelopement from "../../images/skillDevelopement.svg";
import img1 from "../../images/java-backend.avif";
import img2 from "../../images/java-react-fullstack.avif";
import img3 from "../../images/java-angular-fullstack.avif";
import img4 from "../../images/MERN.avif";
import img5 from "../../images/MEAN.avif";
import img6 from "../../images/Python.avif";
import img7 from "../../images/dot-net.avif";
import img8 from "../../images/REACT.webp";
import img9 from "../../images/ANGULAR.webp";
import img10 from "../../images/dot-net-angular.webp";

import javaImg from "../../images/tech/java.png";
import pythonImg from "../../images/tech/python.png";
import reactImg from "../../images/tech/react.png";
import angularImg from "../../images/tech/angular.png";
import dotNetImg from "../../images/tech/dotnet.png";
import prePlacemet from "../../images/pre-placement-training-java.avif";
import college from "../../images/college.png";
import portfolio from "../../images/portfolio.png";

import { HashLink } from "react-router-hash-link";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";

const SkillDevelopement = () => {
  const navigate = useNavigate();
  const java = "https://forms.office.com/r/w8XwSN8H8h";
  const javaAndReact = "https://forms.office.com/r/RzcpGs3Dm6";
  const javaAndAngular = "https://forms.office.com/r/Yb01xcYbsX";
  const mern = "https://forms.office.com/r/RfZj23mB8W";
  const mean = "https://forms.office.com/r/7RsgtLFDwy";
  const react = "https://forms.office.com/r/wgjbmQSaEZ";
  const angular = "https://forms.office.com/r/1VEiANwFPg";
  const python = "https://forms.office.com/r/w8h0vHdPZp";
  const dotNet = "https://forms.office.com/r/yW4XaPDFT9";
  const dotNetAndAngular = "https://forms.office.com/r/0mjnj3gvyU";
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

        <div className="flex flex-col lg:flex-row py-8 text-center lg:text-left m-auto overflow-hidden mx-4 mt-8 lg:mt-0 p-2 md:p-12  mr-0 ml-0 lg:h-[570px] ">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="mt-10 mb-5 md:text-4xl text-3xl font-semibold text-blue-900 font-sans">
              Empowering <span className="text-[#fb443a]">Skills</span>,
              Transforming <span className="text-[#fb443a]">Careers</span>.
              Bridging Education with Real-World{" "}
              <span className="text-[#fb443a]">Experience</span>!
            </h1>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-700 font-sans">
              Future-Ready Skills for a Smarter and More Successful Career!
            </div>
            {
              // <HashLink to="/services#">
              //   <div class="relative group">
              //     <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              //       <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              //       <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              //         <div class="relative z-10 flex items-center space-x-2">
              //           <span class="transition-all duration-500 group-hover:translate-x-1">
              //             Let's get started
              //           </span>
              //           <svg
              //             class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
              //             data-slot="icon"
              //             aria-hidden="true"
              //             fill="currentColor"
              //             viewBox="0 0 20 20"
              //             xmlns="http://www.w3.org/2000/svg"
              //           >
              //             <path
              //               clip-rule="evenodd"
              //               d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              //               fill-rule="evenodd"
              //             ></path>
              //           </svg>
              //         </div>
              //       </span>
              //     </button>
              //   </div>
              // </HashLink>
            }
          </div>
          <div className=" h-80  lg:w-1/2 lg:h-[540px] bg-white rounded-lg">
            <img className="h-fit rounded-lg " src={skillDevelopement} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-10 bg-[#b2ff9e] mb-0">
        <div className="text-black rounded-lg p-3 lg:w-2/5 m-3 items-start">
          <h1 className="font-sans text-[20px] font-medium">
            We are her to guide you
          </h1>
          <h1 className="font-sans text-[36px] font-semibold">
            fuzedMinds Technologies
          </h1>
          <h1 className="font-sans text-[16px] font-medium pt-2">
            Gain knowledge and experience from industry experts
          </h1>
          <p className="my-3 text-md font-normal pt-2">
            We offer top-notch training and mentorship in cutting-edge
            technologies, providing a supportive environment for interns to
            explore, experiment, and excel. Our community of skilled
            professionals is ready to take on real-world challenges.
          </p>
          <HashLink to="/contact#">
            <div class="relative group">
              <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div class="relative z-10 flex items-center space-x-2">
                    <span class="transition-all duration-500 group-hover:translate-x-1">
                      Connect with us
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
        <div className="text-black rounded-lg p-3 lg:w-2/5 m-3 items-start ">
          <div className="rounded-full bg-black h-10 w-10 text-center">
            <p className="text-white font-extrabold text-[40px]"> &#x201F;</p>
          </div>
          <p className="my-3 text-md text-[20px] font-light">
            "Whether you're a student, a job seeker, or a working professional,
            our skill development programs are designed to help you grow. Gain
            in-demand skills, hands-on experience, and expert mentorship to
            advance your career with confidence!"
          </p>
          <img className="h-16  animate-spin animate-infinite animate-duration-[20000ms] animate-delay-0 " />
        </div>
      </div>
      <div className=" bg-[#e8fccf]">
        <h1 className="font-sans text-[45px] font-normal text-center">
          Training And Internship
        </h1>
        <div className="flex flex-wrap justify-center p-3 ">
          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
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
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <a href={java} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
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
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={javaAndReact} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
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
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={javaAndAngular}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
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
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={mern} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
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
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={mean} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
              <img
                alt="card img"
                className="rounded-md "
                src={img8}
                loading="lazy"
              />
              <h2 className="font-semibold my-4 text-2xl text-center">
                React js <br />
                Developer
              </h2>
              <p className="text-md font-medium">
                Get an internship in realtime React js development.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={react} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
              <img
                alt="card img"
                className="rounded-md "
                src={img9}
                loading="lazy"
              />
              <h2 className="font-semibold my-4 text-2xl text-center">
                Angular js <br />
                Developer
              </h2>
              <p className="text-md font-medium">
                Get an internship in realtime Angular js fullstack development.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={angular} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
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
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={python} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
              <img
                alt="card img"
                className="rounded-md "
                src={img7}
                loading="lazy"
              />
              <h2 className="font-semibold my-4 text-2xl text-center">
                .NET backend <br />
                Developer
              </h2>
              <p className="text-md font-medium">
                Get an internship in realtime .net backend development.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center ">
              <a href={dotNet} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center ">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm h-[340px]">
              <img
                alt="card img"
                className="rounded-md "
                src={img10}
                loading="lazy"
              />
              <h2 className="font-semibold my-4 text-2xl text-center">
                .NET + Angular js fullstack <br />
                Developer
              </h2>
              <p className="text-md font-medium">
                Get an internship in realtime .net and Angular fullstack
                development.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month, 3 Month, 6 Month
              </h1>
            </div>
            <div className="flex justify-center items-center ">
              <a
                href={dotNetAndAngular}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center ">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#96e072]">
        <h1 className=" font-sans text-[45px] font-normal text-center">
          Software Development Training
        </h1>
        <div className="flex flex-wrap justify-center p-3 ">
          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm ">
              <div className="flex justify-center">
                <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                  <img className="rounded-lg" src={javaImg} loading="lazy" />
                </div>
              </div>
              <h2 className="font-semibold my-4 text-2xl text-center">
                JAVA Backend <br />
              </h2>
              <p className="text-md font-medium">
                Learn Java, Adv-Java, Spring, Rest-API from industry expert.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span>3
                Month
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <a href={java} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm ">
              <div className="flex justify-center">
                <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                  <img className="rounded-lg" src={reactImg} loading="lazy" />
                </div>
              </div>
              <h2 className="font-semibold my-4 text-2xl text-center">
                React / MERN <br />
              </h2>
              <p className="text-md font-medium">
                Learn Mongo DB, Express js, React js , Node js from industry
                expert.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span>3
                Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={javaAndReact} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm ">
              <div className="flex justify-center">
                <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                  <img className="rounded-lg" src={pythonImg} loading="lazy" />
                </div>
              </div>
              <h2 className="font-semibold my-4 text-2xl text-center">
                Python <br />
              </h2>
              <p className="text-md font-medium">
                Learn Python, django, Flask from industry expert.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span>3
                Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={javaAndAngular}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm ">
              <div className="flex justify-center">
                <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                  <img className="rounded-lg" src={angularImg} loading="lazy" />
                </div>
              </div>
              <h2 className="font-semibold my-4 text-2xl text-center">
                Angular / MEAN <br />
              </h2>
              <p className="text-md font-medium">
                Learn Mongo DB, Express js, Angular js , Node js from industry
                expert.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 3
                Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={mern} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[300px] m-3 ">
            <div className="text-justify text-sm ">
              <div className="flex justify-center">
                <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                  <img className="rounded-lg" src={dotNetImg} loading="lazy" />
                </div>
              </div>
              <h2 className="font-semibold my-4 text-2xl text-center">
                .Net <br />
              </h2>
              <p className="text-md font-medium">
                Learn .Net, .Net Core from industry expert.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span>3
                Month
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a href={mean} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#a0e8af]">
        <h1 className=" font-sans text-[45px] font-normal text-center">
          Career Guidance
        </h1>
        <div className="flex flex-wrap justify-center p-3 ">
          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group w-[400px] m-3 ">
            <div className="text-justify text-sm h-[460px]">
              <img
                alt="card img"
                className="rounded-md "
                src={prePlacemet}
                loading="lazy"
              />
              <h2 className="font-semibold my-4 text-2xl text-center">
                Interview Preparation <br />
                And Guidance
              </h2>
              <p className="text-md font-medium">
                Our placement training program offers comprehensive support to
                help you secure your ideal job. We provide guidance on resume
                building, conduct mock interviews, enhance your logical thinking
                skills, and cover probable FAQs to prepare you for success in
                the job market.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 45
                Days
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <a href={java} target="_blank" rel="noopener noreferrer">
                <button className="text-white  bg-gray-950 hover:bg-[#28282a]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#d5f2e3]">
        <h1 className=" font-sans text-[45px] font-normal text-center">
          Project Guidance
        </h1>
        <div className="flex flex-wrap justify-center p-3 font-sans">
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md border rounded-lg p-3 group w-[357px] m-3">
            <div className="flex justify-center">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-lg" src={college} loading="lazy" />
              </div>
            </div>
            <h3 className="  text-blue-900 text-2xl">College Projects</h3>
            <div>
              <p className="my-3 text-md font-normal">
                Get expert guidance and support to develop impactful college
                projects. Enhance your skills with real-world project
                experience.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month
              </h1>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md border rounded-lg p-3 group w-[357px] m-3">
            <div className="flex justify-center">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-lg" src={portfolio} loading="lazy" />
              </div>
            </div>
            <h3 className="  text-blue-900 text-2xl">Own Portfolio Website</h3>
            <div>
              <p className="my-3 text-md font-normal">
                We help you create a professional portfolio website to showcase
                your skills and projects, boosting your online presence and
                career prospects.
              </p>
              <h1 className="text-blue-800">
                <span className="font-bold text-blue-950">Durations:</span> 1
                Month
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillDevelopement;
