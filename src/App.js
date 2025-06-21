import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Contact from "./components/UI/Contact";
import Projects from "./components/UI/Projects";
import AnotherEducation from "./components/UI/AnotherEducation";
import WorkExperience from "./components/UI/WorkExperience";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <AnotherEducation />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
