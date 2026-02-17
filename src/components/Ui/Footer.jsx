import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Crewminds</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Empowering teams and talents through innovative job solutions.  
            Find your dream role with Crewminds Job Portal.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Jobs</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300 text-sm">
        <p>
          © {new Date().getFullYear()} All rights reserved.  
          <span className="block md:inline"> Designed & Developed by{" "}
            <span className="text-[#1A37FF] font-semibold">Crewminds</span>.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
