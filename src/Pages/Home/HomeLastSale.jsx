    import homeCar1 from '/homeCar1.jpg'
    import homeCar2 from '/homeCar2.jpg'
    import homeCar3 from '/homeCar3.jpg'
    import homeCar4 from '/homeCar4.jpg'

const HomeLastSale = () => {
    return (
        <div className=" container mx-auto p-5 mt-10 mb-20 drop-shadow-2xl">
            <h2 className=" text-4xl font-black text-sky-600">Last Cars On SALES</h2>
            <div className='grid grid-cols-4 grid-rows-2 space-x-1 space-y-1'>
                <img className=' col-span-2 row-span-2 h-full' src={homeCar2} alt="" />
                <img className=' col-span-1 row-span-1 h-full'  src={homeCar1} alt="" />
                <img className=' col-span-1 row-span-1 h-full' src={homeCar3} alt="" />
                <img className=' col-span-2 row-span-2 h-full'  src={homeCar4} alt="" />

            </div>

            
        </div>
    );
};

export default HomeLastSale;