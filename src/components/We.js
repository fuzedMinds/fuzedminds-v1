import React from "react";

import img5 from "../images/build.svg";
import img6 from "../images/collaberate.svg";
import img7 from "../images/train.svg";
import img8 from "../images/guide.svg";
import img9 from "../images/explore.png";
import explore from "../images/solve.svg";

const We = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-10">
      <section>
        <div className="flex flex-wrap justify-center p-3 font-sans">
          <div className="transition-all hover:bg-[#e5f1fb]  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={img5} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              We <span className="font-bold">Build</span>
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                We specialize in creating custom applications tailored to your
                specific needs. Our team of experts works closely with you to
                bring your vision to life, ensuring that the final product is
                both innovative and effective in meeting your business goals.
                From initial concept to final deployment, we handle every step
                of the development process with precision and dedication.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb]  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={img6} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              We <span className="font-bold">Collaborate</span>
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                Collaboration is at the heart of what we do. We partner with you
                to understand your goals and challenges, working together to
                create solutions that drive success. Our team values open
                communication and continuous feedback to ensure that every
                project aligns with your vision and achieves your desired
                outcomes. Together, we bring your ideas to life.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb]  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={img7} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              We <span className="font-bold">Consult</span>
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                We offer personalized consultation services for app development
                and software projects. Whether you need guidance on building an
                app or support in finding the right team members, we’re here to
                make the process smooth and successful. Let’s work together to
                turn your ideas into reality!
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb]  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={img8} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              We <span className="font-bold">Guide</span>
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                We offer expert guidance to help you navigate the complexities
                of technology and business development. Our team of experienced
                professionals is here to support you every step of the way,
                providing insights and advice to help you make informed
                decisions and achieve your objectives. Whether you're starting a
                new project or looking to optimize existing processes, we guide
                you to success with personalized strategies and solutions.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb]  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={img9} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              We <span className="font-bold">Solve</span>
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                We specialize in solving complex problems with innovative
                solutions tailored to your unique needs. Our team is dedicated
                to understanding your challenges and delivering effective
                strategies that drive results. From overcoming technical hurdles
                to streamlining business processes, we tackle every issue with
                creativity and expertise to ensure your success.
              </p>
            </div>
          </div>
          <div className="transition-all hover:bg-[#e5f1fb]  rounded-lg p-3 group w-[357px] m-3">
            <div className="rounded-full w-[60px] h-[60px] bg-white flex items-center justify-center">
              <img className="rounded-full" src={explore} loading="lazy" />
            </div>
            <h3 className="  text-blue-900 text-2xl">
              We <span className="font-bold">Explore</span>
            </h3>
            <div>
              <p className="my-3 text-md font-normal">
                Exploration is at the heart of what we do. We love diving into
                new ideas, learning from challenges, and discovering innovative
                solutions. By staying curious and embracing change, we push
                boundaries and grow together. Every step forward is a chance to
                create something meaningful and impactful, driven by a passion
                for exploration and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default We;
