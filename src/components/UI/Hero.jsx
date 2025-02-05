import React from "react";
import heroImg from "../../assets/images/profile.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Hero Left Content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              Hello, I'm Victor Mugisha <br />
              Software Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-200 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-10 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Welcome to my digital space! Victor Mugisha, a passionate student
              developer from Kigali, exploring the realms of web technologies.
            </p>

            <div className="flex items-center gap-9 mt-10">
              <span className="text-smallTextColor font-[600] text-[15px]">
                Follow me:
              </span>
              <span>
                <a
                  href="http://discordapp.com/users/1188580923038519388"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-discord-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/VictorMugisha"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/victor-mugisha-shyaka-47b10b233/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/victor_mugisha001/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/* Hero Img */}
          <div className="basis-1/2 mt-10 sm:mt-0 flex justify-center relative">
            {/* Animated Background Accent */}
            <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Hero Image Container */}
            <div
              className="relative w-[80%] max-w-[350px] h-auto overflow-hidden rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-500 p-[4px] shadow-2xl 
    before:absolute before:inset-0 before:bg-white before:rounded-full before:z-[-1] before:opacity-20 before:blur-xl 
    hover:scale-105 transition-transform duration-500 ease-in-out animate-float"
            >
              <img
                src={heroImg}
                className="w-full h-full object-cover rounded-full"
                alt="Victor Mugisha"
              />
            </div>
          </div>

          {/* Hero Right Content */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={185} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
