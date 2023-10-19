import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";

const MyCart = () => {

   /*  const [testCartProduct, setTestCartProduct] = useState({})
    const [allProduct, setAllProduct] = useState({}) */

    const loadedProducts = useLoaderData()
    const [cartProducts, setCartProducts] = useState(loadedProducts)
    console.log(cartProducts);



/*     useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllProduct(data)
            // const filter = data.filter(singleData => setAllProduct )

        })
    }, []) */
    
    // console.log(allProduct);

    return (
        <div>
            MyCart: {cartProducts.length}


            <div className=" grid grid-cols-1 md:grid-cols-2">
            {
                cartProducts?.map(cartProduct => <MyCartCard key={cartProduct._id} cartProduct={cartProduct} cartProducts={cartProducts} setCartProducts={setCartProducts}></MyCartCard>)
            }
            </div>
        </div>
    );
};

export default MyCart;