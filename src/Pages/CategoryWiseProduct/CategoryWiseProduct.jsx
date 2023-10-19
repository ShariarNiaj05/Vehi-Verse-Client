import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryWiseProductCard from "./CategoryWiseProductCard";
import HondaAdvertise from "./HondaAdvertise";
import TeslaAdvertise from "./TeslaAdvertise";
import MercedesAdvertise from "./MercedesAdvertise";
import BMWAdvertise from "./BMWAdvertise";
import FordAdvertise from "./FordAdvertise";
import ToyotaAdvertise from "./ToyotaAdvertise";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import advertisement1 from '/advertisement1.jpg'
import advertisement2 from '/advertisement2.jpg'
import advertisement3 from '/advertisement3.jpg'

const CategoryWiseProduct = ({params}) => {
    // const brandProducts = useLoaderData()

    const {brandName} =useParams()
    const [brandProducts, setBrandProducts] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/brand/${brandName}`)
        .then(res=>res.json())
            .then(data => {
                setBrandProducts(data)
               
        })
    }, [brandName])

    


    return (
        <div>
            Brand Available Products: {brandProducts.length} 
            <Swiper 
                className=" max-w-7xl mx-auto"
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className=" h-96" src={advertisement1} alt="" /></SwiperSlide>
      <SwiperSlide><img className=" h-96" src={advertisement2} alt="" /></SwiperSlide>
      <SwiperSlide><img className=" h-96" src={advertisement3} alt="" /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
         

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 mt-5">
                {
                    
                    brandProducts?.map(brandProducts => <CategoryWiseProductCard key={brandProducts._id} brandProducts={brandProducts}></CategoryWiseProductCard>)
                }
            </div>
            
        </div>
    );
};

export default CategoryWiseProduct;