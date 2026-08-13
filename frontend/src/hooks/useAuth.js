import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx"

export const useAuth = ( ) => useContext(AuthContext)

// Custom hook to easily access login/logout & user data anywhere in the app 