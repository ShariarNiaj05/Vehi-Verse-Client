import { Link, useLoaderData } from "react-router-dom";
import bmw from "/BMW.jpg";
import ford from "/Ford.jpg";
import honda from "/Honda.png";
import marcedes from "/Mercedes-Benz.jpg";
import tesla from "/Tesla.jpg";
import toyota from "/toyota.png";

const Home = () => {
    const products = useLoaderData();
    console.log(products);
  return (
    <div>
      Home
      <br />
      Available Products: {products.length}
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" flex flex-col justify-center items-center mb-4">
            <img className=" w-1/2 h-full" src={bmw} alt="" />
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600">
              BMW
            </p>
          </div>
          <div className=" flex flex-col  justify-center items-center mb-4">
            <img className=" w-1/2 h-full" src={ford} alt="" />
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600">
              ford
            </p>
          </div>
          <div className=" flex flex-col  justify-center items-center mb-4">
            <img className=" w-1/2 h-full" src={honda} alt="" />
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600">
              honda
            </p>
          </div>
          <div className=" flex flex-col  justify-center items-center mb-4">
            <img className=" w-1/2 h-full" src={marcedes} alt="" />
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600">
              marcedes
            </p>
          </div>
          <div className=" flex flex-col  justify-center items-center mb-4">
            <img className=" w-1/2 h-full" src={tesla} alt="" />
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600">
              tesla
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center mb-4">
            <img className=" w-1/2 h-full" src={toyota} alt="" />
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600">
              toyota
            </p>
          </div>
        </div>

        {products?.map((product) => (
          <div key={product._id}>
            <br />
            <Link to={`/products/${product.brand}`}>
              brand: {product.brand}
            </Link>
            <br />
            {/* {product.image} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
