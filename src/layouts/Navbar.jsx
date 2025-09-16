import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import PrimaryButton from "../common/buttons/PrimaryButton";
import SecondaryButton from "../common/buttons/SecondaryButton";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            JobBoard
          </Link>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>
            {user?.role === "student" && (
              <Link to="/applications" className="hover:text-blue-600">
                My Applications
              </Link>
            )}
            {user?.role === "company" && (
              <Link to="/company-dashboard" className="hover:text-blue-600">
                Dashboard
              </Link>
            )}
          </div>

          {/* Right side: Auth buttons or profile */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login">
                  <SecondaryButton>Login</SecondaryButton>
                </Link>
                <Link to="/register">
                  <PrimaryButton>Register</PrimaryButton>
                </Link>
              </>
            ) : (
              <>
                <span className="hidden sm:inline text-gray-700">
                  Hi, {user.fullName || user.email}
                </span>
                <PrimaryButton onClick={logout}>Logout</PrimaryButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

