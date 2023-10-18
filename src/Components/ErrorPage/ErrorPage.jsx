import Navbar from '../Navbar/Navbar';
import errorPage from '/errorpage.png'
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>

        <img className=' mx-auto mt-10' src={errorPage} alt="" />
            
            
        </div>
    );
};

export default ErrorPage;