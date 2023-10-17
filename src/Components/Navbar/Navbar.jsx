import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   const linkStyle = ({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? "bg-sky-600 text-white rounded p-2" : " hover:bg-sky-900 hover:text-white rounded p-2";
    
  return (
    <div className=" flex gap-2 flex-col items-center md:flex-row  md:justify-between p-3">
      <div>
        <Link to={'/'}><h2 className=" font-bold text-2xl text-sky-600">
          <span className=" text-black">V</span>ehi
          <span className=" text-black">V</span>erse
        </h2></Link>
      </div>
      <div className=" text-lg font-semibold flex flex-wrap gap-2 ">
        <NavLink className={linkStyle} to={"/"}>Home</NavLink>
        <NavLink className={linkStyle} to={"/products"}>Add Product</NavLink>
        <NavLink className={linkStyle} to={"/mycart"}>My Cart</NavLink>
      </div>
      <div>
        <NavLink to={"/login"}><button
    className="middle none center mr-3 rounded-lg border border-sky-500 py-3 px-6 font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:opacity-75 focus:ring focus:ring-sky-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Login
  </button></NavLink>
  <button
    className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-black transition-all hover:bg-sky-500/10 active:bg-sky-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Dark
  </button>
      </div>
    </div>
  );
};

export default Navbar;
