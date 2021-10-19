import { Redirect, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';
import useFetch from '../../hooks/useFetch'

function ProtectedRoute({ component: Component, ...restOfProps }){

    const {REACT_APP_BACKEND_END_POINT} = process.env
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    const { data, loading, error } = useFetch(`${REACT_APP_BACKEND_END_POINT}/user`, 'POST', {
        'auth-token': authToken['auth-token']
    }, {})

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                { 
                    if( !loading ){
                        return data ? <Component {...props} /> : <Redirect to='login'/>
                    }else{
                        return <div>Loading...</div>
                    } 
                }
                
            }
        />
    );
}

export default ProtectedRoute;