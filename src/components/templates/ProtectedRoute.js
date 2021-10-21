import { Redirect, Route } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useState } from 'react'
import NotConnect from "../shared/NotConnect";

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
                            if( error.message === 'Failed to fetch') return <NotConnect/>
                            return <Redirect to='login'/>
                        } 
                    }else{
                        return <div>Loading...</div>
                    } 
                }
                
            }
        />
    );
}

export default ProtectedRoute;