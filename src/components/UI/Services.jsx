import frontEndImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web applications using React, Node.js, and TypeScript. Building scalable solutions from database to user interface.",
      image: frontEndImg,
      imageAlt: "Frontend development icon",
      side: "left",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with React Native, delivering native performance across iOS and Android platforms.",
      image: appsImg,
      imageAlt: "Mobile app development icon",
      side: "right",
    },
    {
      id: 3,
      title: "Backend API Development",
      description:
        "Robust RESTful APIs and microservices using Node.js, Express.js, with MongoDB and PostgreSQL database integration.",
      image: backendImg,
      imageAlt: "Backend development icon",
      side: "left",
    },
    {
      id: 4,
      title: "Performance & DevOps",
      description:
        "Application optimization, Docker containerization, and deployment strategies for scalable, high-performance solutions.",
      image: uiImg,
      imageAlt: "Performance optimization icon",
      side: "right",
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const isLeft = service.side === "left";

    return (
      <div className="relative mb-8 sm:mb-12">
        <div
          className={`flex items-center ${
            isLeft ? "justify-start" : "justify-end"
          } w-full`}
        >
          <div className={`w-full sm:w-1/2 ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}>
            <div
              data-aos={isLeft ? "fade-right" : "fade-left"}
              data-aos-duration="1200"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-lg shadow-lg group hover:bg-primaryColor cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-primaryColor font-bold text-xl sm:text-2xl mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-smallTextColor group-hover:text-white group-hover:font-medium leading-relaxed transition-all duration-300">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline dot - hidden on mobile, visible on desktop */}
        <div className="hidden sm:flex absolute left-1/2 top-8 transform -translate-x-1/2 w-12 h-12 bg-primaryColor border-white border-4 rounded-full items-center justify-center shadow-lg">
          <figure className="w-6 h-6">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-full object-contain"
            />
          </figure>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:pt-5">
        <div className="text-center mb-16">
          <h2 className="text-headingColor font-extrabold text-3xl sm:text-4xl mb-6">
            What I Do
          </h2>
          <p className="max-w-3xl mx-auto text-headingColor font-medium text-base sm:text-lg leading-relaxed">
            Full-stack developer in Kigali, Rwanda, leveraging the
            JavaScript-TypeScript ecosystem to build scalable web and mobile
            applications. From React frontends to Node.js backends, delivering
            modern solutions that drive results.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-300 to-indigo-500 rounded-full"></div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-0">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
