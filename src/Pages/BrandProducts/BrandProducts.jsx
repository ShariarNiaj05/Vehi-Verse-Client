import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const BrandProducts = () => {
    // const brandProducts = useLoaderData()

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(res=>res.json())
            .then(data => {
            console.log(data);
        })
    },[])

    // console.log(brandProducts);
    return (
        <div>
            
        </div>
    );
};

export default BrandProducts;