import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px] " src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-4 ">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor ">
            {portfolio.description}
          </p>
          <div className="flex items-center gap-3 mt-5 flex-wrap ">
            <h4 className="text-headingColor text-[18px] font-[700] ">
              Technologies:
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-[5px] py-1 px-2 text-[14px] leading-0 "
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio.siteUrl}>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primaryColor text-white py-2 px-4 my-4 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300 "
            >
              Live site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer "
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
