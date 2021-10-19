import { Link } from 'react-router-dom'
import logo from '../../resources/logo.svg';

const Navbar = () => {
    return ( 
       
    <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">

                <div className="flex space-x-4">
                    {/* <!-- logo --> */}
                    <div>
                        <a href="#" className="flex items-center text-xl py-4 px-2 text-gray-700 hover:text-gray-900">
                            <img className="h-10 w-10 mr-1 text-blue-400" src={logo} alt="logo" />
                            <span className="font-bold">N Time</span>
                        </a>
                    </div>

                    {/* <!-- primary nav --> */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
                        <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">How to Use</a>
                    </div>
                </div>

                {/* <!-- secondary nav --> */}
                <div className="hidden md:flex items-center space-x-2">
                    <a href="" className="py-1.5 px-4 ring-2 rounded ring-primary">Login</a>
                    <a href="" className="py-2 px-4 bg-primary text-white rounded">Signup</a>
                </div>

                {/* <!-- mobile button goes here --> */}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button">
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>

            </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
            <a href="#" className="block py-2 px-4 text-m hover:bg-gray-200">About</a>
            <a href="#" className="block py-2 px-4 text-m hover:bg-gray-200">How to Use</a>
            <a href="#" className="block py-2 px-4 text-m hover:bg-gray-200">Login</a>
            <a href="#" className="block py-2 px-4 text-m hover:bg-gray-200">SignUp</a>
        </div>
    </nav>

        // <div className="navbar">
        //     <Link to="/">Home</Link>
        //     <Link to="/sign-up">SignUp</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/space">Space</Link>
        //     <Link to="/dashboard">Dashboard</Link>
        // </div>
    );
}
 
export default Navbar;