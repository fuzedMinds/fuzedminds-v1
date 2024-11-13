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
      <div className="bg-gray-100 ">
        <div>
          <NavBar />
        </div>
        <div className="flex flex-wrap justify-center pt-20  bg-gray-100 pb-20">
          {/*Phone */}
          <div className="relative w-96 h-32 m-5 ">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full bg-white"
                src={phone}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">Phone</h2>
                <span>+91 63614 68385</span>
                <a
                  onClick={openDialer}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
          {/*whatsapp */}
          <div className="relative w-96 h-32 m-5">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full"
                src={whatsapp}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">whatsapp us</h2>
                <span>+91 63614 68385</span>
                <a
                  onClick={openWhatsApp}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Message Now
                </a>
              </div>
            </div>
          </div>
          {/*Email */}
          <div className="relative w-96 h-32 m-5">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full"
                src={email}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 pr-2 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">Mail Us</h2>
                <span>fuzedminds2024@gmail.com</span>

                <a
                  onClick={sendEmail}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
          {/*Linked in */}
          <div className="relative w-96 h-32 m-5">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full"
                src={linkedIn}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">Linkedin </h2>
                <span>/fuzedminds</span>
                <a
                  onClick={openLinkedIn}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Connect with us
                </a>
              </div>
            </div>
          </div>
          {/*Facebook */}
          <div className="relative w-96 h-32 m-5">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full"
                src={facebook}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 pr-2 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">Facebook</h2>
                <span>/fuzedminds Technologies</span>
                <a
                  onClick={openFacebook}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Follow us
                </a>
              </div>
            </div>
          </div>
          {/*Instagram */}
          <div className="relative w-96 h-32 m-5">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full"
                src={instagram}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">Instagram</h2>
                <span>/fuzedminds</span>
                <a
                  onClick={openInstagram}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Follow us
                </a>
              </div>
            </div>
          </div>
          {/*X */}
          <div className="relative w-96 h-32 m-5">
            <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center items-center text-center">
              <img
                alt="card img"
                className=" h-20 w-20 shadow-2xl rounded-full"
                src={x}
                loading="lazy"
              />
            </div>
            <div className="absolute top-14 left-0 w-full p-6 bg-white rounded-lg z-10 shadow-2xl">
              <div className="mt-5">
                <h2 className="text-xl font-bold">X (twitter)</h2>
                <span>/fuzedMindsTech</span>
                <a
                  onClick={openTwitter}
                  className=" text-red-700 px-4 py-2 hover:cursor-pointer font-extrabold"
                >
                  Follow us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
