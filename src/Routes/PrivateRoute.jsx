import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import loadingPic from '/loading.jpg'



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    
    if (loading) {
        return <img className=" flex justify-center items-center text-center mx-auto min-h-screen" src={loadingPic} alt="" />
    }

    if (user) {
        return children
    }


    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
};

export default PrivateRoute;