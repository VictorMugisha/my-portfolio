import React, { useState, useEffect, useMemo } from "react";
import {
  ExternalLink,
  Globe,
  Github,
  Smartphone,
  Database,
  Code,
  Users,
  User,
  Zap,
  Server,
  Palette,
  Triangle,
  RefreshCw,
  Map,
  Box,
  Cloud,
  BarChart3,
  Layers,
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Project data 
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Sulaina Personal Website",
        description:
          "A modern, responsive personal website designed for Uwase Sulaina, an Economics student from Rwanda studying in Dubai, UAE.",
        technologies: ["React", "Tailwind", "Lucide Icons", "Vercel"],
        category: "personal",
        type: "web",
        projectRepo: "https://github.com/VictorMugisha/sulaina",
        projectUrl: "https://sulaina.vercel.app/",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top",
        featured: true,
      },
      {
        id: 2,
        title: "MindForge Website",
        description:
          "MindForge, is a dedicated organization committed to combating corruption within the East African Community (EAC) through innovative solutions and community engagement.",
        technologies: ["React", "Tailwind", "Netlify", "React Icons"],
        category: "personal",
        type: "web",
        projectUrl: "https://mindforge-thinktank.netlify.app/",
        projectRepo: "https://github.com/VictorMugisha/mindforge-website",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=top",
      },
      {
        id: 3,
        title: "HooBank - Modern UI/UX",
        description:
          "Website using React.js & Tailwind CSS, featuring a sleek design and responsive layout.",
        technologies: ["React.js", "Tailwind CSS"],
        category: "personal",
        type: "web",
        projectUrl: "https://victor-bank-application.netlify.app/",
        projectRepo: "https://github.com/VictorMugisha/bank-application",
        image:
          "https://camo.githubusercontent.com/a4ee5fd4c9c7c4ed60cd5ba7f05479596168f5a373891333af32fc37e806be2d/68747470733a2f2f692e6962622e636f2f424b31486e30782f53637265656e73686f742d323032322d30382d30382d61742d342d30352d34382d504d2e706e67",
      },
      {
        id: 4,
        title: "Wavelength - Fullstack Authentication App",
        description:
          "A fullstack application demonstrating user authentication with Clerk and JWT, built with the MERN stack.",
        technologies: [
          "React.js",
          "MongoDB",
          "Express",
          "Node.js",
          "JWT",
          "Clerk",
        ],
        category: "personal",
        type: "fullstack",
        projectUrl: "https://wavelength-auth.netlify.app/",
        projectRepo: "https://github.com/VictorMugisha/react-auth-frontend",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=top",
        featured: true,
      },
      {
        id: 5,
        title: "Portfolio Website",
        description:
          "Personal portfolio showcasing projects with smooth animations and responsive design.",
        technologies: [
          "React",
          "Aos Animation",
          "Tailwind",
          "Netlify",
          "Lucide Icons",
          "Email JS",
        ],
        category: "personal",
        type: "frontend",
        projectUrl: "https://victormugisha.netlify.app/",
        projectRepo: "https://github.com/VictorMugisha/my-portfolio",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=top",
      },
      {
        id: 6,
        title: "Wood Correction Website",
        description:
          "My first ever website - a wood furnishing company responsive website built using simple and basic HTML, CSS and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "personal",
        type: "frontend",
        projectUrl: "https://woodcorrectioncoltd.netlify.app/",
        projectRepo: "https://github.com/VictorMugisha/wood-correction-website",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=top",
      },
    ],
    []
  );

  const filters = [
    { key: "all", label: "All Projects", icon: Globe },
    { key: "personal", label: "My Projects", icon: User },
    { key: "collaborative", label: "Collaborative", icon: Users },
    { key: "web", label: "Web Apps", icon: Code },
    { key: "mobile", label: "Mobile Apps", icon: Smartphone },
    { key: "backend", label: "Backend", icon: Database },
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      React: Code,
      "Vue.js": Code,
      "Node.js": Server,
      "Next.js": Triangle,
      MongoDB: Database,
      PostgreSQL: Database,
      Tailwind: Palette,
      Express: Server,
      "API Integration": Zap,
      "Socket.io": Zap,
      Redux: RefreshCw,
      Maps: Map,
      Prisma: Box,
      Supabase: Zap,
      "Framer Motion": Layers,
      Vercel: Triangle,
      Docker: Box,
      AWS: Cloud,
      GraphQL: BarChart3,
      "React Native": Smartphone,
    };
    return iconMap[tech] || Code;
  };

  const filterProjects = (filterKey) => {
    setIsAnimating(true);
    setActiveFilter(filterKey);

    setTimeout(() => {
      let filtered = projects;

      if (filterKey !== "all") {
        filtered = projects.filter(
          (project) =>
            project.category === filterKey || project.type === filterKey
        );
      }

      setFilteredProjects(filtered);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my development journey, featuring both independent
            creations and collaborative efforts that demonstrate my passion for
            building innovative digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.key}
                onClick={() => filterProjects(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 text-base rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-primaryColor text-white shadow-lg shadow-primaryColor/25 scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-primaryColor border border-gray-200 hover:border-blue-200 hover:shadow-md"
                }`}
              >
                <IconComponent size={18} />
                <span className="text-base">{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
            isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? "ring-2 ring-blue-200 ring-opacity-50" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primaryColor text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === "personal"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {project.category === "personal"
                      ? "Personal"
                      : "Collaborative"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 capitalize">
                    {project.type}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primaryColor transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span>
                        {React.createElement(getTechIcon(tech), { size: 14 })}
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primaryColor text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 group/btn"
                  >
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
                    />
                    View Project
                  </a>
                  <a
                    href={project.projectRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try selecting a different filter to see more projects.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primaryColor to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Let's collaborate on your next project and bring your ideas to
              life.
            </p>
            <a href="#contact">
              <button className="bg-white text-primaryColor px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 hover:scale-105 transform">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
