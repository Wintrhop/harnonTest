'use client'
import { createContext, useState } from "react";

const contextCreated = createContext();

export const ContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  return (
    <contextCreated.Provider value={logged}>
      {children}
    </contextCreated.Provider>
  );
};

export default contextCreated;
