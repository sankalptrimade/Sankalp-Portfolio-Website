import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Home = () => {
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1pHfYBlv1zfUIELScEPGb7gPJFE1ElHDy";
  
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.download = "Sankalp_Resume.pdf"; // Ensures correct file name
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Sankalp Trimade
          </h1>
          <p className="text-gray-400 text-lg text-center mb-8 max-w-lg mx-auto">
            Frontend Developer passionate about crafting clean, scalable, and
            high-performance web applications. Dedicated to writing efficient,
            maintainable code while prioritizing intuitive and engaging user
            experiences. Constantly exploring modern technologies to build
            innovative and future-ready solutions.🚀
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <button
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 cursor-pointer"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
