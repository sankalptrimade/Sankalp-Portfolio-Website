import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Car Rental Website</h3>
              <p className="text-gray-400 mb-4 text-justify">
                Developed a Car Rental website using ReactJS and SASS, featuring
                a sleek, user-friendly interface for effortless vehicle browsing
                and booking. Designed for a smooth rental experience, it ensures
                easy navigation and quick access to affordable car options.
                Hosted on Vercel, it delivers fast performance and a reliable,
                budget-friendly solution for users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "SASS", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://car-rental-website-gilt-one.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project➡
                </a>
                <a
                  href="https://github.com/sankalptrimade/car-rental-website.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Source Code➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Zomato Clone</h3>
              <p className="text-gray-400 mb-4 text-justify">
                Developed a Zomato-inspired food delivery platform using ReactJS
                with Vite and Webpack, ensuring fast load times, smooth
                navigation, and an intuitive interface for browsing restaurants
                and placing orders effortlessly. Designed for affordability and
                convenience, it delivers a seamless and engaging dining
                experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://sankalptrimade.github.io/Zomato-Clone/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project➡
                </a>
                <a
                  href="https://github.com/sankalptrimade/Zomato-Clone.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Source Code➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">GPT-3 Landing Page</h3>
              <p className="text-gray-400 mb-4 text-justify">
                Developed a modern, responsive GPT-3 Landing Page using ReactJS
                with Vite and modern CSS, ensuring fast performance, smooth
                animations, and an intuitive user experience. Designed to
                showcase AI technology effectively, it offers seamless
                accessibility across devices with a sleek and visually
                compelling interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "CSS", "Responsive"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://sankalptrimade.github.io/GPT-3_LandingPage/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project➡
                </a>
                <a
                  href="https://github.com/sankalptrimade/GPT-3_LandingPage.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Source Code➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Ecommerce Website</h3>
              <p className="text-gray-400 mb-4 text-justify">
              Developed a responsive E-Commerce website using ReactJS, Bootstrap, and Redux, ensuring smooth navigation, dynamic listings, and efficient state management. It offers intuitive search, filtering, and a secure cart system for a seamless shopping experience across all devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "Bootstrap", "Redux", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://e-commerce-website-smoky-kappa-87.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project➡
                </a>
                <a
                  href="https://github.com/sankalptrimade/E-Commerce-Website.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Source Code➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
