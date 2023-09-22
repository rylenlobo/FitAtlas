import React from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage.jsx"
import Home from "./Pages/Home/Home.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx"
import Store from "./Pages/Store/Store.jsx"
import SignUppage from "./Pages/SignUppage.jsx"
import ExercisesPage from "./Pages/ExercisesPage/ExercisesPage.jsx"
import SingleExercisePage from "./Pages/SingleExercisePage/SingleExercisePage.jsx"
import CartPage from "./Pages/CartPage/CartPage.jsx"

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Store />,
      },
      {
        path: "/store/:category/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:category",
        element: <ProductsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUppage />,
      },
      {
        path: "/exercises",
        element: <ExercisesPage />,
      },
      {
        path: "/exercises/:id",
        element: <SingleExercisePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
])

export default App
