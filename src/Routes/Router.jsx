import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Components/Login/Login";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";

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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/allproducts",
        element: <BrandProducts></BrandProducts>,
        loader: ()=>fetch(`http://localhost:5000/products`)


      },
      {
        path: "updateproducts/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)


      },
     /*  {
        path: "/:id",
        element: <BrandProducts></BrandProducts>,

      }, */
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);

export default router;
