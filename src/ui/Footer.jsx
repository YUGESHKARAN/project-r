import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-500">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold text-gray-800 mb-2"> 
            {/* Replace with actual logo */}
            <span className="inline-block border border-gray-400 px-2 py-1 rounded-md">LM</span>
          </div>
          <p>Crafting the next-level of user experience and engagement.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-2">PRODUCT</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-500">Features</a></li>
            <li><a href="#" className="hover:text-blue-500">Integrations</a></li>
            <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">TAILWINDCSS</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-500">Tailwind Components</a></li>
            <li><a href="#" className="hover:text-blue-500">Tailwind Templates</a></li>
            <li><a href="#" className="hover:text-blue-500">Tails</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">FOLLOW US</h4>
          <div className="flex space-x-4 text-gray-400 text-lg mt-2">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-500" /></a>
            <a href="#"><FaGithub className="hover:text-blue-500" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-10 pb-6 border-t pt-6">
        <p>© 2020 Landmark. All rights reserved.</p>
        <p className="mt-2">Distributed By <a href="#" className="hover:text-blue-500">Themewagon</a></p>
      </div>
    </footer>
  );
};

export default Footer;
