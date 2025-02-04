import techSolutionsLogo from "../../assets/images/the-gym-logo.jpeg";
import innovativeCodersLogo from "../../assets/images/college.png";
import webDevStudioLogo from "../../assets/images/the-gym-logo.jpeg";

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Tech Solutions Ltd.",
      title: "UI/UX Designer",
      duration: "2018 - 2022",
      description:
        "Worked on designing user-friendly interfaces and improving user experiences for web applications.",
      skillsLearned: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Adobe XD",
        "Figma",
      ],
      technologiesUsed: ["HTML", "CSS", "JavaScript", "React"],
      logo: techSolutionsLogo,
    },
    {
      id: 2,
      company: "Innovative Coders Inc.",
      title: "Full-Stack Developer",
      duration: "2018 - 2022",
      description:
        "Developed full-stack web applications and optimized backend performance.",
      skillsLearned: [
        "Backend Development",
        "Database Management",
        "REST API",
        "Cloud Services",
      ],
      technologiesUsed: ["Node.js", "Express", "MongoDB", "AWS"],
      logo: innovativeCodersLogo,
    },
    {
      id: 3,
      company: "Web Dev Studio",
      title: "Frontend Developer",
      duration: "2018 - 2022",
      description:
        "Built dynamic and responsive user interfaces using modern JavaScript frameworks.",
      skillsLearned: [
        "Responsive Design",
        "State Management",
        "Component-based Architecture",
      ],
      technologiesUsed: ["React", "Vue.js", "Tailwind CSS"],
      logo: webDevStudioLogo,
    },
  ];

  return (
    <section className="container lg:pt-5">
      <div className="mb-7 sm:mb-0">
        <h3 className="text-headingColor font-[700] text-[2rem]">Experience</h3>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:flex-wrap md:justify-between">
        {experienceData.map((experience) => (
          <div
            key={experience.id}
            className="relative w-full md:w-[30%] mb-12 flex flex-col h-full"
          >
            <div className="bg-white p-6 rounded shadow-lg w-full text-center flex flex-col items-center flex-grow">
              <div className="w-24 h-24 mb-4">
                <img
                  className="w-full h-full object-contain rounded"
                  src={experience.logo}
                  alt={`${experience.company} Logo`}
                />
              </div>
              <h4 className="text-primaryColor font-[700] text-[20px] mb-1">
                {experience.title}
              </h4>
              <h5 className="text-secondaryColor font-[600] text-[18px] mb-2">
                {experience.company} ({experience.duration})
              </h5>
              <p className="text-[15px] text-smallTextColor leading-5 mb-2 flex-grow">
                {experience.description}
              </p>
              <div className="mb-2">
                <strong>Skills Learned:</strong>
                <ul className="list-disc list-inside text-smallTextColor text-left">
                  {experience.skillsLearned.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Technologies Used:</strong>
                <ul className="list-disc list-inside text-smallTextColor text-left">
                  {experience.technologiesUsed.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
