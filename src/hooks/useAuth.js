// File: /src/hooks/useAuth.js
import { useContext } from "react";
import { useAuthContext } from "../context/AuthContext";

/**
 * Legacy direct hook.
 * For new code, prefer: useAuthContext (alias of this).
 */
export const useAuth = () => {
  const context = useContext(useAuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


// import { useState, useEffect } from "react";
// export function useAuth(){
   // thin wrapper in case you later expand
//   return {}; 
// }