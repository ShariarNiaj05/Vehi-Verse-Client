import { useLoaderData } from "react-router-dom";

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            Home
        <br />

            Available Products: { products.length}
            
        </div>
    );
};

export default Home;