import React, { useState,useEffect} from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";
 
import axios from "axios";
import axiosInstance from "../../config/axios";

const RecentJob = () => {
 const [jobs, setJobs] = useState([]);

  // Pagination setup
  const jobsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await axiosInstance.get("/landing-jobs");
      setJobs(res.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs");
    }
  };

  fetchJobs();
}, []);

  return (
    <section className="py-16 px-6 md:px-20  ">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A37FF]">
          Recent Jobs
        </h2>
        <p className="text-gray-600 mt-2">
          Discover the latest opportunities and grow your career with Crewminds.
        </p>
      </div>

      {/* Job List */}
      <div className="max-w-6xl mx-auto space-y-6">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between   border-b border-gray-200 rounded-sm   transition-all duration-300 p-6"
          >

            {/* Left Icon */}
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-14 h-14 flex items-center justify-center bg-[#EEF2FF] text-[#1A37FF] rounded-xl text-2xl">
                <FaBuilding />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.role}
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-1">
                  <span>{job.company}</span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#1A37FF]" /> {job.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Info */}
            <div className="flex flex-col md:flex-row gap-4 text-gray-600 text-sm mb-4 md:mb-0">
              <span className="flex items-center gap-2">
                <FaBriefcase className="text-[#1A37FF]" /> {job.experience}
              </span>
              <span className="flex items-center gap-2">
                <FaGraduationCap className="text-[#1A37FF]" />{" "}
                {job.qualification}
              </span>
            </div>

            {/* Right Section */}
<div className="flex items-center gap-4 md:gap-6">
  <span className="border border-[#1A37FF] text-[#1A37FF] px-4 py-1 rounded-full text-sm font-medium">
    {job.type}
  </span>

  <span className="text-gray-500 text-sm">
    {new Date(job.createdAt).toLocaleDateString()}
  </span>

  <a
    href={job.applyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1A37FF] hover:bg-[#1228CC] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all inline-block"
  >
    Apply Now
  </a>
</div>

          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border text-sm font-medium ${
            currentPage === 1
              ? "text-gray-400 border-gray-200 cursor-not-allowed"
              : "text-[#1A37FF] border-[#1A37FF] hover:bg-[#1A37FF] hover:text-white"
          } transition-all`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
              currentPage === index + 1
                ? "bg-[#1A37FF] text-white border-[#1A37FF]"
                : "text-[#1A37FF] border-[#1A37FF] hover:bg-[#1A37FF] hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border text-sm font-medium ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-200 cursor-not-allowed"
              : "text-[#1A37FF] border-[#1A37FF] hover:bg-[#1A37FF] hover:text-white"
          } transition-all`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default RecentJob;
