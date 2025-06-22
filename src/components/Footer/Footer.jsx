import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  function handleSendingEmail() {
    const email = "victormugishavm6@gmail.com";
    const subject = "Hiring Enquiry";
    const body = "Hello Victor, I would like to hire you for...";

    const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${subject}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a popup window
    window.open(mailToLink, "_blank", "width=800,height=600");
  }

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* Footer Top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[400] mb-5 md:text-[1.4rem]">
              Do you want to make beautiful products?
            </h2>
            <button
              onClick={handleSendingEmail}
              className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-200 py-2 px-4 rounded-[8px]"
            >
              <i className="ri-mail-line"></i> Hire me
            </button>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Exploring code with Victor Mugisha: Building tomorrow's web, one
              line at a time from Kigali, Rwanda.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me:{" "}
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/VictorMugisha"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="http://discordapp.com/users/1188580923038519388"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-discord-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/victor-mugisha-shyaka-47b10b233/"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.instagram.com/victor_mugisha001/"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center gap-10 py-8">
          <li>
            <a className="text-gray-300 font-[600]" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-300 font-[600]" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-gray-300 font-[600]" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-gray-300 font-[600]" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="text-gray-300 font-[600]" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="text-gray-300 font-[600]" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Footer bottom*/}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center md:justify-between">
            <div className="hidden sm:block">
              <a href="#top">
                <div className="flex items-center gap-[10px] select-none">
                  <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                    V
                  </span>

                  <div className="leading-[20px]">
                    <h2 className="text-gray-200 font-[500] text-[18px]">
                      Victor
                    </h2>
                    <p className="text-gray-400 text-[14px]  ">Developer</p>
                  </div>
                </div>
              </a>
            </div>

            <p className="text-gray-400 text-[14px]">
              Copyright {year} developed by Victor - All rights resrerved!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
