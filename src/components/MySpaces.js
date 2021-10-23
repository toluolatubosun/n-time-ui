import useMySpaces from '../hooks/useMySpaces'
import taken from '../resources/taken.svg'
import { Link } from 'react-router-dom'
import SpaceList from './templates/SpaceList'
import Loading from './shared/Loading'
import NotConnect from './shared/NotConnect'

const MySpaces = () => {
    const { data, loading, error } = useMySpaces()
    
    return(
        <div className="mt-20 mb-20">
            { loading &&
                <Loading/>
            }
            { !loading && error &&
                <NotConnect message={error.message}/>
            }
            { !loading && data && ( data.data.length === 0) &&
                <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
                    <p className="text-2xl text-center text-secondary font-semibold p-3">You are not in any space</p>
                    <p className="text-lg text-center">...maybe they were stolen by aliens</p>
        
                    <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 mt-4 mb-8 w-full">
                        <Link to="/create-space" className="p-4 text-base text-center text-white md:w-auto md:mb-0 mb-4 w-full bg-secondary border rounded-md hover:bg-primary">Create a Space</Link>
                    </div>
        
                    <div className="grid md:grid place-content-center md:w-2/3">
                        <img src={taken} alt="girl in an underconstruction site" />
                    </div>
                </div>
            }
            { !loading && data && ( data.data.length != 0) &&
                <div className="mt-28">
                    <h1 className="text-center text-4xl font-bold text-secondary tracking-wider mb-4">Your Spaces</h1>
                    <SpaceList spaces={data.data} />
                </div>
            }
        </div>
       
    )
}

export default MySpaces