// import { Link, useLoaderData } from "react-router-dom";
// import bmw from "/BMW.jpg";
// import ford from "/Ford.jpg";
// import honda from "/Honda.png";
// import marcedes from "/Mercedes-Benz.jpg";
// import tesla from "/Tesla.jpg";
// import toyota from "/toyota.png";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import HomeLastSale from "./HomeLastSale";
import Footer from "../../Components/Footer/Footer";
import Banner from "./Banner";
import HomeCard from "./HomeCard";
import ExpertSays from "./ExpertSays";

const Home = ({params}) => {

  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('https://vehi-verse-server-hfuhwuhew-shariar-islam.vercel.app/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBrands(data)
    })
  },[])

  


  // const products = useLoaderData();
  
    // console.log(brands);
  return (
    <div>
   
      {/* Available Products: {products.length} */}
      <div>

{/* 
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
        </div>  */}
        <Banner></Banner>

        <div className=" max-w-7xl mx-auto flex gap-5 flex-wrap justify-center items-center ">
        {
          
            brands.map(brand => <div className=" drop-shadow-xl" key={brand.id}>
            

              <Link to={`/brand/${brand.brandName}`}>
              <div className=" flex flex-col mx-auto justify-center items-center mb-4 h-72">
            <img className=" w-36 h-36 rounded mx-auto " src={brand.brandImage} alt=""/>
            <p className=" font-bold text-2xl text-sky-600 shadow-gray-600 uppercase">
            {brand.brandName}
            </p>
              </div>
              </Link>
              
        
            
          </div>)
        }
      </div>

        <HomeLastSale></HomeLastSale>
        <ExpertSays></ExpertSays>
        <HomeCard></HomeCard>





        <Footer></Footer>
        
      </div>
    </div>
  );
};

export default Home;
