import { Link, useLocation, Redirect } from 'react-router-dom'
import logo from '../../../resources/logo.svg';
import { useState, useEffect } from 'react';
import useUser from '../../../hooks/useUser';

const AuthNavbar = ({ MobileNavClicked }) => {
    let location = useLocation()
    let navRoute, navName
    
    const { data, loading, error } = useUser()

    if( location.pathname === '/login' ){
        navRoute = '/sign-up'
        navName = 'SignUp'
    }else{
        navRoute = '/login'
        navName = 'Login'
    }

    const [mobileClicked, setmobileClicked] = useState(false)

    if( !loading && data ) return <Redirect to="/my-spaces"/>
    return(
        <nav className="bg-gray-100 fixed inset-x-0 z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* <!-- logo --> */}
                        <div>
                            <Link to="/" className="flex items-center text-xl py-4 px-2 text-gray-700 hover:text-gray-900">
                                <img className="transform -rotate-90 h-10 w-10 mr-1 text-blue-400" src={logo} alt="logo" />
                                <span className="font-bold">N Time</span>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- secondary nav --> */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link to={navRoute} className="py-1.5 px-4 ring-2 rounded ring-primary">{navName}</Link>
                        <Link to="/" className="py-2 px-4 bg-primary text-white rounded">Home</Link>
                    </div>
                    

                    {/* <!-- mobile button goes here --> */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => MobileNavClicked(mobileClicked, setmobileClicked)} className="mobile-menu-button">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* <!-- mobile menu --> */}
            <div className={mobileClicked ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                <Link to="/" className="block py-2 px-4 text-m hover:bg-gray-200">Home</Link>
                <Link to={navRoute} className="block py-2 px-4 text-m hover:bg-gray-200">{navName}</Link>
            </div>
        </nav>
    )
}

export default AuthNavbar