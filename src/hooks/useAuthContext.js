// File: /src/hooks/useAuthContext.js
import { useAuth } from "./useAuth";

/**
 * Cleaner alias for useAuth
 */
export const useAuthContext = () => useAuth();
 


// Reference: /src/context/AuthContext.jsx

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useAuthContext must be used inside an AuthProvider");
//   }

//   return context;
// };

