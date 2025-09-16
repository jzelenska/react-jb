import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.gif" alt="JobBoard Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-blue-600">JobBoard</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/student-dashboard" className="hover:text-blue-600 transition">
            Students
          </Link>
          <Link to="/company-dashboard" className="hover:text-blue-600 transition">
            Companies
          </Link>
          <Link to="/jobs" className="hover:text-blue-600 transition">
            Jobs
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-600 transition">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
