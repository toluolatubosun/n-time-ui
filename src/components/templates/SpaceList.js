import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaRegClock, FaRibbon } from "react-icons/fa";
import DateFormater from '../../utils/DateFormater';

const SpaceList = ({ spaces }) => {
    const spaceItems = spaces.map((space) => {
        let state = ''
        switch (space.space.state) {
            case 0:
                state = 'Not Started'
                break;
            
            case 1:
                state = 'Started'
                break;

            case 2:
                state = 'Cancelled'
                break;
        
            default:
                state = 'Not Started'
                break;
        }
        
        return (
            <div key={space.space.spaceCode} >
                <Link to={`/space/${space.space.spaceCode}`}>
                    <div className="shadow rounded bg-gradient-to-t from-gray-100 to-white mx-4 md:mx-20 mb-4 md:mb-10 p-4 md:p-10">
                        <h1 className="text-secondary text-2xl md:text-3xl font-semibold truncate">{space.space.name}</h1>
                        <div className="flex md:text-lg items-center space-x-4 mt-4">
                            <FaMapMarkerAlt/>
                            <p className="truncate ">{space.space.venue}</p>
                        </div>
                        <div className="flex  md:text-lg items-center space-x-4 mt-4">
                            <FaRegClock/>
                            <p className="tracking-wider md:tracking-widest">{DateFormater(space.space.startDateTime)}</p>
                        </div>
                        <div className="flex  md:text-lg items-center space-x-4 mt-4">
                            <FaRibbon/>
                            <p>{state}</p>
                        </div>
                    </div>
                </Link>
            </div>
            
        )
    });

    return(
        <div>
            {spaceItems}
        </div>
    )
}

export default SpaceList