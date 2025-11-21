import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-between gap-4">
        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4 justify-between w-full">
          <span className="font-medium text-gray-700">Me suivre </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/silverstone217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="www.linkedin.com/in/stéphane-giggs-mfuni-32750a381"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/steph_jay217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://wa.me/+2431817338"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Droits réservés */}
        <div className="text-gray-500 text-sm text-center md:text-right mt-4">
          &copy; {year} Stéphane Mfuni. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
