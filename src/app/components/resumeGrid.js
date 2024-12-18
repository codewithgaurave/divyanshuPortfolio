import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";

import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Resume from "./Resume";
import Blog from "./Blog";
import Contact from "./Contact";
import Misc from "./Misc";
import { GRIDS } from "../constants";

export default function ResumeGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Resume".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Here are my some top designed resuem...".split("");

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

  const trails = useTrail(2, {
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
        className="row-start-4 lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-[#BC4749] border border-black p-5 flex flex-col items-center justify-center"
        >
          <div className="bg-[#F2E8CF] w-full p-5 my-3 border border-black flex flex-col items-center gap-3">
            <div className="text-2xl font-bold text-[#BC4749]">
              Professional Resume
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all bg-[#264653] w-fit px-5 py-2 m-3 border border-black">
              <a
                href="/path/to/certificate1.pdf"
                download
                className="font-neutral-900 text-3xl font-bold text-[#E9C46A]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-5"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full bg-[#2A9D8F] border border-black p-5 flex flex-col items-center justify-center"
        >
          <div className="bg-[#E9C46A] w-full p-5 my-3 border border-black flex flex-col items-center gap-3">
            <div className="text-2xl font-bold text-[#264653]">
              Cover Letter
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all bg-[#F4A261] w-fit px-5 py-2 m-3 border border-black">
              <a
                href="/path/to/certificate2.pdf"
                download
                className="font-neutral-900 text-3xl font-bold text-[#2A9D8F]"
              >
                Download Cover Letter
              </a>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6"
      >
        <animated.div
          style={trails[4]}
          className="w-full h-full bg-[#264653] border border-black p-5 flex flex-col items-center justify-center"
        >
          <div className="bg-[#E76F51] w-full p-5 my-3 border border-black flex flex-col items-center gap-3">
            <div className="text-2xl font-bold text-[#F2E8CF]">
              Certificates
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all bg-[#F4A261] w-fit px-5 py-2 m-3 border border-black">
              <a
                href="/path/to/certificate4.pdf"
                download
                className="font-neutral-900 text-3xl font-bold text-[#264653]"
              >
                Download Certificates
              </a>
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
            <span className="text-4xl font-bold text-[#BC4749]" id="home">
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
        className="lg:row-span-6 lg:col-span-3"
      >
        <animated.div
          style={trails[3]}
          className="w-full h-full bg-[#F4A261] border border-black p-5 flex flex-col items-center justify-center"
        >
          <div className="bg-[#264653] w-full p-5 my-3 border border-black flex flex-col items-center gap-3">
            <div className="text-2xl font-bold text-[#E9C46A]">
              Portfolio Document
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all bg-[#2A9D8F] w-fit px-5 py-2 m-3 border border-black">
              <a
                href="/path/to/certificate3.pdf"
                download
                className="font-neutral-900 text-3xl font-bold text-[#F2E8CF]"
              >
                Download Portfolio
              </a>
            </div>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className="w-full h-full bg-[#264653] border border-black p-5 flex flex-col items-center justify-center"
        >
          <div className="bg-[#E76F51] w-full p-5 my-3 border border-black flex flex-col items-center gap-3">
            <div className="text-2xl font-bold text-[#F2E8CF]">
              Certificates
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all bg-[#F4A261] w-fit px-5 py-2 m-3 border border-black">
              <a
                href="/path/to/certificate4.pdf"
                download
                className="font-neutral-900 text-3xl font-bold text-[#264653]"
              >
                Download Certificates
              </a>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
