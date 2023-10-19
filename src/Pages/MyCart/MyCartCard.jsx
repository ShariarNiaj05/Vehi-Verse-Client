import { useState } from "react";
import Swal from "sweetalert2";

const MyCartCard = ({ cartProduct, cartProducts, setCartProducts }) => {
    const { image, name, brand, type, price, description, rating, _id } = cartProduct;

    // const [cartProducts, setCartProducts] = useState({})
    

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
            fetch(`http://localhost:5000/mycart/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  const remainingProducts = cartProducts.filter(
                    (product) => product._id !== _id
                  );
                  setCartProducts(remainingProducts);
                }
              });
          }
        });
      };
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
          <img src={image} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text uppercase">
            {brand} / {type}
          </p>
              </div>
              

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

export default MyCartCard;
