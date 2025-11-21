"use client";
import { MyProjects } from "@/utils/data";
import { ArrowUp, ArrowDown, ChevronRight, Dot } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="project"
      className=" flex flex-col
      rounded-md px-4 pb-6 pt-2 w-full scroll-mt-24 gap-4"
    >
      {/* TOP */}
      <div className="w-full flex items-center justify-between">
        <span
          className="
            inline-flex items-center gap-2 px-1 py-1
            rounded-full
             font-semibold
            
            backdrop-blur-sm text-base
  "
        >
          <Dot
            className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse 
          fill-gray-400"
          />
          Projets
        </span>

        {/* More Btn */}
        <button
          className="flex items-center gap-1.5 bg-transparent
         p-2 border-black text-xs duration-300
         ease-in-out transition-all  group 
         rounded-md
         "
          onClick={() => setIsOpen(!isOpen)}
        >
          Voire {isOpen ? "moins" : "plus"}
          {isOpen ? (
            <ArrowUp
              size={14}
              className=" duration-300
            ease-in-out transition-all"
            />
          ) : (
            <ArrowDown
              size={14}
              className=" duration-300
            ease-in-out transition-all"
            />
          )}
        </button>
      </div>

      {/* main projects list */}

      <main
        className={`w-full p-2 grid grid-cols-1 gap-2.5
       ${isOpen ? "h-96" : "h-[280px] overflow-hidden"} duration-300
            ease-in-out transition-all 
        `}
      >
        {MyProjects.map((project, idx) => {
          return (
            <Link
              key={idx}
              href={project.link}
              className="w-full flex items-center justify-between 
              gap-2.5 p-2 py-3 bg-white rounded-md group
              shadow hover:shadow-lg transition-all duration-300
              ease-in-out
              "
            >
              <project.icon />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-700">
                  {project.label}
                </h3>
                <p className="text-xs text-gray-500">{project.tech.join()}</p>
              </div>

              <ChevronRight
                size={18}
                className="text-gray-500
              group-hover:translate-x-1 transition-all duration-300
              ease-in-out
              "
              />
            </Link>
          );
        })}
      </main>
    </section>
  );
};

export default ProjectsSection;
