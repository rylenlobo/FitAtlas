import React, { useState } from 'react';
 
export const GlobalStateContext = React.createContext();
 
export const GlobalStateProvider = ({ children }) => {
  const [muscle, setMuscle] = useState("");
 
  return (
    <GlobalStateContext.Provider value={{muscle, setMuscle}}>
      {children}
    </GlobalStateContext.Provider>
  );
};