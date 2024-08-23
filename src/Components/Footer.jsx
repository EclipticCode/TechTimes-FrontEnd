import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="dark:bg-navBar pt-4 border-t-4 border-b-2 border-x-2 border-fuchsia-500 rounded-lg pb-8 mt-24">
      <div className="flex justify-between mx-8 pb-8">
        <div className="flex-shrink-0 cursor-pointer">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 italic ml-4">
            <span className="relative px-6 py-3 text-xl transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <Link to={`/`}>Tech Times</Link>
            </span>
          </button>
        </div>
        <div className="flex items-center text-2xl mr-8">
          <a href="https://x.com/" target="_blank">
            <i className="fa-brands fa-x-twitter mx-4"></i>
          </a>
          <a href="https://github.com/EclipticCode/" target="_blank">
            <i className="fa-brands fa-github mx-4"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook mx-4"></i>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
          >
            <i className="fa-brands fa-instagram mx-4"></i>
          </a>
        </div>
      </div>
      <hr className=" border-gray-500" />
      <div className="flex justify-center items-center mx-8 pt-8 text-gray-400">
        <span className="mx-4">© 2024 Tech Times</span>
        <span className="mr-2">Terms |</span>
        <span className="mr-2">Privacy |</span>
        <span className="mr-2">Guidelines </span>
      </div>
    </div>
  );
};

export default Footer;
