import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllBrandProducts = ({ product, products, setProducts }) => {
  const { image, name, brand, type, price, description, rating, _id } = product;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingProducts = products.filter(
                (product) => product._id !== _id
              );
              setProducts(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="relative text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mt-10">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="img-blur-shadow"
          layout="fill"
        />
      </div>
      <button
        className="middle none center rounded-lg border border-sky-500 py-3 px-6 font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:opacity-75 focus:ring focus:ring-sky-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2"
        data-ripple-dark="true"
      >
        {brand}
      </button>
      <button
        className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:bg-sky-500/10 active:bg-sky-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
      >
        {type}
      </button>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Name: {name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Description: {description}
        </p>
      </div>
      <button
        className="middle none center rounded-lg border border-sky-500 py-3 px-6 font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:opacity-75 focus:ring focus:ring-sky-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2"
        data-ripple-dark="true"
      >
        {price}
      </button>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        Rating: {rating}
      </p>
      <div className="p-6 pt-0 flex gap-2">
        <Link to={`/products/${_id}`}>
          {" "}
          <button
            className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Details
          </button>
        </Link>
        <Link to={`/updateproducts/${_id}`}>
          <button
            className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:bg-sky-500/10 active:bg-sky-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AllBrandProducts;
