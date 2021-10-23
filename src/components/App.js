import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Logout from './Logout'
import Space from './Space'
import MySpaces from './MySpaces'
import JoinSpace from './JoinSpace'
import NotFound from './NotFound'
import UpdateSpace from './UpdateSpace'
import CreateSpace from './CreateSpace'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

import ProtectedRoute from './templates/ProtectedRoute'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    
	return (
		<Router>
            <div className="font-Montserrat flex flex-col h-screen">
                <Navbar />

                <div className="content flex-grow">
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

                        <Route exact path="/logout">
                            <Logout />
                        </Route>

						<ProtectedRoute exact path="/my-spaces" component={MySpaces}>
                        </ProtectedRoute>

                        <ProtectedRoute exact path="/join-space" component={JoinSpace}>
                        </ProtectedRoute>

                        <ProtectedRoute exact path="/create-space" component={CreateSpace}>
                        </ProtectedRoute>

                        <ProtectedRoute exact path="/space/:spaceCode" component={Space}>
                        </ProtectedRoute>

                        <ProtectedRoute exact path="/update-space" component={UpdateSpace}>
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
