import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer"
            >
              Send Message
            </button>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition transform hover:-translate-y-1 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition transform hover:-translate-y-1 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition transform hover:-translate-y-1 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition transform hover:-translate-y-1 text-2xl"
              >
                <FaFacebook />
              </a>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
