import { useState } from "react";
import { Code, Database, Wrench, Palette } from "lucide-react";

export default function Technologies() {
  const [imageErrors, setImageErrors] = useState({});

  const technologiesData = [
    {
      category: "Languages",
      icon: Code,
      description: "Core programming languages",
      color: "blue",
      technologies: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "SQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
      ],
    },
    {
      category: "Frontend",
      icon: Palette,
      description: "User interface & experience",
      color: "emerald",
      technologies: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Material UI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
          name: "React Router",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
        },
        {
          name: "Headless UI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/headlessui/headlessui-original.svg",
        },
        {
          name: "Framer Motion",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      description: "Server-side & databases",
      color: "purple",
      technologies: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Nest.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Socket.io",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
        {
          name: "Prisma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
      ],
    },
    {
      category: "Tools",
      icon: Wrench,
      description: "Development & productivity",
      color: "orange",
      technologies: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Webpack",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "ESLint",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
        },
      ],
    },
  ];

  // Color configuration mapping
  const colorConfig = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
      icon: "text-blue-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700",
      icon: "text-emerald-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      badge: "bg-purple-100 text-purple-700",
      icon: "text-purple-600",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-600",
      badge: "bg-orange-100 text-orange-700",
      icon: "text-orange-600",
    },
  };

  const handleImageError = (techName) => {
    setImageErrors((prev) => ({ ...prev, [techName]: true }));
  };

  const TechnologyCard = ({ tech, color }) => {
    const hasError = imageErrors[tech.name];

    return (
      <div
        className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
        role="listitem"
        aria-label={`${tech.name} technology`}
      >
        <div className="w-12 h-12 mb-3 flex items-center justify-center bg-gray-50 rounded-lg">
          {!hasError ? (
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="w-8 h-8 object-contain"
              loading="lazy"
              onError={() => handleImageError(tech.name)}
            />
          ) : (
            <Code size={20} className="text-gray-400" />
          )}
        </div>
        <span className="text-sm font-medium text-gray-700 text-center leading-tight">
          {tech.name}
        </span>
      </div>
    );
  };

  const CategorySection = ({ categoryData }) => {
    const IconComponent = categoryData.icon;
    const colorStyles = colorConfig[categoryData.color];

    return (
      <div
        className={`bg-white rounded-xl border-2 ${colorStyles.border} shadow-sm hover:shadow-md transition-shadow duration-200`}
      >
        {/* Header */}
        <div className={`${colorStyles.bg} p-6 rounded-t-xl`}>
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-3 bg-white rounded-lg shadow-sm ${colorStyles.icon}`}
            >
              <IconComponent size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {categoryData.category}
              </h3>
              <p className="text-gray-600 text-sm">
                {categoryData.description}
              </p>
            </div>
          </div>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorStyles.badge}`}
          >
            {categoryData.technologies.length} Technologies
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="p-6">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            role="list"
            aria-label={`${categoryData.category} technologies`}
          >
            {categoryData.technologies.map((tech) => (
              <TechnologyCard
                key={tech.name}
                tech={tech}
                color={categoryData.color}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const totalTechnologies = technologiesData.reduce(
    (total, category) => total + category.technologies.length,
    0
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the programming languages, frameworks,
            databases, and development tools I use to build modern applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {technologiesData.map((categoryData) => (
            <CategorySection
              key={categoryData.category}
              categoryData={categoryData}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {technologiesData.map((category) => {
              const colorStyles = colorConfig[category.color];
              return (
                <div key={category.category}>
                  <div
                    className={`text-2xl font-bold mb-1 ${colorStyles.text}`}
                  >
                    {category.technologies.length}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {category.category}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
              <Code className="text-gray-600" size={20} />
              <span className="text-gray-700 font-medium">
                {totalTechnologies} Technologies Total
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
