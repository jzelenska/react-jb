import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Applications from "./pages/Applications";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <Welcome />, withLayout: false }, // simple welcome page
  { path: "/login", element: <Login />, withLayout: false },
  { path: "/register", element: <Register />, withLayout: false },

  { path: "/student-dashboard", element: <StudentDashboard />, isPrivate: true, withLayout: true },
  { path: "/company-dashboard", element: <CompanyDashboard />, isPrivate: true, withLayout: true },
  { path: "/profile", element: <Profile />, isPrivate: true, withLayout: true },
  { path: "/favorites", element: <Favorites />, isPrivate: true, withLayout: true },
  { path: "/applications", element: <Applications />, isPrivate: true, withLayout: true },
  { path: "/settings", element: <Settings />, isPrivate: true, withLayout: true },

  { path: "*", element: <NotFound />, withLayout: true },
];

export default routes;