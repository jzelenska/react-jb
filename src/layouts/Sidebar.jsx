import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  if (!user) return null;

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6 hidden md:block">
      <h2 className="text-lg font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/jobs" className="hover:text-blue-400">
            Browse Jobs
          </Link>
        </li>
        {user.role === "student" && (
          <>
            <li>
              <Link to="/applications" className="hover:text-blue-400">
                My Applications
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-blue-400">
                Favorites
              </Link>
            </li>
          </>
        )}
        {user.role === "company" && (
          <>
            <li>
              <Link to="/company-dashboard" className="hover:text-blue-400">
                Company Dashboard
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-blue-400">
                Settings
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to="/profile" className="hover:text-blue-400">
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

