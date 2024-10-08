import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: "/ketham_portfolio", label: "Home", icon: <AiOutlineHome /> },
    { href: "#about-section", label: "About Me", icon: <CgProfile />, onClick: () => scrollToSection('about-section') },
    { href: "#project-section", label: "Projects", icon: <AiOutlineFundProjectionScreen />, onClick: () => scrollToSection('project-section') },
    { href: "#experience-section", label: "Experience", icon: <IoNewspaper />, onClick: () => scrollToSection('experience-section') },
    { href: "#resume-section", label: "Resume", icon: <IoNewspaper />, onClick: () => scrollToSection('resume-section') },
    { href: "#contact-section", label: "Contact", className: "bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded", onClick: () => scrollToSection('contact-section') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-darkblue-900">
      <div className="mx-auto flex justify-between items-center p-4 bg-white bg-opacity-10">
        <div className="text-2xl font-bold">
          <a href='/ketham_portfolio'><span className="block sm:hidden">KS</span><span className="hidden sm:block">Ketham Sanjay</span></a>
        </div>
        <div className="block sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`fixed top-0 left-0 h-screen w-full bg-darkblue-900 p-6 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:relative sm:w-auto sm:h-auto`}>
          <div className="flex justify-end sm:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <FaTimes size={30} />
            </button>
          </div>
          <ul className="flex flex-col items-center sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 gap-4 sm:gap-8">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1)); 
                    }
                    setIsMenuOpen(false); 
                  }}
                  className={`flex items-center gap-2 text-lg sm:text-xl ${link.className || ''} ${isMenuOpen ? 'text-white' : 'text-gray-300'}`}
                >
                  {link.icon} {link.label}
                  {link.className ? null : (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      layoutId="underline"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
