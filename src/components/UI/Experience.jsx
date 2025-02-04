import theGymRwandaLogo from "../../assets/images/the-gym-logo.jpeg";
import thinkYoungLogo from "../../assets/images/thinkyoung-logo.png";

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "The Gym Rwanda",
      title: "Software Developer",
      companyLink: "https://www.the-gym.rw/",
      duration: "November 2024 - Present",
      description:
        "Serving as a software development coach for current cohorts across various university campuses, including ALU and AUCA. Responsibilities include conducting assessments at institutions such as Kepler College.",
      skillsLearned: [
        "Coaching",
        "Curriculum Development",
        "Assessment Design",
        "Team Leadership",
      ],
      technologiesUsed: [
        "JavaScript",
        "React",
        "Node.js",
        "Agile Methodologies",
      ],
      logo: theGymRwandaLogo,
      isCurrent: true,
    },
    {
      id: 2,
      company: "The Gym Rwanda",
      title: "Software Development Trainee",
      companyLink: "https://www.the-gym.rw/",
      duration: "April 2024 - November 2024",
      description:
        "Completed an intense 7-month software development training program, gaining expertise in both frontend and backend technologies, and receiving a certificate of completion.",
      skillsLearned: [
        "Full-Stack Development",
        "Problem Solving",
        "System Design",
        "Software Testing",
      ],
      technologiesUsed: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Headless UI",
        "Node",
        "Express",
        "Nest",
        "Docker",
        "Jest",
        "SQL",
        "PostgreSQL",
        "Prisma",
        "MongoDB",
      ],
      logo: theGymRwandaLogo,
    },
    {
      id: 3,
      company: "ThinkYoung Coding School (sponsored by Boeing)",
      title: "Frontend & Robotics Trainee",
      companyLink: "https://www.thinkyoungcodingschool.com/",
      duration: "April 2022",
      description:
        "Completed an intensive one-month training program focused on web development fundamentals (HTML, CSS, JavaScript) and robotics. Received a certificate of participation upon completion.",
      skillsLearned: [
        "Web Development Basics",
        "Robotics Fundamentals",
        "Problem-Solving",
      ],
      technologiesUsed: ["HTML", "CSS", "JavaScript"],
      logo: thinkYoungLogo,
    },
  ];

  return (
    <section className="container lg:pt-5" id="experience">
      <div className="mb-7 sm:mb-0">
        <h3 className="text-headingColor font-[700] text-[2rem]">Experience</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experienceData.map((experience) => (
          <div
            key={experience.id}
            className={`p-6 rounded shadow-lg text-center flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-300 ${
              experience.isCurrent ? "bg-blue-100" : "bg-white"
            }`}
          >
            <div className="w-24 h-24 mb-4">
              <img
                className="w-full h-full object-contain rounded"
                src={experience.logo}
                alt={`${experience.company} Logo`}
              />
            </div>
            <a href={experience.companyLink} target="_blank" rel="noreferrer">
              <h4 className="text-primaryColor font-[700] text-[20px] mb-1">
                {experience.title}
              </h4>
            </a>
            <h5 className="text-secondaryColor font-[600] text-[18px] mb-2">
              {experience.company} ({experience.duration})
            </h5>
            <p className="text-[15px] text-smallTextColor leading-5 mb-2">
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
        ))}
      </div>
    </section>
  );
}
