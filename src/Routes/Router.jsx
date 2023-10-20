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
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CategoryWiseProduct from "../Pages/CategoryWiseProduct/CategoryWiseProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/brand/:brandName",
        element: <CategoryWiseProduct></CategoryWiseProduct>,
        loader: ({params}) => fetch(`https://vehi-verse-server-hfuhwuhew-shariar-islam.vercel.app/brand/${params.brandName}`)
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
        loader: () => fetch(`https://vehi-verse-server-hfuhwuhew-shariar-islam.vercel.app/products`),
      },
      {
        path: "/updateproducts/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://vehi-verse-server-hfuhwuhew-shariar-islam.vercel.app/products/${params.id}`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://vehi-verse-server-hfuhwuhew-shariar-islam.vercel.app/products/${params.id}`),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://vehi-verse-server-hfuhwuhew-shariar-islam.vercel.app/mycart`),
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
