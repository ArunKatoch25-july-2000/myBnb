import React from "react";
import { BiGlobe } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className=" border w-screen px-0 py-3 hidden items-center justify-between bg-white fixed bottom-0 z-20 lg:px-12 lg:flex">
        <div className="flex gap-2">
          <span> © 2023 Airbnb, Inc.</span>
          <ul className="flex gap-2">
            <li className="text-base cursor-pointer">
              <span className="text-xs text-gray-400">•</span> Privacy
            </li>
            <li className="text-base cursor-pointer">
              <span className="text-xs text-gray-400">•</span> Terms
            </li>
            <li className="text-base cursor-pointer">
              <span className="text-xs text-gray-400">•</span> Sitemap
            </li>
            <li className="text-base cursor-pointer">
              <span className="text-xs text-gray-400">•</span> Company details
            </li>
            <li className="text-base cursor-pointer">
              <span className="text-xs text-gray-400">•</span> Destinations
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center gap-1 cursor-pointer">
            <BiGlobe /> English(In)
          </span>
          <span className="text-base cursor-pointer">₹ INR</span>
          <span className="text-base cursor-pointer">Support & resources ^</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
