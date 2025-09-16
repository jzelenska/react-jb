// src/App.jsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ToasterProvider } from "./components/ui/toaster";
import AppRoutes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToasterProvider />
    </AuthProvider>
  );
};

export default App;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import routes from "./routes";
// import { AuthProvider, useAuthContext } from "./context/AuthContext";
// import { ToasterProvider } from "./components/ui/toaster";

// const PrivateRoute = ({ element }) => {
//   const { user } = useAuthContext();
//   return user ? element : <Navigate to="/login" replace />;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//         <Routes>
//           {routes.map(({ path, element }) => (
//             <Route
//               key={path}
//               path={path}
//               element={
//                 path.includes("/dashboard") ||
//                 path === "/profile" ||
//                 path === "/favorites" ||
//                 path === "/settings" ||
//                 path === "/applications"
//                   ? <PrivateRoute element={element} />
//                   : element
//               }
//             />
//           ))}
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//         <ToasterProvider />
//     </AuthProvider>
//   );
// };

// export default App;
