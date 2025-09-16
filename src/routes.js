import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import routes from "./routesConfig";
import Layout from "./layouts/Layout"; // common layout with Header + Footer

// PrivateRoute wrapper
const PrivateRoute = ({ element }) => {
  const { user } = useAuthContext();
  return user ? element : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element, isPrivate, withLayout }) => {
        const wrappedElement = withLayout ? (
          <Layout>{isPrivate ? <PrivateRoute element={element} /> : element}</Layout>
        ) : isPrivate ? (
          <PrivateRoute element={element} />
        ) : (
          element
        );

        return <Route key={path} path={path} element={wrappedElement} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;


// import { Routes, Route } from "react-router-dom";
// import Layout from "./layouts/Layout";
// import Welcome from "./pages/Welcome";
// import MainJobs from "./pages/MainJobs";
// import StudentDashboard from "./pages/StudentDashboard";
// import CompanyDashboard from "./pages/CompanyDashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import Favorites from "./pages/Favorites";
// import Applications from "./pages/Applications";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";

// import ProtectedRoute from "./components/common/ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Standalone Welcome page (no layout) */}
//       <Route path="/" element={<Welcome />} />

//       {/* Routes wrapped in Layout */}
//       <Route
//         element={
//           <Layout>
//             <></>
//           </Layout>
//         }
//       >
//         <Route path="/jobs" element={<MainJobs />} />
//         <Route
//           path="/student-dashboard"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <StudentDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/company-dashboard"
//           element={
//             <ProtectedRoute roles={["company"]}>
//               <CompanyDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/favorites"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <Favorites />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/applications"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <Applications />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <ProtectedRoute>
//               <Settings />
//             </ProtectedRoute>
//           }
//         />
//       </Route>

//       {/* Catch-all */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


// import { Routes, Route } from "react-router-dom";
// import MainJobs from "./pages/MainJobs";
// import StudentDashboard from "./pages/StudentDashboard";
// import CompanyDashboard from "./pages/CompanyDashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import Favorites from "./pages/Favorites";
// import Applications from "./pages/Applications";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";

// import ProtectedRoute from "./components/common/ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<MainJobs />} />
//       <Route
//         path="/student-dashboard"
//         element={
//           <ProtectedRoute roles={["student"]}>
//             <StudentDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/company-dashboard"
//         element={
//           <ProtectedRoute roles={["company"]}>
//             <CompanyDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route
//         path="/profile"
//         element={
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/favorites"
//         element={
//           <ProtectedRoute roles={["student"]}>
//             <Favorites />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/applications"
//         element={
//           <ProtectedRoute roles={["student"]}>
//             <Applications />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/settings"
//         element={
//           <ProtectedRoute>
//             <Settings />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


// src/routes.js
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import StudentDashboard from "./pages/StudentDashboard";
// import CompanyDashboard from "./pages/CompanyDashboard";
// import Profile from "./pages/Profile";
// import Favorites from "./pages/Favorites";
// import Settings from "./pages/Settings";
// import MainJobs from "./pages/MainJobs";
// import Applications from "./pages/Applications";

// const routes = [
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
//   { path: "/dashboard/student", element: <StudentDashboard /> },
//   { path: "/dashboard/company", element: <CompanyDashboard /> },
//   { path: "/profile", element: <Profile /> },
//   { path: "/favorites", element: <Favorites /> },
//   { path: "/settings", element: <Settings /> },
//   { path: "/jobs", element: <MainJobs /> },
//   { path: "/applications", element: <Applications /> },
// ];

// export default routes;
