import React from "react";
import heroImage from "../../assets/h1_hero.jpg";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-right bg-no-repeat min-h-[90vh] flex items-center px-6 md:px-20"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay gradient (soft fade for better text contrast) */}
      <div className="absolut "></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Find the <span className="text-[#1A37FF]">perfect job</span> that fits your passion.
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Explore thousands of startup opportunities and take the next step in your career.
        </p> 
{/* New Search Bar Design */}
<div className="mt-12 bg-gray-100/90 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8 max-w-6xl">
  <div className="flex flex-col md:flex-row items-center gap-6">

    {/* Job Title */}
    <div className="flex-1 w-full">
      <input
        type="text"
        placeholder="Job Title, Keywords, or Phrase"
        className="w-full bg-transparent border-b-2 border-blue-500 focus:outline-none py-3 text-gray-700 placeholder-gray-500"
      />
    </div>

    {/* Location */}
    <div className="flex-1 w-full">
      <input
        type="text"
        placeholder="City, State or ZIP"
        className="w-full bg-transparent border-b-2 border-blue-500 focus:outline-none py-3 text-gray-700 placeholder-gray-500"
      />
    </div>

    {/* Sector Dropdown */}
    <div className="flex-1 w-full">
      <select
        className="w-full bg-transparent border-b-2 border-blue-500 focus:outline-none py-3 text-gray-700"
      >
        <option>Select Sector</option>
        <option>IT & Software</option>
        <option>Marketing</option>
        <option>Finance</option>
        <option>Healthcare</option>
      </select>
    </div>

    {/* Button */}
    <div className="w-full md:w-auto">
      <button className="bg-[#1A37FF] hover:bg-[#1228CC] text-white font-semibold px-10 py-3 rounded-lg transition-all w-full md:w-auto">
        Find Job
      </button>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default Home;
