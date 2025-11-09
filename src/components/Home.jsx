import React from "react";
import FloatingIcons from "./FloatingIcons";
import HomeImage from "../assets/images/benn.png";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section id="home" className="py-24 flex md:py-[8rem] flex-col md:flex-row-reverse items-center gap-4">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
          <img
            src={HomeImage}
            alt="Gatbel Gatluak"
            className="max-w-4xl h-96 md:w-[50%] lg:w-[60%] rounded-3xl transform hover:scale-105 transition-all duration-300 object-cover"
          />
        </div>
        <FloatingIcons />

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left md:pl-28">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 dark:text-sky-200">
            <span className="text-gray-900 dark:text-sky-400 block">
              Hello!
              <br />
            </span>
            I'm{" "}
            <span className="text-sky-500 dark:text-sky-200">
              Gatbel Gatluak
            </span>
          </h1>
          <div className="w-max py-2 mt-4 mx-auto md:mx-0">
            <p className="text-sm sm:text-base md:text-xl text-gray-700 dark:text-gray-300">
              <span>Web Developer, Mobile App Developer,</span>
              <br />
              <span>Network & AI enthusiast, and aspiring entrepreneur</span>
            </p>
          </div>
          <div className="mt-5 text-center md:text-left">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-sky-500 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg hover:bg-sky-600 transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </Link>
          </div>
          <div className="mt-8 text-2xl sm:text-3xl md:text-3xl flex items-center justify-center md:justify-start gap-5">
            <a
              href="https://www.linkedin.com/in/gatbel-g/"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/gatbel2025"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://x.com/Gatbel2025"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;