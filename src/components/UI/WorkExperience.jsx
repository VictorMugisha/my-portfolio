import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
  Users,
} from "lucide-react";
import { useState } from "react";

import theGymRwandaLogo from "../../assets/images/the-gym-logo.jpeg";
import thinkYoungLogo from "../../assets/images/thinkyoung-logo.png";

export default function WorkExperience() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      bgGradient: "from-blue-50 to-indigo-100",
      accentColor: "blue",
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
        "Node",
        "Express",
        "Docker",
        "PostgreSQL",
        "MongoDB",
      ],
      logo: theGymRwandaLogo,
      isCurrent: false,
      bgGradient: "from-green-50 to-emerald-100",
      accentColor: "green",
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
      isCurrent: false,
      bgGradient: "from-purple-50 to-violet-100",
      accentColor: "purple",
    },
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      JavaScript: Code,
      React: Code,
      "Node.js": Code,
      TypeScript: Code,
      HTML: Code,
      CSS: Code,
      Docker: Code,
      PostgreSQL: Code,
      MongoDB: Code,
      Express: Code,
      "Tailwind CSS": Code,
      Node: Code,
      "Agile Methodologies": Users,
    };
    return iconMap[tech] || Code;
  };

  const getSkillIcon = (skill) => {
    const iconMap = {
      Coaching: Users,
      "Team Leadership": Users,
      "Full-Stack Development": Code,
      "Problem Solving": Award,
      "System Design": Code,
      "Web Development Basics": Code,
      "Robotics Fundamentals": Code,
      "Curriculum Development": Award,
      "Assessment Design": Award,
      "Software Testing": CheckCircle,
      "Problem-Solving": Award,
    };
    return iconMap[skill] || Award;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development, from intensive
            training programs to coaching the next generation of developers
            across university campuses.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Simple vertical layout */}
          <div className="md:hidden space-y-8">
            {experienceData.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline line and dot for mobile */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-300"></div>
                )}
                <div
                  className={`absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                    experience.accentColor === "blue"
                      ? "bg-blue-500"
                      : experience.accentColor === "green"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                ></div>

                {/* Card */}
                <div className="ml-16">
                  <div
                    onMouseEnter={() => setHoveredCard(experience.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                      hoveredCard === experience.id ? "scale-105" : ""
                    }`}
                  >
                    {/* Card Header */}
                    <div
                      className={`bg-gradient-to-br ${experience.bgGradient} p-6`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-16 h-16 rounded-xl object-cover shadow-md"
                            loading="lazy"
                          />
                        </div>

                        {/* Title and Company */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="text-xl font-bold text-gray-900">
                              {experience.title}
                            </h3>
                            {experience.isCurrent && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium border border-blue-200">
                                ⏰ Current
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            💼
                            <a
                              href={experience.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                            >
                              {experience.company}
                              🔗
                            </a>
                          </div>

                          <div className="flex items-center gap-2 text-gray-600">
                            📅
                            <span className="text-sm font-medium">
                              {experience.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        {experience.description}
                      </p>

                      {/* Skills Learned */}
                      <div className="mb-6">
                        <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          🏆 Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skillsLearned.map((skill) => {
                            const SkillIcon = getSkillIcon(skill);
                            return (
                              <span
                                key={skill}
                                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                                  experience.accentColor === "blue"
                                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                    : experience.accentColor === "green"
                                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                                    : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                }`}
                              >
                                <SkillIcon size={12} />
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          💻 Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologiesUsed.map((tech) => {
                            const TechIcon = getTechIcon(tech);
                            return (
                              <span
                                key={tech}
                                className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-all duration-200"
                              >
                                <TechIcon size={12} />
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Alternating timeline layout */}
          <div className="hidden md:block relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {experienceData.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={experience.id} className="relative mb-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                      experience.accentColor === "blue"
                        ? "bg-blue-500"
                        : experience.accentColor === "green"
                        ? "bg-green-500"
                        : "bg-purple-500"
                    }`}
                    style={{ top: "2rem" }}
                  ></div>

                  {/* Card container */}
                  <div className="flex items-start">
                    {isLeft ? (
                      <>
                        {/* Left side card */}
                        <div className="w-1/2 pr-8">
                          <div
                            onMouseEnter={() => setHoveredCard(experience.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ml-auto max-w-lg ${
                              hoveredCard === experience.id ? "scale-105" : ""
                            }`}
                          >
                            {/* Card Header */}
                            <div
                              className={`bg-gradient-to-br ${experience.bgGradient} p-6`}
                            >
                              <div className="flex items-start gap-4">
                                {/* Company Logo */}
                                <div className="flex-shrink-0">
                                  <img
                                    src={experience.logo}
                                    alt={experience.company}
                                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                                    loading="lazy"
                                  />
                                </div>

                                {/* Title and Company */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <h3 className="text-xl font-bold text-gray-900">
                                      {experience.title}
                                    </h3>
                                    {experience.isCurrent && (
                                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium border border-blue-200">
                                        <Clock size={12} />
                                        Current
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <Briefcase
                                      size={16}
                                      className="text-gray-600"
                                    />
                                    <a
                                      href={experience.companyLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                                    >
                                      {experience.company}
                                      <ExternalLink size={14} />
                                    </a>
                                  </div>

                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar size={14} />
                                    <span className="text-sm font-medium">
                                      {experience.duration}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                              {/* Description */}
                              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {experience.description}
                              </p>

                              {/* Skills Learned */}
                              <div className="mb-6">
                                <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Award
                                    size={16}
                                    className="text-yellow-600"
                                  />
                                  Skills Developed
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.skillsLearned.map((skill) => {
                                    const SkillIcon = getSkillIcon(skill);
                                    return (
                                      <span
                                        key={skill}
                                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                                          experience.accentColor === "blue"
                                            ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                            : experience.accentColor === "green"
                                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                        }`}
                                      >
                                        <SkillIcon size={12} />
                                        {skill}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Technologies Used */}
                              <div>
                                <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Code size={16} className="text-gray-600" />
                                  Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologiesUsed.map((tech) => {
                                    const TechIcon = getTechIcon(tech);
                                    return (
                                      <span
                                        key={tech}
                                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-all duration-200"
                                      >
                                        <TechIcon size={12} />
                                        {tech}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Empty right side */}
                        <div className="w-1/2 pl-8"></div>
                      </>
                    ) : (
                      <>
                        {/* Empty left side */}
                        <div className="w-1/2 pr-8"></div>
                        {/* Right side card */}
                        <div className="w-1/2 pl-8">
                          <div
                            onMouseEnter={() => setHoveredCard(experience.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 max-w-lg ${
                              hoveredCard === experience.id ? "scale-105" : ""
                            }`}
                          >
                            {/* Card Header */}
                            <div
                              className={`bg-gradient-to-br ${experience.bgGradient} p-6`}
                            >
                              <div className="flex items-start gap-4">
                                {/* Company Logo */}
                                <div className="flex-shrink-0">
                                  <img
                                    src={experience.logo}
                                    alt={experience.company}
                                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                                    loading="lazy"
                                  />
                                </div>

                                {/* Title and Company */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <h3 className="text-xl font-bold text-gray-900">
                                      {experience.title}
                                    </h3>
                                    {experience.isCurrent && (
                                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium border border-blue-200">
                                        <Clock size={12} />
                                        Current
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <Briefcase
                                      size={16}
                                      className="text-gray-600"
                                    />
                                    <a
                                      href={experience.companyLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                                    >
                                      {experience.company}
                                      <ExternalLink size={14} />
                                    </a>
                                  </div>

                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar size={14} />
                                    <span className="text-sm font-medium">
                                      {experience.duration}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                              {/* Description */}
                              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {experience.description}
                              </p>

                              {/* Skills Learned */}
                              <div className="mb-6">
                                <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Award
                                    size={16}
                                    className="text-yellow-600"
                                  />
                                  Skills Developed
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.skillsLearned.map((skill) => {
                                    const SkillIcon = getSkillIcon(skill);
                                    return (
                                      <span
                                        key={skill}
                                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                                          experience.accentColor === "blue"
                                            ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                            : experience.accentColor === "green"
                                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                        }`}
                                      >
                                        <SkillIcon size={12} />
                                        {skill}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Technologies Used */}
                              <div>
                                <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Code size={16} className="text-gray-600" />
                                  Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologiesUsed.map((tech) => {
                                    const TechIcon = getTechIcon(tech);
                                    return (
                                      <span
                                        key={tech}
                                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-all duration-200"
                                      >
                                        <TechIcon size={12} />
                                        {tech}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
            <Briefcase size={20} className="text-gray-600" />
            <span className="text-gray-700 font-medium">
              Professional Growth Journey
            </span>
            <Users size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
