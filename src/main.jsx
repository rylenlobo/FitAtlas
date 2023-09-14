import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { GlobalStateProvider } from "./Context/ExercisesContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>
)
