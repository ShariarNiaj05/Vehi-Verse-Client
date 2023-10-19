import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CategoryWiseProduct = ({params}) => {
    // const brandProducts = useLoaderData()

    const [brandProducts, setBrandProducts] = useState([])

    // console.log(brandProducts);


    useEffect(() => {
        fetch(`http://localhost:5000/brand/Mercedes`)
        .then(res=>res.json())
            .then(data => {
                setBrandProducts(data)
               
        })
    }, [])
    console.log(brandProducts);
    return (
        <div>
            Brand Available Products: {brandProducts.length} 

            <div>
                {
                    brandProducts?.map(brandProducts => <div>
                        {brandProducts.name}
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default CategoryWiseProduct;