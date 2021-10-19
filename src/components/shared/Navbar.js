import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import MainNavbar from "./navbars/MainNavbar"
import AuthNavbar from "./navbars/AuthNavbar"
import SpaceNavbar from "./navbars/SpaceNavbar"

const Navbar = () => {
    const location = useLocation()

    const[nav, setNav] = useState('MainNavbar')

    useEffect(() => {
        if( location.pathname == "/login" ||  location.pathname == "/sign-up" ){
            setNav('AuthNavbar')
        }else if( location.pathname == "/space" ||  location.pathname == "/my-spaces" ){
            setNav('SpaceNavbar')
        }else{
            setNav('MainNavbar')
        }
    }, [location])

    switch (nav) {
        case 'MainNavbar':
            return <MainNavbar/>
            break;
        
        case 'SpaceNavbar':
            return <SpaceNavbar/>
            break;

        case 'AuthNavbar':
            return <AuthNavbar/>
            break;

        default:
            return <MainNavbar/>
            break;
    }
}

export default Navbar