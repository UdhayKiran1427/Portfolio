import React from "react"
import prdDash from "../assets/images/prdDash.png"
import mac from "../assets/images/AIinterview.png"
import dp from "../assets/images/Dp.png"
import { Link } from "react-router-dom"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Learning Platform",
    description: "A responsive e-learning platform that helps users access courses, track progress, and manage their learning journey.",
    image: prdDash,
    tech: "Javascript • Tailwind • React • Node.js • Express • MySql",
    live: "https://e-learning-platform-woad.vercel.app/",
    github: "https://github.com/UdhayKiran1427/E-learning-platform"
  },
  {
    title: "AI Interviewer",
    description: "An AI-powered interview platform that simulates real-time interviews and provides instant feedback.",
    image: mac,
    tech: "React • Scss • Node.js • Express • MongoDBx`",
    live: "https://interview-ai-5gy9.vercel.app/",
    github: "https://github.com/UdhayKiran1427/Interview-AI"
  },
  {
    title: "Portfolio Website",
    description: "Animated developer portfolio",
    image: dp,
    tech: "React • Tailwind • GSAP",
    live: "#",
    github: "#"
  }]
const Projects = () => {
  return (
    <div>
      {/* SIDEBAR AT MOBILE */}
      <div className="absolute top-6 left-0 w-full flex justify-around items-center  backdrop-blur-md py3 z-50 md:hidden ">
        <ul className="
text-[#b0b2c3]
flex flex-row md:flex-col md:w-11
gap-3 md:gap-4
items-center justify-center
bg-white/10 shadow-md shadow-black/40
rounded-lg
" style={{ padding: "10px 18px" }}>

          <li className="cursor-pointe">
            <Link to="/" className="block">
              <svg
                className="w-7 text-gray-400 transition-colors duration-300 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/about" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >

                <path
                  fill="currentColor"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
            </Link>
          </li>
          {/* <li>
            <Link to="/skill" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
              
                <path
                  fill="currentColor"
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
            </Link>
          </li> */}
          <li>
            <Link to="/project" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >

                <path
                  fill="currentColor"
                  d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                />
              </svg>
            </Link>

          </li>
          <li>
            <Link to="/contact" className="block">
              <svg
                className="w-7 hover:text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </Link>
          </li>

        </ul>
      </div>

      {/* SIDEBAR AT DESKTOP */}
      <div id="side" className="
hidden md:flex fixed top-1/2 left-3 -translate-y-1/2 z-50
flex-col gap-4  rounded-lg
" style={{ padding: "10px", marginTop: "30px" }}>

        <ul className="
text-[#b0b2c3]
flex flex-row md:flex-col md:w-11
gap-3 md:gap-4
items-center justify-center
bg-white/10 shadow-md shadow-black/40
rounded-lg
" style={{ padding: "10px 25px" }}>

          <li className="cursor-pointer">
            <Link to="/" className="block">
              <svg
                className="w-7 text-gray-400 transition-colors duration-300 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/about" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >

                <path
                  fill="currentColor"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
            </Link>
          </li>
          {/* <li className="cursor-pointer">
            <Link to="/skill" className='block'>
              <svg
                className="w-7 text-gray-400 transition-colors duration-300 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
              
                <path
                  fill="currentColor"
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
           </Link>
          </li> */}
          <li>
            <Link to="/project" className='block'>
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >

                <path
                  fill="currentColor"
                  d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block">
              <svg
                className="w-7 hover:text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>


      <section id="projects" className="flex  flex-col  text-white/60 bg-[#412c43e9]" style={{ padding: "60px 30px" }}>
        <h2 className="text-2xl md:text-4xl  font-semibold text-center tracking-wide 
" style={{ marginTop: "4rem", marginBottom: "60px", fontFamily: "Poppins" }}>
          Explore my Work
        </h2>
        <div
          id="project-card"
          className="
prg 
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
max-w-6xl
xl:max-w-6xl
"style={{ marginLeft: "" }}
        >
          {projects.map((project, index) => (
            <div key={index}

              className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 shadow-lg" style={{ padding: "20px" }}>
              <img
                src={project.image}
                className="w-full h-48 sm:h-50 md:h-60 lg:h-64 object-cover group-hover:scale-110 transition duration-500 rounded-2xl"
                style={{ padding: "5px" }}
              />
              <div className="absolute inset-0 bg-black/70  opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                <a
                target="_blank"
                  href={project.live}
                  className="bg-[#422d44c7] text-white  rounded-lg text-sm border border-[#201022fd]"
                  style={{ padding: "8px 15px" }}>
                  Live
                </a>
                <a
                target="_blank"
                  href={project.github}
                  className="bg-white/40 text-black px-4 py-2 rounded-lg text-sm border border-white"
                  style={{ padding: "8px 15px" }}>
                  Code
                </a>
              </div>
              <div className="p-5 flex flex-col gap-1.5" style={{ padding: "10px" }}>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                <p className="text-indigo-400 text-sm mt-3">
                  {project.tech}
                </p>
                <div className="flex gap-3 md:hidden">
                  <a href="https://productivity-dashboard-33bz.onrender.com/"
                   target="_blank"
                   rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-lg text-white/70" />
                  </a>
                   <a href="https://github.com/Sumi-ahir"
                    target='_blank'
                    rel="noopener noreferrer">
                      <FaGithub className='text-lg text-[#0e0e0ef1] bg-white rounded-full'/>
                   </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Projects