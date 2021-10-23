import { Redirect, Route } from "react-router-dom";
import useUser from "../../hooks/useUser";
import NotConnect from "../shared/NotConnect";
import Loading from "../shared/Loading";

function ProtectedRoute({ component: Component, ...restOfProps }){
    const { data, loading, error } = useUser()

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                { 
                    if( !loading ){
                        if( data ) return <Component {...props} />
                        if( error ) {
                            if( error.message === 'Failed to fetch') return <NotConnect message={'No Internet Connection'}/>
                            return <Redirect to='/login'/>
                        } 
                    }else{
                        return <Loading/>
                    } 
                }
                
            }
        />
    );
}

export default ProtectedRoute;