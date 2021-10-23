import useSpace from "../hooks/useSpace"
import Loading from "./shared/Loading"
import NotConnect from "./shared/NotConnect"
import { useParams } from "react-router"
import { useState } from "react"
import { FaMapMarkerAlt, FaRegClock, FaRibbon, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom"

const Space = () => {
    let { spaceCode } = useParams()
    const {data, loading, error} = useSpace(spaceCode)
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
                        <div className="mb-10 mx-10 md:mx-48">
                            <button className="rounded tracking-wide text-lg p-4 bg-secondary hover:bg-primary w-full text-white">Update Space</button>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Space