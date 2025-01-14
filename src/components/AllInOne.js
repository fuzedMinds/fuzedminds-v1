import React from "react";
import together from "../images/together.png";
import { HashLink } from "react-router-hash-link";

const AllInOne = () => {
  return (
    <div className="flex flex-wrap justify-center p-10 bg-yellow-400 mb-0">
      <div className="text-black rounded-lg p-3 lg:w-2/5 m-3 items-start">
        <h1 className="font-sans text-[20px] font-medium">
          A one-stop solution
        </h1>
        <h1 className="font-sans text-[36px] font-semibold">
          fuzedMinds Technologies
        </h1>
        <h1 className="font-sans text-[16px] font-medium pt-2">
          Expand Your Business Digitally with Our Expertise
        </h1>
        <p className="my-3 text-md font-normal pt-2">
          We help you take your business to the next level with smart,
          personalized digital solutions. Whether it’s boosting your online
          presence or connecting with more customers, we’ve got you covered!
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
          "Whether you’re a small startup, growing mid-sized company, or a large
          enterprise, we’re here to guide you every step of the way. Let’s work
          together to achieve your goals!"
        </p>
        <img
          className="h-16  animate-spin animate-infinite animate-duration-[20000ms] animate-delay-0 "
          src={together}
        />
      </div>
    </div>
  );
};

export default AllInOne;
