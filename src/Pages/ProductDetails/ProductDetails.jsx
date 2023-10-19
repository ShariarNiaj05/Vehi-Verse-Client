import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const productDetails = useLoaderData();

  const { brand, description, image, name, price, rating, type, _id } =
    productDetails;

  // const { id } = useParams()
  const handleAddToCart = (_id) => {
    console.log(_id);
    
  }
 
  return (
    <div className="mx-auto max-w-screen-md py-12">
      <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <img
          alt="nature"
          className="h-[32rem] w-full object-cover object-center"
          src={image}
        />
      </div>

      <div className=" flex justify-between p-3">
        <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-black">
          <div className="mt-px">Rating {rating}</div>
        </div>
        <div>
          <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
            <div className="mt-px">Price: ${price}</div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Details About {name}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Description: {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={()=> handleAddToCart(_id)}
            className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
