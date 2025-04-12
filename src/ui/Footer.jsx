import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.jpeg"; // Replace with your logo path
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold text-white mb-2"> 
            {/* Replace with actual logo */}
            <img src={logo} className="w-14 h-14 rounded-md border-2 border-violet-500" alt="" />
          </div>
          <p className="text-blue-200">Crafting the next-level of user experience and engagement.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">PRODUCT</h4>
          <ul className="space-y-1 text-blue-200">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-1 text-blue-200">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">TAILWINDCSS</h4>
          <ul className="space-y-1 text-blue-200">
            <li><a href="#" className="hover:text-white">Tailwind Components</a></li>
            <li><a href="#" className="hover:text-white">Tailwind Templates</a></li>
            <li><a href="#" className="hover:text-white">Tails</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">FOLLOW US</h4>
          <div className="flex space-x-4 text-blue-300 text-lg mt-2">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-white text-sm mt-10 pb-6 border-t border-blue-700 pt-6">
        <p>© 2025 Raiser Precision Products  . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
