import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useCookies } from 'react-cookie';
import useFetch from '../../../hooks/useFetch'
import logo from '../../../resources/logo.svg';
import { useState } from 'react';

const MainNavbar = () => {
    const {REACT_APP_BACKEND_END_POINT} = process.env
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    const { data, loading, error } = useFetch(`${REACT_APP_BACKEND_END_POINT}/user`, 'POST', {
        'auth-token': authToken['auth-token']
    }, {})

    const [mobileClicked, setmobileClicked] = useState(false)
    const MobileNavClicked = () => {
        setmobileClicked(!mobileClicked)
    }

    let location = useLocation()

    return ( 
      
        <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* <!-- logo --> */}
                        <div>
                            <Link to="/" className="flex items-center text-xl py-4 px-2 text-gray-700 hover:text-gray-900">
                                <img className="h-10 w-10 mr-1 text-blue-400" src={logo} alt="logo" />
                                <span className="font-bold">N Time</span>
                            </Link>
                        </div>

                        {/* <!-- primary nav --> */}
                        {   ( location.pathname === '/') &&
                            <div className="hidden md:flex items-center space-x-1">
                                <ScrollLink to="about" offset={50} smooth={true} duration={500} className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">About</ScrollLink>
                                <ScrollLink to="how-to-use" offset={50} smooth={true} duration={500} className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">How to Use</ScrollLink>
                                <ScrollLink to="contact" offset={50} smooth={true} duration={500} className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">Contact</ScrollLink>
                            </div>
                        }
                        
                    </div>

                    {/* <!-- secondary nav --> */}
                    {  (loading || (!loading && !data)) && 
                        <div className="hidden md:flex items-center space-x-2">
                            <Link to="/login" className="py-1.5 px-4 ring-2 rounded ring-primary">Login</Link>
                            <Link to="/sign-up" className="py-2 px-4 bg-primary text-white rounded">Signup</Link>
                        </div>
                    }

                    { !loading && data && 
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="py-1.5 px-4">Welcome, {data.data.name}</div>
                            <Link to="/my-spaces" className="py-2 px-4 bg-primary text-white rounded">My Spaces</Link>
                        </div>
                    }

                    {/* <!-- mobile button goes here --> */}
                    <div className="md:hidden flex items-center">
                        <button onClick={MobileNavClicked} className="mobile-menu-button">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>

                </div>
            </div>
            
            {/* <!-- mobile menu --> */}
            <div className={mobileClicked ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                {
                    ( location.pathname === '/') &&
                    <div>
                        <ScrollLink to="about" offset={50} smooth={true} duration={500} className="cursor-pointer block py-2 px-4 text-m hover:bg-gray-200">About</ScrollLink>
                        <ScrollLink to="how-to-use" offset={50} smooth={true} duration={500} className="cursor-pointer block py-2 px-4 text-m hover:bg-gray-200">How to Use</ScrollLink>
                        <ScrollLink to="contact" offset={50} smooth={true} duration={500} className="cursor-pointer block py-2 px-4 text-m hover:bg-gray-200">Contact</ScrollLink>
                    </div>
                }
                {   
                    (loading || (!loading && !data)) && 
                    <div>
                        <Link to="/login" className="block py-2 px-4 text-m hover:bg-gray-200">Login</Link>
                        <Link to="/sign-up" className="block py-2 px-4 text-m hover:bg-gray-200">SignUp</Link>
                    </div>
                }
                {   
                    !loading && data &&
                    <div>
                        <Link to="/my-spaces" className="block py-2 px-4 text-m hover:bg-gray-200">My Spaces</Link>
                        <Link to="/logout" className="block py-2 px-4 text-m hover:bg-gray-200">Logout</Link>
                    </div>
                }
            </div>
        </nav>

    );
}
 
export default MainNavbar;