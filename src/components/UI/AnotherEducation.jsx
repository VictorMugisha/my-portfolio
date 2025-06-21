import { useState } from 'react'
import {
  Calendar,
  GraduationCap,
  Award,
  BookOpen,
  Lightbulb,
  Code,
  FlaskConical,
} from "lucide-react";

import collegeImg from "../../assets/images/college.png";


export default function AnotherEducation() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample education data
  const educationData = [
    {
      id: 1,
      type: "High School",
      institution: "GS REMERA-RUKOMA",
      startYear: 2020,
      endYear: 2023,
      description:
        "Built strong foundation in Mathematics, Physics, and Computer Science, developing analytical thinking and problem-solving skills essential for advanced technical studies.",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=center",
      hashtags: [
        "#Mathematics",
        "#Physics",
        "#ComputerScience",
        "#ProblemSolving",
        "#AnalyticalThinking",
      ],
      bgGradient: "from-green-50 to-emerald-100",
      accentColor: "green",
      isCurrent: false,
    },
    {
      id: 2,
      type: "University",
      institution: "The African Leadership University",
      startYear: 2025,
      endYear: 2028,
      description:
        "I am currently pursuing Software Engineering at ALU, gaining deeper understanding in shell scripting, advanced data structures and algorithms, specializing in Machine Learning and Artificial Intelligence.",
      image: collegeImg,
      hashtags: [
        "#SoftwareEngineering",
        "#MachineLearning",
        "#DataStructures",
        "#AI",
        "#ShellScripting",
      ],
      bgGradient: "from-blue-50 to-indigo-100",
      accentColor: "blue",
      isCurrent: true,
    },
  ];

  const getHashtagIcon = (hashtag) => {
    const iconMap = {
      "#Mathematics": FlaskConical,
      "#Physics": Award,
      "#ComputerScience": Code,
      "#ProblemSolving": Lightbulb,
      "#AnalyticalThinking": Lightbulb,
      "#SoftwareEngineering": Code,
      "#MachineLearning": Lightbulb,
      "#DataStructures": Code,
      "#AI": Lightbulb,
      "#ShellScripting": Code,
    };
    return iconMap[hashtag] || BookOpen;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Education Background
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My educational journey has provided me with a strong foundation in
            both fundamental principles and cutting-edge technologies, preparing
            me for the challenges of modern development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((education) => {
            const IconComponent =
              education.type === "High School" ? BookOpen : GraduationCap;

            return (
              <div
                key={education.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                  hoveredCard === education.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(education.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Education Image */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${education.bgGradient} h-48`}
                >
                  <img
                    src={education.image}
                    alt={education.institution}
                    className="w-full h-full object-cover transition-transform duration-500 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Education Type Badge */}
                  <div
                    className={`absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium shadow-lg ${
                      education.accentColor === "green"
                        ? "bg-green-600"
                        : "bg-blue-600"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{education.type}</span>
                  </div>

                  {/* Years Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 text-gray-800 px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    <Calendar size={16} />
                    <span>
                      {education.startYear} - {education.endYear}
                    </span>
                  </div>
                </div>

                {/* Education Content */}
                <div className="p-6">
                  {/* Institution Name */}
                  <h3
                    className={`text-2xl font-bold mb-4 group-hover:text-${education.accentColor}-600 transition-colors duration-300`}
                  >
                    {education.institution}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {education.description}
                  </p>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {education.hashtags.map((hashtag) => {
                      const HashtagIcon = getHashtagIcon(hashtag);
                      return (
                        <span
                          key={hashtag}
                          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                            education.accentColor === "green"
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                          }`}
                        >
                          <HashtagIcon size={14} />
                          {hashtag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Duration Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Award size={16} />
                      <span className="text-sm font-medium">
                        {education.endYear - education.startYear} Years
                      </span>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        education.isCurrent
                          ? "bg-blue-100 text-blue-600 border border-blue-200"
                          : education.accentColor === "green"
                          ? "bg-green-50 text-green-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {education.isCurrent ? "Current" : "Completed"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full">
            <GraduationCap className="text-blue-600" size={24} />
            <span className="text-gray-700 font-medium">
              Continuous Learning Journey
            </span>
            <BookOpen className="text-green-600" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
