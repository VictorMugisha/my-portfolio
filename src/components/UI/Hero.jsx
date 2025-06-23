import React from "react";
import heroImg from "../../assets/images/profile.png";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Hero Left Content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-semibold text-base"
            >
              Hello welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-extrabold text-3xl sm:text-4xl leading-tight sm:leading-tight mt-5"
            >
              Hello, I'm Victor Mugisha <br />
              <span className="text-primaryColor animate-gradient">
                Full-Stack Developer
              </span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-medium flex items-center gap-2 hover:bg-smallTextColor transition-colors duration-300 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl">
                  <i className="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-semibold text-base border-b-2 border-solid border-smallTextColor hover:text-primaryColor hover:border-primaryColor transition-colors duration-300"
              >
                See portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-3 text-headingColor mt-10 font-medium text-base leading-relaxed sm:pl-14 sm:pr-10"
            >
              <span className="text-primaryColor mt-1">
                <i className="ri-apps-2-line"></i>
              </span>
              Welcome to my digital space! I'm Victor Mugisha, a dedicated
              full-stack developer from Kigali, specializing in the
              JavaScript-TypeScript ecosystem. I craft scalable web and mobile
              applications that deliver exceptional user experiences.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <span className="text-smallTextColor font-semibold text-base">
                Follow me:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="http://discordapp.com/users/1188580923038519388"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-xl font-semibold hover:text-primaryColor transition-colors duration-300"
                  aria-label="Discord profile"
                >
                  <i className="ri-discord-line"></i>
                </a>
                <a
                  href="https://github.com/VictorMugisha"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-xl font-semibold hover:text-primaryColor transition-colors duration-300"
                  aria-label="GitHub profile"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/victor-mugisha-47b10b233/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-xl font-semibold hover:text-primaryColor transition-colors duration-300"
                  aria-label="LinkedIn profile"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
                <a
                  href="https://www.instagram.com/victor_mugisha001/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-xl font-semibold hover:text-primaryColor transition-colors duration-300"
                  aria-label="Instagram profile"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="basis-1/3 mt-10 md:mt-0 flex justify-center relative">
            {/* Animated Background Accent */}
            <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Hero Image Container */}
            <div
              className="relative w-4/5 max-w-sm h-auto overflow-hidden rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-500 p-1 shadow-2xl 
                before:absolute before:inset-0 before:bg-white before:rounded-full before:z-[-1] before:opacity-20 before:blur-xl 
                hover:scale-105 transition-transform duration-500 ease-in-out animate-float z-10"
            >
              <img
                src={heroImg}
                className="w-full h-full object-cover rounded-full"
                alt="Victor Mugisha - Full-Stack Developer"
              />
            </div>
          </div>

          {/* Hero Stats */}
          <div className="md:basis-1/5 flex justify-center md:justify-end text-center mt-10 flex-wrap gap-6 md:gap-3 md:mt-0 md:flex-col md:text-end">
            <div className="mb-6 md:mb-10">
              <h2 className="text-headingColor font-bold text-3xl">
                <CountUp start={0} end={2} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base mt-1">
                Years of Experience
              </h4>
            </div>

            <div className="mb-6 md:mb-10">
              <h2 className="text-headingColor font-bold text-3xl">
                <CountUp start={0} end={2000} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base mt-1">
                GitHub Contributions
              </h4>
            </div>

            <div className="mb-6 md:mb-10">
              <h2 className="text-headingColor font-bold text-3xl">
                <CountUp start={0} end={15} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base mt-1">
                Technologies Mastered
              </h4>
            </div>

            <div className="mb-6 md:mb-10">
              <h2 className="text-headingColor font-bold text-3xl">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base mt-1">
                Frameworks & Tools
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
