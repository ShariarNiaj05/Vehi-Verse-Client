// import banner1 from '/advertisement1.jpg'
const Banner = () => {
  return (
    <div>
      <div className=" bg-[url('/banner1.jpg')]  h-[80vh] mb-10 bg-no-repeat bg-cover bg-center  w-full object-fill">
        <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full flex justify-center items-center">
          <div className=" text-center text-white">
                      <h2 className=" text-4xl font-bold">Explore the <span className=" text-sky-500">V</span>ehi<span className=" text-sky-500">V</span>erse <br /> Your Universe of Automobiles</h2>
                      <p>Dive deep into the Vehiverse, a unique realm where automobile enthusiasts and novices come together to explore, learn, and share their passion for cars. <br /> From the vintage classics to the futuristic marvels, we cover it all.</p>
          </div>
        </div>
        {/* <img className=' w-full h-full' src={banner1} alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
