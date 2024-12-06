/** @format */

import React from "react";

export default function Header({ isMobile }) {
  return (
    <header className="px-[1rem] lg:px-[6rem] flex items-center overflow-x-hidden">
      <h1 className="font-bold text-xl lg:text-2xl  text-neutral-very-dark-violet">
        Shortly
      </h1>
      <div className="navbar p-0 flex flex-row justify-center lg:justify-between w-full bg-transparent">
        {!isMobile && (
          <ul className="menu menu-horizontal text-gray-400">
            <li className="hover:text-neutral-very-dark-violet ">
              <a className="hover:bg-transparent">Features</a>
            </li>
            <li className="hover:text-neutral-very-dark-violet">
              <a className="hover:bg-transparent">Pricing</a>
            </li>
            <li className="hover:text-neutral-very-dark-violet">
              <a className="hover:bg-transparent">Resources</a>
            </li>
          </ul>
        )}
        <div className="">
          <button className=" shadow-none btn btn-sm bg-transparent text-gray-400 hover:bg-transparent hover:text-neutral-very-dark-violet border-none ">
            Login
          </button>
          <button className="rounded-[1rem] bg-primary-cyan hover:bg-primary-cyan-hover text-base-100 border-none btn btn-xs  ">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
