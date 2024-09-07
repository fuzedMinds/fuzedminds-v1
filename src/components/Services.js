import React from "react";
import img1 from "../images/serv-internship.svg";
import img2 from "../images/serv-training.svg";
import img3 from "../images/serv-development.svg";
import img4 from "../images/serv-consulting.svg";
import img5 from "../images/build.svg";
import img6 from "../images/collaberate.svg";
import img7 from "../images/train.svg";
import img8 from "../images/guide.svg";
import img9 from "../images/solve.svg";
import { HashLink } from "react-router-hash-link";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-3">
      <section>
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12">
          <div className="flex flex-wrap justify-center p-3 ">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-[#ff8e88] hover:text-white rounded-lg shadow-2xl p-3 group w-[357px] m-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-full group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img1}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Internship
                </h2>
                <p className="text-md font-medium">
                  We offer an internship program that immerses you in a
                  real-time work culture, allowing you to develop and implement
                  features, tackle technological challenges, and enhance your
                  problem-solving skills using the latest technologies and
                  tools.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <HashLink
                  className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center"
                  to="/internship#"
                >
                  Explore
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
                </HashLink>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-[#ff8e88] hover:text-white rounded-lg shadow-2xl p-3 group w-[357px] m-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Training
                </h2>
                <p className="text-md font-medium">
                  Our training programs are designed to equip you with the
                  skills and knowledge necessary to secure your desired Software
                  Development Engineer (SDE) position.
                </p>
              </div>
              <div className="flex justify-center items-center place-items-end">
                <HashLink
                  className="text-white  bg-[#38b000] hover:bg-[#494bf5]  inline-flex  w-auto px-6 py-3 shadow-xl rounded-xl text-center justify-center items-center"
                  smooth
                  to="/training#"
                >
                  Explore
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
                </HashLink>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-[#ff8e88] hover:text-white rounded-lg shadow-2xl p-3 group w-[357px] m-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Application Development
                </h2>
                <p className="text-md font-medium">
                  We provide end-to-end development services to address your
                  business needs and requirements, delivering comprehensive
                  solutions from concept to deployment.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-[#ff8e88] hover:text-white rounded-lg shadow-2xl p-3 group  w-[357px] m-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                  loading="lazy"
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  General IT Consultations
                </h2>
                <p className="text-md font-medium">
                  Our IT consultation services offer expert guidance and support
                  to businesses and individuals seeking to optimize their
                  technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-12">
          <div className="flex flex-wrap justify-center p-3 ">
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img5} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Build</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We specialize in creating custom applications tailored to your
                  specific needs. Our team of experts works closely with you to
                  bring your vision to life, ensuring that the final product is
                  both innovative and effective in meeting your business goals.
                  From initial concept to final deployment, we handle every step
                  of the development process with precision and dedication.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img6} loading="lazy" />
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  Collaboration is at the heart of what we do. We partner with
                  you to understand your goals and challenges, working together
                  to create solutions that drive success. Our team values open
                  communication and continuous feedback to ensure that every
                  project aligns with your vision and achieves your desired
                  outcomes. Together, we bring your ideas to life.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img7} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Train</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We provide comprehensive training programs designed to empower
                  individuals and teams with the skills and knowledge needed to
                  excel in their fields. Our hands-on approach ensures you gain
                  practical experience with the latest tools and technologies,
                  preparing you to tackle real-world challenges effectively.
                  Whether you're looking to enhance your current skills or learn
                  something entirely new, our training programs are tailored to
                  meet your specific needs and help you achieve your
                  professional goals.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img8} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Guide</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We offer expert guidance to help you navigate the complexities
                  of technology and business development. Our team of
                  experienced professionals is here to support you every step of
                  the way, providing insights and advice to help you make
                  informed decisions and achieve your objectives. Whether you're
                  starting a new project or looking to optimize existing
                  processes, we guide you to success with personalized
                  strategies and solutions.
                </p>
              </div>
            </div>
            <div className="transition-all hover:bg-[#A5A6FB] hover:text-white rounded-lg p-3 group w-[357px] m-3">
              <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
                <img className="rounded-full" src={img9} loading="lazy" />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                We <span className="font-black">Solve</span>
              </h3>
              <div>
                <p className="my-3 text-md font-medium">
                  We specialize in solving complex problems with innovative
                  solutions tailored to your unique needs. Our team is dedicated
                  to understanding your challenges and delivering effective
                  strategies that drive results. From overcoming technical
                  hurdles to streamlining business processes, we tackle every
                  issue with creativity and expertise to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
