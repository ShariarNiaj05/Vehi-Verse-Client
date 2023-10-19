import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  /*  const [testCartProduct, setTestCartProduct] = useState({})
    const [allProduct, setAllProduct] = useState({}) */

  const loadedProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(loadedProducts);
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
      <div className="font-regular relative mb-4 block w-full rounded-lg bg-sky-500 p-4 text-base leading-5 text-white opacity-100">
        <h2 className=" text-center font-bold">
          Total {cartProducts.length} Products Available on the Cart
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2">
        {cartProducts?.map((cartProduct) => (
          <MyCartCard
            key={cartProduct._id}
            cartProduct={cartProduct}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></MyCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
