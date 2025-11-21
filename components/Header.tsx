"use client";
import { HomeLinks } from "@/utils/data";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" px-2 py-2 flex items-center w-sm fixed z-50">
      <div
        className="border shadow h-full flex items-center 
        justify-between bg-white
      rounded-md p-4 w-full border-white
      "
      >
        {/* Icons and Links */}
        <div
          className="flex items-center gap-4 duration-300
         ease-in-out transition-all"
        >
          {HomeLinks.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={link.value}
                className="hover:text-gray-900 "
              >
                <link.icon size={24} />
              </Link>
            );
          })}
        </div>

        {/* contact */}
        <button
          className="flex items-center gap-2 bg-black
         p-2 border-black text-sm hover:bg-black/80 duration-300
         ease-in-out transition-all text-gray-100 group rounded-md
         "
        >
          <CircleArrowRight
            size={18}
            className="group-hover:rotate-90 duration-300
         ease-in-out transition-all"
          />
          contactez-moi
        </button>
      </div>
    </header>
  );
};

export default Header;
