import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-center">
      <img
        src="/logo.gif"
        alt="JobBoard Logo"
        className="h-40 w-auto animate-bounce drop-shadow-lg"
      />
      <h1 className="text-5xl font-extrabold text-blue-700 mt-8">
        Welcome to JobBoard
      </h1>
      <p className="text-lg text-gray-700 mt-4 max-w-md">
        Your gateway to student and company opportunities. Start your journey today.
      </p>

      <div className="mt-8 flex space-x-4">
        <Link
          to="/jobs"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Browse Jobs
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

