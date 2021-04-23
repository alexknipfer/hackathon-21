import { createContext, useContext, useEffect, useState } from "react";

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

  const login = async (username) => {
    try {
      const response = await fetch(
        "https://hackathon-ascendum.ue.r.appspot.com/v1/api/user",
        {
          headers: new Headers({ "Content-Type": "application/json" }),
          method: "POST",
          body: JSON.stringify({ name: username }),
        }
      );
      const res = await response.json();
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, res.name);
      setUser(res.name);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
