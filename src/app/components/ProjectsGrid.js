import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      <animated.div
        style={animatedStyles}
        className="row-start-4 lg:row-span-3 lg:col-span-5"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-[#A7C957] border border-black p-5 flex flex-col items-start justify-between"
        >
          <div className="bg-[#F2E8CF] w-full p-5 my-3 flex border border-black">
            {/* Left-aligned content (Project Name and Description) */}
            <div className="flex-1">
              {/* Project Name */}
              <div className="text-2xl font-bold text-[#BC4749]">
                Project Name
              </div>

              {/* Project Description */}
              <div className="text-md text-[#2A9D8F] text-left">
                This is a brief description of the project. It highlights the
                key features, technologies used, and the overall goal of the
                project.
              </div>
            </div>

            {/* Right-aligned Visit Website Button */}
            <div className="flex items-center justify-end">
              <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
                <a
                  href="#" // Replace with actual website link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links (Aligned below the description and button) */}
          <div className="flex gap-4 justify-center mt-4">
            <a
              href="https://github.com/yourusername" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#264653] hover:text-[#E9C46A] transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername" // Replace with actual LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#264653] hover:text-[#E9C46A] transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-[#FFD166] border border-black p-5 flex flex-col items-start justify-between"
        >
          <div className="bg-[#F2E8CF] w-full p-5 my-3 flex border border-black">
            <div className="flex-1">
              <div className="text-2xl font-bold text-[#BC4749]">Quiz App</div>
              <div className="text-md text-[#2A9D8F] text-left mt-2">
                An interactive quiz application with timer functionality and
                performance tracking.
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full bg-[#06D6A0] border border-black p-5 flex flex-col items-start justify-between"
        >
          <div className="bg-[#F2E8CF] w-full p-5 my-3 flex border border-black">
            <div className="flex-1">
              <div className="text-2xl font-bold text-[#BC4749]">
                Portfolio Website
              </div>
              <div className="text-md text-[#2A9D8F] text-left mt-2">
                A personal portfolio showcasing projects, skills, and
                experience.
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full p-10 bg-[#386641] border border-black flex flex-col items-center justify-center gap-3"
        >
          <div
            className="text-4xl bg-[#BC4749] font-bold text-[#BC4749]"
            id="home"
          >
            <span
              className="inline-block mx-2 animate-pulse"
              style={{ color: "white" }}
            >
              Back To Home
            </span>
          </div>
          <div className="border border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-3">
            <span className="text-5xl font-bold text-[#BC4749]" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2">
            <span className="lg:text-md text-[#BC4749]">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[3]}
          className="w-full h-full bg-[#118AB2] border border-black p-5 flex flex-col items-start justify-between"
        >
          <div className="bg-[#F2E8CF] w-full p-5 my-3 flex border border-black">
            <div className="flex-1">
              <div className="text-2xl font-bold text-[#BC4749]">
                Chat Application
              </div>
              <div className="text-md text-[#2A9D8F] text-left mt-2">
                A real-time chat app with WebSocket integration and customizable
                chat rooms.
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[4]}
          className="w-full h-full bg-[#073B4C] border border-black p-5 flex flex-col items-start justify-between"
        >
          <div className="bg-[#F2E8CF] w-full p-5 my-3 flex border border-black">
            <div className="flex-1">
              <div className="text-2xl font-bold text-[#BC4749]">
                Online Nursery Platform
              </div>
              <div className="text-md text-[#2A9D8F] text-left mt-2">
                An online plant nursery for purchasing and learning about
                plants.
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-2"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full bg-[#FF6F61] border border-black p-5 flex flex-col items-start justify-between"
        >
          <div className="bg-[#F2E8CF] w-full p-2 flex border border-black">
            <div className="flex-1">
              <div className="text-2xl font-bold text-[#BC4749]">
                E-commerce App
              </div>
              <div className="text-sm text-[#2A9D8F] text-left">
                A scalable e-commerce platform with React, Node.js, and MongoDB.
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
