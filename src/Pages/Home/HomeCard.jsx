import advertisement1 from "/advertisement1.jpg";

const HomeCard = () => {
  return (
    <div className=" max-w-5xl mx-auto">
      <div className=" flex flex-wrap content-center justify-center items-center gap-3">
        <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/advertisement1.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              From roar to eco-whisper, find your drive
            </h2>
            
          </div>
        </div>
        <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/advertisement4.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            Expert reviews, impeccable choices
            </h2>
            
          </div>
              </div>
              
              <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/advertisement5.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            Curated cars, tailored for you
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
