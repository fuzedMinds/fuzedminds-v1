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

import webDevelopment from "../../images/service/websiteDevelopement.png";
import developmentSupport from "../../images/service/developmentSupport.png";
import androidAppDevelopment from "../../images/service/androidAppDevelopment.png";
import iosAppDevelopment from "../../images/service/iosAppDevelopment.png";
import apiIntegration from "../../images/service/apiIntegration.png";
import devOps from "../../images/service/devops.png";
import sprintPlanning from "../../images/service/sprintPlanning.png";
import architectureDesigning from "../../images/service/architectureDesigning.png";
import databaseImplementation from "../../images/service/databaseImplementation.png";
import customjars from "../../images/service/customJars.png";
import customAPI from "../../images/service/customAPI.png";
import itConsultation from "../../images/service/itConsultation.png";
import { HashLink } from "react-router-hash-link";

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
        <div className=" md:max-h-screen  mx-auto  h-[300px] lg:h-[600px] mt-12">
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
        <div className="text-white rounded-lg p-3 lg:w-2/5 m-3 items-start">
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
          <HashLink to="/contact#">
            <div class="relative group">
              <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-red-500 to-orange-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div class="relative z-10 flex items-center space-x-2">
                    <span class="transition-all duration-500 group-hover:translate-x-1">
                      Send us your requirement
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
        <div className="text-white rounded-lg p-3 lg:w-2/5 m-3 items-start ">
          <h1 className="font-sans text-[20px] font-medium">
            You might have questions !!
          </h1>
          <h1 className="font-sans text-[36px] font-semibold">
            Why fuzedMinds?
          </h1>
          <p className="my-3 text-md text-[20px] font-light">
            Someone would choose us because we combine expertise with
            innovation, delivering solutions that not only meet expectations but
            exceed them—every time. With us, you're not just choosing a service
            provider; you're choosing a partner committed to your success.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 pt-10 pb-10">
        <div className="flex flex-wrap justify-center p-3 font-sans">
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md border rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={webDevelopment}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">Web Development</h3>
            <div>
              <p className="my-3 text-md font-normal">
                We bring your ideas to life on the web, crafting user-friendly
                and visually stunning websites. Whether it’s a sleek portfolio,
                a robust e-commerce platform, or a corporate site, we ensure
                every project is built for performance, scalability, and impact,
                making your online presence truly unforgettable.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={androidAppDevelopment}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              Android App Development
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                We create Android apps that fit right into your users' hands.
                From intuitive designs to smooth functionality, our apps are
                built to engage and delight. Whether it’s a startup idea or
                enterprise solution, we make sure it’s a perfect fit for the
                Android ecosystem.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={iosAppDevelopment}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">iOS App Development</h3>
            <div>
              <p className="my-3 text-md font-normal">
                Our iOS apps are designed to shine in the Apple ecosystem,
                blending elegance with functionality. We focus on delivering
                apps that not only look great but perform flawlessly, giving
                your users the premium experience they expect on their iPhones
                and iPads.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={apiIntegration}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">API Integration</h3>
            <div>
              <p className="my-3 text-md font-normal">
                We make systems talk to each other seamlessly with our API
                integration services. From connecting third-party tools to
                building custom solutions, we ensure smooth data flow and
                enhanced functionality, helping your applications work better
                together.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={devOps} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">DevOps</h3>
            <div>
              <p className="my-3 text-md font-normal">
                We bring development and operations together with DevOps,
                streamlining processes and improving collaboration. From
                automated deployments to continuous integration, we make your
                software delivery faster, smoother, and more reliable.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={architectureDesigning}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">Architecture Designing</h3>
            <div>
              <p className="my-3 text-md font-normal">
                A strong foundation is key to any successful project, and that’s
                where our architecture designing comes in. We craft robust,
                scalable, and efficient architectures that set your software up
                for long-term success, no matter how complex your needs.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={customjars} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">Custom jars</h3>
            <div>
              <p className="my-3 text-md font-normal">
                Need something extra? Our custom JARs are tailored to add unique
                functionality to your Java applications. We create lightweight,
                reusable solutions that integrate seamlessly and enhance your
                software’s capabilities.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={customAPI} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">Custom API</h3>
            <div>
              <p className="my-3 text-md font-normal">
                Your business deserves solutions as unique as your needs. With
                our custom API development, we create APIs that fit your exact
                requirements, enabling your systems to communicate effectively
                and deliver exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={sprintPlanning}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">Sprint Planning</h3>
            <div>
              <p className="my-3 text-md font-normal">
                Effective sprint planning is where great projects begin! We help
                you organize tasks, set achievable goals, and maximize team
                productivity. With clear objectives and priorities, your sprints
                will feel less like a race and more like a well-choreographed
                dance.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={developmentSupport}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">Development Support</h3>
            <div>
              <p className="my-3 text-md font-normal">
                We’ve got your back when it comes to development! From
                troubleshooting issues to enhancing functionality, we provide
                seamless support to keep your projects running smoothly. Think
                of us as your go-to team for solving challenges and ensuring
                your development stays on track.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb] bg-white shadow-md  border  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img
                className="rounded-full"
                src={itConsultation}
                loading="lazy"
              />
            </div>
            <h3 className="  text-blue-900 text-2xl">IT Consultation</h3>
            <div>
              <p className="my-3 text-md font-normal">
                We guide you through the ever-evolving tech landscape with our
                IT consultation services. From strategizing upgrades to solving
                technical challenges, we provide insights and solutions that
                align with your goals and drive success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
