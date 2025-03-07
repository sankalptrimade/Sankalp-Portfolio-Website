import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontend = [
    "ReactJS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "React Hooks",
    "Redux Toolkit",
    "React Router",
    "Restful APIs",
    "Vite",
    "Parcel",
    "Babel",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "GitHub",
    "Heroku-Vercel-Firebase-Netlify",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-justify">
              I am a Frontend Developer with nearly two years of experience,
              specializing in scalable, high-performance web applications.
              Proficient in ReactJS, JavaScript, and modern CSS frameworks, I
              craft intuitive, responsive, and visually engaging interfaces that
              enhance user experience. <br />
              With expertise in component-based architecture, responsive design,
              and performance optimization, I ensure seamless functionality
              across devices. I follow best practices for maintainability,
              quality assurance, and robust testing while collaborating with
              designers, product teams, and back-end developers to deliver
              seamless digital experiences. <br />
              Committed to continuous learning and innovation, I stay updated
              with the latest technologies to build future-ready solutions.
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Skill Set</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              {/* <ul className="list-disc list-inside text-gray-300 space-y-2"> */}
              {/* <li> */}
              <strong>Bachelor of Engineering in Information Technology</strong>
              <br />
              Shri Shankaracharya Institute of Professional Management and
              Technology [2018-2022]
              <br /> CGPA - 7.93
              {/* </li> */}
              {/* </ul> */}
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <strong>
                      Junior Software Developer <br /> Tezo Digitals [April 2023
                      - Present]
                    </strong>
                  </h4>
                  <p className="text-left">
                  Enhancing expertise in Frontend Development by leveraging ReactJS to design 
                  interactive web applications and implement modern UI techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
