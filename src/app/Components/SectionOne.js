/** @format */

import React from "react";

export default function SectionOne() {
  return (
    <div className="hero h-auto p-0  text-center lg:text-start overflow-x-hidden">
      <div className="hero-content flex-col px-0  lg:flex-row-reverse">
        <img
          src="/images/illustration-working.svg"
          className="w-auto relative left-0 lg:left-[10rem] "
        />
        <div className="">
          <h1 className="text-3xl lg:text-4xl font-bold">
            More than just shorter links
          </h1>
          <p className="py-6">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn rounded-[1rem] bg-primary-cyan hover:bg-primary-cyan-hover text-base-100 border-none btn btn-xs  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
