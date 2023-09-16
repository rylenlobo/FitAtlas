import React, { useState } from 'react';
 
export const GlobalStateContext = React.createContext();
 
export const GlobalStateProvider = ({ children }) => {
  const [muscle, setMuscle] = useState("");
  const [item,setItems] = useState("global cart state")
 
  return (
    <GlobalStateContext.Provider value={{muscle, setMuscle,item,setItems}}>
      {children}
    </GlobalStateContext.Provider>
  );
};