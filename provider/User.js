import { createContext, useContext, useEffect, useState } from "react";
import { postRequest } from "../lib/fetch";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const LOCAL_STORAGE_USER_KEY = "user";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const existingUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    if (existingUser) {
      setUser(existingUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    setUser("");
  };

  const login = async (name) => {
    try {
      const response = await postRequest("/user", { name });
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, response.name);
      setUser(response.name);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
