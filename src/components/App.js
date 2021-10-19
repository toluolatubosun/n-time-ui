import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Space from './Space'
import MySpaces from './MySpaces'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

import useFetch from '../hooks/useFetch'

import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'

const {REACT_APP_BACKEND_END_POINT} = process.env

function App() {
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    
    const { data, loading, error } = useFetch(`${REACT_APP_BACKEND_END_POINT}/user`, 'POST', {
        'auth-token': authToken['auth-token']
    }, {})

    console.log(data, error)

	return (
		<Router>
            <div className="font-Montserrat">
                <Navbar />

                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route exact path="/sign-up">
                            <SignUp />
                        </Route>

                        <Route exact path="/login">
                            <Login />
                        </Route>

						<Route exact path="/my-spaces">
                            <MySpaces />
                        </Route>

						<Route exact path="/space">
                            <Space />
                        </Route>
                    </Switch>
                </div>

                <Footer />
            </div>
        </Router>
	);
}

export default App;
