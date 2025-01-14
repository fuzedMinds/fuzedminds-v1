import React, { useEffect, useState } from "react";
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
import img10 from "../../images/dot-net-angular.webp";
import android from "../../images/tech/android.png";
import angular from "../../images/tech/angular.png";
import dotnet from "../../images/tech/dotnet.png";
import ios from "../../images/tech/ios.png";
import java from "../../images/tech/java.png";
import mysql from "../../images/tech/mysql.png";
import nodejs from "../../images/tech/nodejs.png";
import oracle from "../../images/tech/oracle.png";
import php from "../../images/tech/php.png";
import python from "../../images/tech/python.png";
import react from "../../images/tech/react.png";
import intern from "../../images/intern.png";
import fresher from "../../images/fresher.png";
import experienced from "../../images/experienced.png";
import resume from "../../images/resume.png";
import { HashLink } from "react-router-hash-link";

const Career = () => {
  const images = [img4, img9, img1, img10, img8, img3, img2, img5, img7, img6];
  const tech = [
    java,
    android,
    angular,
    ios,
    react,
    php,
    mysql,
    python,
    oracle,
    dotnet,
    nodejs,
    oracle,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const words = [
    "B.Tech",
    "Graduate",
    "PG",
    "CSE",
    "ECE",
    "IT",
    "BCA",
    "MCA",
    "BSC IT",
  ];
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 500); // Match fade-out duration
    }, 2500); // Total duration including fade-in/out

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/career" />
        <title>fuzedMinds - career</title>
      </Helmet>
      <div className="bg-gray-100 overflow-hidden">
        <div>
          <NavBar />
        </div>
        <div className="bg-[#05b8b8] font-sans text-white md:h-[200px] h-[300px] flex text-center justify-center md:mt-12 mt-4">
          <div className="mt-20 text-3xl">
            Looking for the right opportunity?
            <h1 className="text-xl mt-2">
              {" "}
              We’re here to help you take the next step in your career. Explore
              our open roles and let’s see how you can grow with us!
            </h1>
            <div className="flex justify-center">
              <div className=" mt-4 w-24 border-b-4 border-yellow-500"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center p-10 bg-gray-100 mt-4 mb-0">
          <div className="text-blue-900 rounded-lg p-3 lg:w-3/12 m-3 items-start">
            <h1 className="font-sans text-[20px] font-medium text-center">
              We Hire
            </h1>
            <div className="flex justify-center">
              <div className="rounded-full w-[80px] h-[80px] pt-4 flex items-center justify-center ">
                <img className="rounded-lg" src={intern} loading="lazy" />
              </div>
            </div>
            <h1 className="font-sans text-[36px] font-semibold text-center">
              Intern
            </h1>
            <p className="my-3 text-md text-[20px] font-light text-center">
              We hire unpaid interns to provide real-world learning
              opportunities while benefiting from their fresh ideas and
              enthusiasm. It’s a chance for interns to build skills and
              portfolios, and for us to discover future talent and ensure a
              cultural fit—all with mutual growth in mind.
            </p>
          </div>
          <div className="text-blue-900 rounded-lg p-3 lg:w-3/12 m-3 items-start ">
            <h1 className="font-sans text-[20px] font-medium text-center">
              We Hire
            </h1>
            <div className="flex justify-center">
              <div className="rounded-full w-[80px] h-[80px] pt-4 flex items-center justify-center ">
                <img className="rounded-lg" src={fresher} loading="lazy" />
              </div>
            </div>
            <h1 className="font-sans text-[36px] font-semibold text-center">
              Fresher
            </h1>

            <p className="my-3 text-md text-[20px] font-light text-center">
              Freshers bring energy, fresh ideas, and a strong desire to learn.
              Their adaptability and creativity help us shape talent while
              building a strong, long-term team.
            </p>
          </div>
          <div className="text-blue-900 rounded-lg p-3 lg:w-3/12 m-3 items-start ">
            <h1 className="font-sans text-[20px] font-medium text-center">
              We Hire
            </h1>
            <div className="flex justify-center">
              <div className="rounded-full w-[80px] h-[80px] pt-4 flex items-center justify-center ">
                <img className="rounded-lg" src={experienced} loading="lazy" />
              </div>
            </div>
            <h1 className="font-sans text-[36px] font-semibold text-center">
              Experienced
            </h1>
            <p className="my-3 text-md text-[20px] font-light text-center">
              Experienced candidates bring expertise, leadership, and immediate
              impact. Their skills help tackle challenges, mentor teams, and
              drive the company forward.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center p-10 bg-[#caf0f8] mt-4 mb-0">
          <div className="text-blue-900 rounded-lg p-3 lg:w-3/12 m-3 text-center">
            <h1 className="font-sans text-[28px] font-light">Openings for</h1>
            <h1 className="font-sans text-[36px] font-semibold">Internship</h1>
            <div className="flex justify-center items-center pt-4 transition-opacity">
              <div className="h-2/4 w-3/4">
                <img
                  src={images[currentIndex]}
                  alt="Slideshow"
                  className="w-full h-full object-cover rounded-lg item-ce"
                />
              </div>
            </div>
          </div>
          <div className="text-blue-900 rounded-lg p-3 lg:w-8/12 m-3 items-center md:mt-10 ">
            <p className="my-3 text-md text-[20px] font-normal">
              Take the first step in building your career with our unpaid
              internship program and gain hands-on experience under the guidance
              of highly skilled and experienced mentors. Enjoy flexible timings
              while receiving valuable career guidance to help shape your
              future.
            </p>
            <div className="flex justify-center p-4">
              <HashLink to="/internship#">
                <div class="relative group">
                  <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div class="relative z-10 flex items-center space-x-2">
                        <span class="transition-all duration-500 group-hover:translate-x-1">
                          Apply
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
        <div className="flex flex-wrap justify-center p-10 bg-[#ade8f4]  mb-0">
          <div className="text-blue-900 rounded-lg p-3 lg:w-3/12 m-3 text-center">
            <h1 className="font-sans text-[28px] font-light">Openings for</h1>
            <h1 className="font-sans text-[36px] font-semibold">Fresher</h1>
            <div className="flex justify-center items-center pt-4">
              <div
                className={`text-6xl font-bold transition-opacity duration-500 ${
                  isFading ? "opacity-0" : "opacity-100"
                } bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
                style={{
                  fontFamily: "'Orbitron', sans-serif", // Unique futuristic font
                  textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Glowing text effect
                }}
              >
                {words[index]}
              </div>
            </div>
          </div>
          <div className="text-blue-900 rounded-lg p-3 lg:w-8/12 m-3 items-center md:mt-10 ">
            <p className="my-3 text-md text-[20px] font-normal">
              Kickstart your career with us! We offer exciting opportunities for
              freshers across various educational backgrounds, including B.Tech,
              Graduate, PG, CSE, ECE, IT, BCA, MCA, BSc IT, and EEE. Enjoy a
              competitive salary and a chance to work with a dynamic team that
              values your skills and potential. Whether you’re a recent graduate
              or a postgraduate, we’re here to help you launch a successful
              career in a supportive and innovative environment.
            </p>
            <div className="flex justify-center p-4">
              <HashLink to="">
                <div class="relative group">
                  <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div class="relative z-10 flex items-center space-x-2">
                        <span class="transition-all duration-500 group-hover:translate-x-1">
                          Opening Soon
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
        <div className="flex flex-wrap justify-center p-10 bg-[#48cae4]  mb-0">
          <div className="text-blue-900 rounded-lg p-3 lg:w-3/12 m-3 text-center">
            <h1 className="font-sans text-[28px] font-light">Openings for</h1>
            <h1 className="font-sans text-[36px] font-semibold">Experienced</h1>
            <div className="flex justify-center items-center pt-4">
              <img
                src={tech[currentIndex]}
                alt="Slideshow"
                className="w-20 h-20 object-cover rounded-lg item-ce"
              />
            </div>
          </div>
          <div className="text-blue-900 rounded-lg p-3 lg:w-8/12 m-3 items-center md:mt-10 ">
            <p className="my-3 text-md text-[20px] font-normal">
              We are on the lookout for skilled professionals in Frontend
              Development, Backend Development, Full Stack Development, Database
              Management, Cloud Computing, and Testing. If you have expertise in
              building intuitive interfaces, crafting robust backend systems,
              managing data effectively, or ensuring seamless performance
              through testing, we want you on our team! Join us to work on
              innovative projects, earn a competitive salary, and grow your
              career in a supportive and forward-thinking environment.
            </p>
            <div className="flex justify-center p-4">
              <HashLink to="">
                <div class="relative group">
                  <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div class="relative z-10 flex items-center space-x-2">
                        <span class="transition-all duration-500 group-hover:translate-x-1">
                          Opening soon
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

        <div className="">
          <div className="flex justify-center">
            <div className="rounded-full w-[60px] h-[60px] pt-4 flex items-center justify-center animate-rotate-y animate-infinite animate-duration-[3000ms] animate-delay-0">
              <img className="rounded-full" src={resume} loading="lazy" />
            </div>
          </div>
          <h1 className="text-blue-900 text-center font-sans font-semibold text-xl pt-4">
            Send Your resume
          </h1>
          <h1 className="text-blue-900 text-center font-sans font-thin text-2xl md:text-5xl pt-4">
            hr@fuzedminds.com
          </h1>

          <div className="flex flex-wrap justify-center pb-20"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
