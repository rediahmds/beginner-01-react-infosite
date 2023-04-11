import React from 'react';
import logo from '../logo.svg';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 flex justify-between py-4">
      <div className="flex">
        <img src={logo} alt="React Logo" className="w-16 md:w-20" />
        <h2 className="self-center font-bold text-cyan-400 text-sm sm:text-base md:text-xl lg:text-3xl">
          ReactFacts
        </h2>
      </div>
      <h3 className="self-center font-bold text-xs pr-7 text-slate-200 sm:text-base md:text-xl lg:text-3xl ">
        Project 01: React Info site
      </h3>
    </nav>
  );
}
