import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import MainNavbar from "./navbars/MainNavbar"
import AuthNavbar from "./navbars/AuthNavbar"
import SpaceNavbar from "./navbars/SpaceNavbar"

const Navbar = () => {
    
    const location = useLocation()

    const[nav, setNav] = useState('MainNavbar')

    useEffect(() => {
        if( ["/login", "/sign-up"].indexOf(location.pathname) > -1 ){
            setNav('AuthNavbar')
        }else if( ["/space", "/my-spaces", "/join-space"].indexOf(location.pathname) > -1 ){
            setNav('SpaceNavbar')
        }else{
            setNav('MainNavbar')
        }
    }, [location])

    switch (nav) {
        case 'MainNavbar':
            return <MainNavbar/>
        
        case 'SpaceNavbar':
            return <SpaceNavbar/>

        case 'AuthNavbar':
            return <AuthNavbar/>

        default:
            return <MainNavbar/>
    }
}

export default Navbar