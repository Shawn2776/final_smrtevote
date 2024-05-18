import React from "react";

const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto max-w-7xl sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl drop-shadow-lg">
            <span className="text-red-500">SMRT</span>
            <span className="text-white">e</span>
            <span className="text-sky-300">Vote</span>
          </h1>
          <p className="mt-6 mb-8 text-lg text-white sm:mb-12">
            Secure, cloud-based voting platform
            <br className="hidden text-white md:inline lg:hidden" />
            for education, business and individuals.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div className="flex flex-col">
              <a
                rel="noopener noreferrer"
                href="/auth/register"
                className="px-8 py-3 text-lg font-semibold text-black bg-white rounded shadow-md shadow-black"
              >
                Get Started
              </a>
              <p className="text-sm text-white">*Free for up to 5 voters</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/Business_SVG.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
