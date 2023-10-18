import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBrandProducts from "./AllBrandProducts";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  // const brandProducts = useLoaderData()
  /*     const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(res=>res.json())
            .then(data => {
                console.log(data);
                setCategoryProducts(data)
                
                
                
        })
    }, []) */

  // console.log(categoryProducts);

  // console.log(brandProducts);
  return (
    <div>
      All Brand available products: {products.length}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <AllBrandProducts
            key={product._id}
                product={product}
                products={products}
                setProducts={setProducts}
          ></AllBrandProducts>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
