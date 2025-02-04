import collegeImg from "../../assets/images/college.png";
import highSchoolImg from "../../assets/images/high-school.png";

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "GS REMERA-RUKOMA",
      subtitle: "High School (2020 - 2023)",
      description:
        "Completed my high school education at GS REMERA-RUKOMA with a focus on Mathematics, Physics, and Computer Science (MPC), laying the foundation for my future academic pursuits.",
      image: highSchoolImg,
      aosAnimation: "fade-right",
      aosDuration: 1200,
      hashtags: ["mathematics", "physics", "computerscience", "sciences"],
    },
    {
      id: 2,
      title: "The African Leadership University",
      subtitle: "University (2025 - 2028)",
      description:
        "Pursuing a Bachelor's degree in Computer Software Engineering at The African Leadership University, where I am gaining in-depth knowledge of software development, algorithms, and data structures.",
      image: collegeImg,
      aosAnimation: "fade-left",
      aosDuration: 1300,
      aosDelay: 50,
      hashtags: ["softwareengineering", "algorithms", "datastructures"],
    },
  ];

  return (
    <section className="container lg:pt-5" id="education">
      <div className="mb-7 sm:mb-0">
        <h3 className="text-headingColor font-[700] text-[2rem]">
          Education Background
        </h3>
      </div>
      <div className="w-full py-3 px-2 sm:px-0 flex items-center justify-center flex-col lg:flex-row">
        {educationData.map((education, index) => (
          <div
            key={education.id}
            className={`mt-6 sm:mt-0 sm:mb-12 ${index === 1 ? "md:ml-8" : ""}`}
          >
            <div className="flex items-center sm:flex-row">
              <div className="flex justify-start w-full mx-auto items-center">
                <div
                  data-aos={education.aosAnimation}
                  data-aos-duration={education.aosDuration}
                  data-aos-delay={education.aosDelay}
                  className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 w-full sm:pr-8 flex items-center gap-3"
                >
                  <div className="h-full relative w-64">
                    <figure>
                      <img
                        className="w-full h-full object-cover rounded"
                        src={education.image}
                        alt={education.title}
                      />
                    </figure>
                  </div>
                  <div>
                    <h3 className="text-primaryColor font-[700] text-[25px] mb-1 group-hover:text-white group-hover:font-[600] text-xl">
                      {education.title}
                    </h3>
                    <h4 className="text-secondaryColor font-[500] text-[17px] mb-2 group-hover:text-white">
                      {education.subtitle}
                    </h4>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                      {education.description}
                    </p>
                    <div className="hashtags">
                      {education.hashtags.map((hashtag, index) => (
                        <span
                          key={index}
                          className="text-primaryColor text-[12px] px-2 py-1 rounded-[5px] mt-2 mr-2 inline-block group-hover:text-white hover:underline"
                        >
                          #{hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
