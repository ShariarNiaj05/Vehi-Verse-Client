import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Components/Login/Login";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";
import Register from "../Components/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error Page Here</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/allproducts",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/updateproducts/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
