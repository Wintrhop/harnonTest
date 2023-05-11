"use client";
import { createContext, useContext, useState } from "react";

const contextLogged = createContext({});

export const ContextLoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  return (
    <contextLogged.Provider value={{ logged, setLogged }}>
      {children}
    </contextLogged.Provider>
  );
};

export const useLoggedContext = () => useContext(contextLogged);
