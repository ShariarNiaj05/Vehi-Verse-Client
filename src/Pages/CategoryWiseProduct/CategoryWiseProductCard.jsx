import { Link } from "react-router-dom";
import ToyotaAdvertise from "./ToyotaAdvertise";
import FordAdvertise from "./FordAdvertise";
import BMWAdvertise from "./BMWAdvertise";
import MercedesAdvertise from "./MercedesAdvertise";
import TeslaAdvertise from "./TeslaAdvertise";
import HondaAdvertise from "./HondaAdvertise";

const CategoryWiseProductCard = ({ brandProducts }) => {
  console.log(brandProducts.brand);
  const { _id, description, image, name, price, rating, type, brand } = brandProducts;

  return (
    <div>
      <div className="relative flex max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={image} alt="image" className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <div className=" flex justify-between">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-sky-500 uppercase">
            Brand: {brand}
            </h6>
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-sky-500 uppercase">
            Type: {type}
          </h6>
          </div>
          <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
            <div className="mt-px">Rating: { rating}</div>
  </div>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Description: {description}
          </p>
          
          <button
            className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:bg-sky-500/10 active:bg-sky-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
          >
            Price: ${price}
          </button>

          <Link to={`/updateproducts/${_id}`}>
            <button
              className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Update
            </button>
          </Link>

          <Link to={`/products/${_id}`} className="inline-block">
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-sky-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-sky-500/10 active:bg-sky-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProductCard;
