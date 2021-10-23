import useSpace from "../hooks/useSpace"
import Loading from "./shared/Loading"
import NotConnect from "./shared/NotConnect"
import { useParams, useHistory } from "react-router"
import { useCookies } from 'react-cookie';
import { useState } from "react";
import { FaMapMarkerAlt, FaRegClock, FaRibbon, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom"

const Space = () => {
    let history = useHistory()
    let { spaceCode } = useParams()
    const {data, loading, error} = useSpace(spaceCode)

    const {REACT_APP_BACKEND_END_POINT} = process.env
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])

    const [leaveResponse, setLeaveResponse] = useState(null)
    const [errorLeaving, setErrorLeaving] = useState(null)
    const [leaving, setLeaving] = useState(false)

    let local, state
    if( data ) {
        local = new Date(data.data.startDateTime)

        switch (data.data.state) {
            case 0:
                state = 'Not Started'
                break;
            
            case 1:
                state = 'Started'
                break;

            case 0:
                state = 'Cancelled'
                break;
        
            default:
                state = 'Not Started'
                break;
        }
    }

    const LeaveSpace = () => {
        setLeaveResponse(null)
        setLeaving(true)
        setErrorLeaving(null)

        fetch(`${REACT_APP_BACKEND_END_POINT}/user/leave-spaces`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken['auth-token'],
            },
            body: JSON.stringify({ spaceCode })
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
            setLeaveResponse(res)
            setLeaving(false)
            setErrorLeaving(null)
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('Fetch Aborted')
            }else{
                setLeaveResponse(null)
                setLeaving(false)
                let msg = err.message === 'Failed to fetch' ? 'Couldn\'t connect to server.' : err.message
                setErrorLeaving(msg)
            }
        })
    }

    if( leaveResponse ){
        setTimeout(() => {
            history.replace('/my-spaces')
        }, 500) 
    }

    return(
        <div>
            { loading &&
                <Loading/>
            }
            { !loading && error &&
                <NotConnect message={error.message}/>
            }
            {
                data &&
                <div className="mt-24">
                    <div className="mx-4 md:mx-20 mb-4 md:mb-10 p-4 md:p-10">
                        <h1 className="text-secondary text-center text-3xl md:text-5xl mb-8 font-semibold truncate">{data.data.name}</h1>
                        
                        <div className="md:grid md:grid-cols-4 md:flex md:gap-y-8 md:justify-items-center md:items-center">
                            <div className="col-span-2 space-x-4 mt-4 pb-4">
                                <div className="md:grid md:justify-items-center">
                                    <FaMapMarkerAlt className="text-2xl ml-4"/>
                                </div>
                                <p className="truncate text-xl pt-4">{data.data.venue}</p>
                            </div>
                            <div className="col-span-2 space-x-4 mt-4 pb-4">
                                <div className="md:grid md:justify-items-center">
                                    <FaRegClock className="text-2xl ml-4"/>
                                </div>
                                <p className="tracking-wider md:tracking-widest text-xl pt-4">{local.getDay()}/{local.getMonth() + 1}/{local.getFullYear()} {local.getHours()}:{local.getMinutes() < 10 ? '0'+local.getMinutes() : local.getMinutes()}</p>
                            </div>
                            <div className="col-span-2 space-x-4 mt-4 pb-4">
                                <div className="md:grid md:justify-items-center">
                                    <FaRibbon className="text-2xl ml-4"/>
                                </div>
                                <p className="truncate text-xl pt-4">{state}</p>
                            </div>
                            <div className="col-span-2 space-x-4 mt-4 pb-4">
                                <div className="md:grid md:justify-items-center">
                                    <FaUserFriends className="text-2xl ml-4"/>
                                </div>
                                <p className="truncate text-xl pt-4">{data.data.memberCount} Member(s)</p>
                            </div>
                        </div>
                    </div>

                    <Link to={{
                            pathname: `/update-space`,
                            state: { 
                                venue: data.data.venue,
                                startDateTime: data.data.startDateTime,
                                state: data.data.state,
                                name: data.data.name,
                                spaceCode: data.data.spaceCode
                            }
                        }} 
                    replace>
                        <div className="mb-10 md:mb-8 mx-10 md:mx-48">
                            <button className="rounded tracking-wide text-lg p-4 bg-secondary hover:bg-primary w-full text-white">Update Space</button>
                        </div>
                    </Link>

                    <div className="mb-10 mx-10 md:mx-48">
                        <button onClick={LeaveSpace} className="rounded tracking-wide text-lg p-4 bg-red-500 w-full text-white">Leave Space</button>
                    </div>
                    
                    <div className="mb-10 mx-10 md:mx-48">
                        { leaving &&
                            <div className="flex text-white px-8 py-4 border-0 rounded relative mb-4 bg-primary">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Leaving...
                            </div>
                        }

                        { errorLeaving &&
                            <div className="rounded tracking-wide text-lg p-4 bg-red-500 w-full text-white">{errorLeaving}</div>
                        }

                        { leaveResponse &&
                            <div className="text-white px-8 py-4 border-0 rounded relative mb-4 bg-green-500">You are no longer in this space. Redirecting now...</div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Space