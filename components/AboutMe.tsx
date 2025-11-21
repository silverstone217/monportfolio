"use client";
import { CircleArrowRight, Dot, FileUser } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="bio"
      className="bg-white flex flex-col
      rounded-md px-4 py-6 w-full border-white gap-6 scroll-mt-24"
    >
      {/* TOP */}
      <div
        className="flex items-center justify-between w-full 
      text-xs flex-wrap"
      >
        <span
          className="
            inline-flex items-center gap-2 px-1 py-1
            rounded-full
             font-semibold
            
            backdrop-blur-sm text-xs
  "
        >
          <Dot
            className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse 
          fill-gray-400"
          />
          Dev Fullstack
        </span>

        <span
          className="
            inline-flex items-center gap-2 px-3 py-1
            rounded-full
            text-green-700 font-medium
            bg-linear-to-r from-green-300/30 via-green-400/40
             to-green-500/50
            backdrop-blur-sm text-xs
  "
        >
          <Dot className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Actuellement dispo
        </span>
      </div>

      {/* MAIN */}

      <div className="w-full flex items-center gap-4 grid-cols-2">
        {/* left */}
        <div className="flex flex-col flex-1 ">
          <h2 className="text-xl font-bold">Je suis, Stephane Mfuni</h2>
          <p className="text-xs text-gray-400">
            Je suis developpeur fullstack pour developpement web et mobile.
          </p>

          <div
            className="w-full flex items-center gap-2
           flex-wrap mt-5"
          >
            {/* HIRE BTN */}
            <button
              className="flex items-center gap-2 bg-black
         p-2 border-black text-xs hover:bg-black/80 duration-300
         ease-in-out transition-all text-gray-100 group rounded-md
         "
            >
              <CircleArrowRight
                size={14}
                className="group-hover:rotate-90 duration-300
         ease-in-out transition-all"
              />
              Engager moi
            </button>

            {/* MAIL ME */}
            <button
              className="flex items-center gap-2 bg-transparent

         p-2 border-black text-xs hover:bg-black/80 duration-300
         ease-in-out transition-all hover:text-gray-100 group 
         rounded-md
         "
            >
              <FileUser
                size={14}
                className="group-hover:rotate-180 duration-300
         ease-in-out transition-all"
              />
              Mon CV
            </button>
          </div>
        </div>

        {/* RIGHT */}
      </div>
    </section>
  );
};

export default AboutMe;
