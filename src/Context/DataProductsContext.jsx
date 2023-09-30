import React from "react"
import { useContext, createContext } from "react"

export const DataProductsContext = React.createContext()

export const DataProductsProvider = ({ children }) => {

  
  return <DataProductsContext.Provider>{children}</DataProductsContext.Provider>
}

export default DataProductsContext
