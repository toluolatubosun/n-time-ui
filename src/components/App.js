import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Space from './Space'
import MySpaces from './MySpaces'
import NotFound from './NotFound'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

import ProtectedRoute from './templates/ProtectedRoute'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
     
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

						<ProtectedRoute exact path="/my-spaces" component={MySpaces}>
                        </ProtectedRoute>

						<ProtectedRoute exact path="/space" component={Space}>
                        </ProtectedRoute>

                        <Route path="*">
                            <NotFound />
                        </Route>

                    </Switch>
                </div>

                <Footer />
            </div>
        </Router>
	);
}

export default App;
