import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import logo from '../resources/logo.svg'

const SignUp = () => {
    const {REACT_APP_BACKEND_END_POINT} = process.env
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    let history = useHistory()

    // form inputs
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // states
    const [data, setData] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [formLoading, setFormLoading] = useState(false)
    
    // Submit form to db
    const HandleSubmit = (e) => {
        e.preventDefault();
        setData(null)
        setErrorMessage(null)
        setFormLoading(true)

        const fromBody = {
            name,
            email,
            password
        }

        fetch(`${REACT_APP_BACKEND_END_POINT}/auth/sign-up`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fromBody)
            })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                if( res.error ){
                    throw res
                }
                return res
            })
            .then((res) => {
                setData(res)
                setFormLoading(false)
                setErrorMessage(null)
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted')
                }else{
                    setData(null)
                    setFormLoading(false)
                    let msg = err.message === 'Failed to fetch' ? 'Couldn\'t connect to server.' : err.message
                    setErrorMessage(msg)
                }
            })
    }

    if( data ){
        setAuthToken('auth-token', data.token)
        setTimeout(() => {
            history.go('/my-spaces')
        }, 500) 
    }

    return(
        <div className="min-h-screen flex flex-col justify-center py-36 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-28 w-40" src={logo} alt="logo" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary">Create your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                Already have an account?
                <Link to="/login" className="font-medium text-secondary hover:text-primary">Login</Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
                    <form id="loginForm" className="mb-0 space-y-6" method="POST" onSubmit={HandleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1">
                                <input id="name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    name="name" type="text" autoComplete="name" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <div className="mt-1">
                                <input id="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    name="email" type="email" autoComplete="email" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input id="password" 
                                    minLength={6}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password" type="password" autoComplete="current-password" required />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Sign Up</button>
                        </div>

                        { errorMessage &&
                            <div className="text-white px-8 py-4 border-0 rounded relative mb-4 bg-red-500">{errorMessage}</div>
                        }

                        { data &&
                            <div className="text-white px-8 py-4 border-0 rounded relative mb-4 bg-green-500">Success. Logging In now...</div>
                        }

                        { formLoading &&
                            <div className="flex text-white px-8 py-4 border-0 rounded relative mb-4 bg-primary">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Loading...
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default SignUp
