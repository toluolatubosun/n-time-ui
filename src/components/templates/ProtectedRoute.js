import { Redirect, Route } from "react-router-dom";
import useUser from "../../hooks/useUser";

function ProtectedRoute({ component: Component, ...restOfProps }){

    const { data, loading, error } = useUser()

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