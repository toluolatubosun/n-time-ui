import server_down from '../../resources/server_down.svg'
import { useHistory } from 'react-router'

const NotConnect = () => {
    const history = useHistory()
   
    return(
        <div className="mt-10 md:mt-20 flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
            <p className="text-2xl text-center font-semibold p-3">Could not Connect to Server</p>

            <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 mt-4 mb-12 w-full">
                <button onClick={() => history.go(0)} className="p-4 text-base text-center text-white md:w-auto md:mb-0 mb-4 w-full bg-secondary border rounded-md hover:bg-primary">Let's Reload this page</button>
            </div>

            <div className="grid md:grid place-content-center md:w-2/4">
                <img src={server_down} alt="girl in an underconstruction site" />
            </div>
        </div>
    )
}

export default NotConnect