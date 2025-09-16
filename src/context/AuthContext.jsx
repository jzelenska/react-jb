import { createContext, useContext, useState, useEffect } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await authService.getCurrentUser();
        if (data?.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("AuthContext: fetchUser error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    return data;
  };

  const register = async (formData) => {
    const data = await authService.register(formData);
    setUser(data.user);
    return data;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

// to check which one is better
// src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";
// import authService from "../services/authService";

// // Create context
// const AuthContext = createContext();

// // Custom hook for easier usage
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);      // Stores logged-in user data
//   const [loading, setLoading] = useState(true); // Ensures we know auth state before rendering

//   // Check if user is already logged in (on first load)
//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const userData = await authService.getCurrentUser();
//         setUser(userData);
//       } catch {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCurrentUser();
//   }, []);

//   // Login
//   const login = async (credentials) => {
//     const userData = await authService.login(credentials);
//     setUser(userData);
//     return userData;
//   };

//   // Register
//   const register = async (userData) => {
//     const newUser = await authService.register(userData);
//     setUser(newUser);
//     return newUser;
//   };

//   // Logout
//   const logout = async () => {
//     await authService.logout();
//     setUser(null);
//   };

//   // Context value
//   const value = {
//     user,
//     loading,
//     login,
//     register,
//     logout,
//     isAuthenticated: !!user,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };


// another one to check
// import React, { createContext, useState, useEffect } from "react";
// import authService from "../services/authService";

// // Create context
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ Load user from localStorage on app start
//   useEffect(() => {
//     const storedUser = authService.getCurrentUser();
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);

//   // ✅ Register
//   const register = async (userData) => {
//     const data = await authService.register(userData);
//     if (data.success) {
//       localStorage.setItem("user", JSON.stringify(data.user));
//       setUser(data.user);
//     }
//     return data;
//   };

//   // ✅ Login
//   const login = async (userData) => {
//     const data = await authService.login(userData);
//     if (data.success) {
//       localStorage.setItem("user", JSON.stringify(data.user));
//       setUser(data.user);
//     }
//     return data;
//   };

//   // ✅ Logout
//   const logout = async () => {
//     await authService.logout();
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         register,
//         login,
//         logout,
//         isAuthenticated: !!user,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
