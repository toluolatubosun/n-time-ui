import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom'

const Logout = () => {
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    removeAuthToken('auth-token')
    
    return <Redirect to="/"/>
}

export default Logout