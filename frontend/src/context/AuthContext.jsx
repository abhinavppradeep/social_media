import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(() => {
    const storedUser = localStorage.getItem("chat-user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing chat-user from localStorage:", error);
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ AuthUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
