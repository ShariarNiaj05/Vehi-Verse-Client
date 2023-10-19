import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryWiseProductCard from "./CategoryWiseProductCard";

const CategoryWiseProduct = ({params}) => {
    // const brandProducts = useLoaderData()

    const {brandName} =useParams()
    const [brandProducts, setBrandProducts] = useState([])

    // console.log(brandProducts);


    useEffect(() => {
        fetch(`http://localhost:5000/brand/${brandName}`)
        .then(res=>res.json())
            .then(data => {
                setBrandProducts(data)
               
        })
    }, [brandName])
    console.log(brandProducts);
    return (
        <div>
            Brand Available Products: {brandProducts.length} 

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
                {
                    brandProducts?.map(brandProducts => <CategoryWiseProductCard key={brandProducts._id} brandProducts={brandProducts}></CategoryWiseProductCard>)
                }
            </div>
            
        </div>
    );
};

export default CategoryWiseProduct;