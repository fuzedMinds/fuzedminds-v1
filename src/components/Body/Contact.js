import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer";
import phone from "../../images/phone.png";
import whatsapp from "../../images/whatsapp.png";
import email from "../../images/mail.png";
import linkedIn from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import x from "../../images/x.png";
import demo from "../../images/demo.png";
import other from "../../images/other.png";
import query from "../../images/query.png";
import location from "../../images/location.png";
import Inquiry from "../../images/Inquiry.png";
import { HashLink } from "react-router-hash-link";

const Contact = () => {
  const openDialer = () => {
    window.location.href = "tel:+916361468385"; // Replace with the desired phone number
  };

  const openWhatsApp = () => {
    window.location.href = "https://wa.me/6361468385"; // Replace with the desired phone number (without + symbol)
  };

  const sendEmail = () => {
    window.location.href = "mailto:hr@fuzedminds.com"; // Replace with the desired email address
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/fuzedminds-technologies/",
      "_blank"
    );
    //window.location.href = "https://www.linkedin.com/in/fuzedminds"; // Replace with the desired LinkedIn profile URL
  };

  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61565379877004",
      "_blank"
    ); // Opens Facebook in a new tab
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/fuzedminds", "_blank"); // Replace with the desired Instagram profile URL
  };

  const openTwitter = () => {
    window.open("https://x.com/fuzedMindsTech", "_blank"); // Replace with the desired Twitter profile URL
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.fuzedminds.com/contact" />
        <title>fuzedMinds - Contact</title>
      </Helmet>
      <div className="bg-gray-100 overflow-hidden">
        <div>
          <NavBar />
        </div>
        <div className="bg-[#056cb8] font-sans text-white md:h-[200px] h-[300px] flex text-center justify-center md:mt-12 mt-4">
          <div className="mt-20 text-3xl">
            Looking for something in particular?
            <h1 className="text-xl mt-2">We're here to help.</h1>
            <div className="flex justify-center">
              <div className=" mt-4 w-24 border-b-4 border-yellow-500"></div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200">
          <div className="bg-gray-100 pt-10 pb-10">
            <div className="flex flex-wrap justify-center p-3 font-sans">
              <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md border rounded-lg p-3 group w-[357px] m-3">
                <div className="flex justify-center">
                  <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                    <img className="rounded-lg" src={demo} loading="lazy" />
                  </div>
                </div>
                <h3 className="  text-blue-900 text-2xl">Demo</h3>
                <div>
                  <p className="my-3 text-md font-normal">
                    Request a personalized demo to explore our solutions in
                    action and see how they can meet your needs effectively.
                  </p>
                </div>
              </div>
              <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md border rounded-lg p-3 group w-[357px] m-3">
                <div className="flex justify-center">
                  <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                    <img className="rounded-lg" src={query} loading="lazy" />
                  </div>
                </div>
                <h3 className="  text-blue-900 text-2xl">Query</h3>
                <div>
                  <p className="my-3 text-md font-normal">
                    Have questions or need more information? Reach out to us,
                    and we’ll provide clear answers and guidance tailored to
                    your concerns.
                  </p>
                </div>
              </div>
              <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md border rounded-lg p-3 group w-[357px] m-3">
                <div className="flex justify-center">
                  <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                    <img className="rounded-lg" src={other} loading="lazy" />
                  </div>
                </div>
                <h3 className="  text-blue-900 text-2xl">Other</h3>
                <div>
                  <p className="my-3 text-md font-normal">
                    For any other inquiries or specific requests, let us know!
                    We’re here to assist with anything you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#a2d2ff]">
          <div className="flex justify-center">
            <div className="rounded-full w-[60px] h-[60px] pt-4 flex items-center justify-center">
              <img className="rounded-full" src={location} loading="lazy" />
            </div>
          </div>
          <h1 className="text-center font-sans font-semibold text-2xl pt-4">
            Reach Out to Us
          </h1>

          <div className="flex flex-wrap justify-center pb-20">
            {
              /*Phone */
              // <div className="relative w-96 h-32 m-5 ">
              //   <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              //     <img
              //       alt="card img"
              //       className=" h-20 w-20 shadow-2xl rounded-full bg-white"
              //       src={phone}
              //       loading="lazy"
              //     />
              //   </div>
              //   <div className="absolute top-14 left-0 w-full p-6 bg-white rounded-lg z-10 shadow-2xl">
              //     <div className="mt-5">
              //       <h2 className="text-xl font-bold">Phone</h2>
              //       <span>+91 63614 68385</span>
              //       <a
              //         onClick={openDialer}
              //         className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
              //       >
              //         Call Now
              //       </a>
              //     </div>
              //   </div>
              // </div>
            }
            {/*whatsapp */}
            <div className="w-96 m-5 bg-[#bde0fe] shadow-2xl rounded-lg">
              <div className="p-6 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={whatsapp}
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold">WhatsApp</h2>
                  <h3 className="text-2xl font-light">+91 63614 68385</h3>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-5">
                  <div className="relative group">
                    <button
                      onClick={openWhatsApp}
                      className="relative inline-block font-semibold text-white rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      {/* Gradient Border */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-orange-500 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      {/* Button Content */}
                      <span className="relative block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            Message
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Email */}
            <div className="w-96 m-5 bg-[#bde0fe] shadow-2xl rounded-lg">
              <div className="p-6 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={email}
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold">Email </h2>
                  <h3 className="text-2xl font-light">hr@fuzedminds.com</h3>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-5">
                  <div className="relative group">
                    <button
                      onClick={sendEmail}
                      className="relative inline-block font-semibold text-white rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      {/* Gradient Border */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-orange-500 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      {/* Button Content */}
                      <span className="relative block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            Mail
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*Linked in */}
            <div className="w-96 m-5 bg-[#bde0fe] shadow-2xl rounded-lg">
              <div className="p-6 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={linkedIn}
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold">LinkedIn </h2>
                  <h3 className="text-2xl font-light">/fuzedminds</h3>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-5">
                  <div className="relative group">
                    <button
                      onClick={openLinkedIn}
                      className="relative inline-block font-semibold text-white rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      {/* Gradient Border */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-orange-500 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      {/* Button Content */}
                      <span className="relative block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            Connect
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*Facebook */}
            <div className="w-96 m-5 bg-[#bde0fe] shadow-2xl rounded-lg">
              <div className="p-6 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={facebook}
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold">Facebook </h2>
                  <h3 className="text-2xl font-light">
                    /fuzedminds Technologies
                  </h3>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-5">
                  <div className="relative group">
                    <button
                      onClick={openFacebook}
                      className="relative inline-block font-semibold text-white rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      {/* Gradient Border */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-orange-500 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      {/* Button Content */}
                      <span className="relative block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            Follow
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*Instagram */}
            <div className="w-96 m-5 bg-[#bde0fe] shadow-2xl rounded-lg">
              <div className="p-6 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={instagram}
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold">Instagram </h2>
                  <h3 className="text-2xl font-light">/fuzedminds</h3>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-5">
                  <div className="relative group">
                    <button
                      onClick={openInstagram}
                      className="relative inline-block font-semibold text-white rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      {/* Gradient Border */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-orange-500 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      {/* Button Content */}
                      <span className="relative block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            Follow
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*X */}
            <div className="w-96 m-5 bg-[#bde0fe] shadow-2xl rounded-lg">
              <div className="p-6 rounded-lg shadow-lg">
                {/* Card Image */}
                <div className="flex justify-center items-center">
                  <img
                    alt="WhatsApp Icon"
                    className="h-20 w-20 shadow-lg rounded-full"
                    src={x}
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 text-center">
                  <h2 className="text-xl font-semibold">X </h2>
                  <h3 className="text-2xl font-light">/fuzedMindsTech</h3>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-5">
                  <div className="relative group">
                    <button
                      onClick={openTwitter}
                      className="relative inline-block font-semibold text-white rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      {/* Gradient Border */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-orange-500 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      {/* Button Content */}
                      <span className="relative block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="transition-transform duration-500 group-hover:translate-x-1">
                            Follow
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="rounded-full w-[60px] h-[60px] pt-4 flex items-center justify-center animate-rotate-y animate-infinite animate-duration-[3000ms] animate-delay-0">
            <img className="rounded-lg" src={Inquiry} loading="lazy" />
          </div>
        </div>
        <h1 className="text-blue-900 text-center font-sans font-semibold text-xl pt-4">
          Submit Your Inquiry
        </h1>
        <h1 className="text-blue-900 text-center font-sans font-thin text-2xl md:text-5xl pt-4">
          hr@fuzedminds.com
        </h1>

        <div className="flex flex-wrap justify-center pb-20"></div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
