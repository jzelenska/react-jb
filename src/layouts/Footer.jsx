import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">JobBoard</span>. 
          All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Built with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
