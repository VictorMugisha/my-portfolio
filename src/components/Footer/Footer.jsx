import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* ============ Footer Top ================ */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 
              className="text-[26px] leading-10 text-white font-[400] mb-5 md:text-[1.4rem]"
            >
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-200 py-2 px-4 rounded-[8px]'>
                    <i className="ri-mail-line"></i> Hire me
                </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p
              className="text-gray-300 leading-7 mt-4 sm:mt-0"
            >
              Exploring code with Victor Mugisha: Building tomorrow's web, one line at a time from Kigali, Rwanda.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">Follow me: </span>
              <span 
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center"
              >
                <a 
                  href="#social-media-link" 
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span 
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center"
              >
                <a 
                  href="#social-media-link" 
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span 
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center"
              >
                <a 
                  href="#social-media-link" 
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span 
                className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center"
              >
                <a 
                  href="#social-media-link" 
                  className=" text-gray-300 font-[500] text-[18px] "
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>

          </div>

        </div>

        <div>
          <ul className='flex items-center justify-center gap-10 py-8'>
            <li><a className='text-gray-300 font-[600]' href="#about">About</a></li>
            <li><a className='text-gray-300 font-[600]' href="#services">Services</a></li>
            <li><a className='text-gray-300 font-[600]' href="#portfolio">Portfolio</a></li>
            <li><a className='text-gray-300 font-[600]' href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* ============ Footer Top End ================ */}


      {/* ============ Footer bottom ================= */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center md:justify-between">

            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                  <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                    V
                  </span>

                  <div className="leading-[20px]">
                    <h2 className="text-gray-200 font-[500] text-[18px]">Victor</h2>
                    <p className="text-gray-400 text-[14px]  ">Developer</p>
                  </div>
              </div>
            </div>

            <p className="text-gray-400 text-[14px]">
              Copyright { year } developed by Victor - All rights resrerved!
            </p>

          </div>
        </div>
      </div>
      {/* ============ Footer bottom end ================= */}
    </footer>
  )
}

export default Footer;