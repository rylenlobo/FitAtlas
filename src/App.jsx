import React from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import Store from "./Pages/Store/Store.jsx";
import SignUppage from "./Pages/SignUppage.jsx";
import ExercisesPage from "./Pages/ExercisesPage/ExercisesPage.jsx";
import SingleExercisePage from "./Pages/SingleExercisePage/SingleExercisePage.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import Item from "./Pages/AllItems/Item.jsx";
import UpdateData from "./Pages/UpdateForm/UpdateData.jsx";
import Sucess from "./Pages/sucess/Sucess.jsx";
import Error from "./Pages/error/Error.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const session = sessionStorage.getItem("sessionId");

  if (!session) {
    return <Navigate to="/cart" />;
  }

  return children;
};

const ProtectedRouteAdmin = ({children}) =>{
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user && user.isAdmin) {
    return children
  }

  return <Navigate to="/store"/>;
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
      {
        path: "/items",
        element: (
          <ProtectedRouteAdmin>
            <Item />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateData />,
      },
      {
        path: "/sucess",
        element: (
          <ProtectedRoute>
            <Sucess />
          </ProtectedRoute>
        ),
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

export default App;
