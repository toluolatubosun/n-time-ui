import not_found from '../resources/not_found.svg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(   
        <div className="mt-10 md:mt-20 flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
            <h1 className="text-7xl font-bold text-primary pb-2">404</h1>
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-2">This Page Does Not Exist</h2>
            <p className="text-base text-gray-600 py-2 text-center">Sorry! We could not find you the page you are looking for. Please check URL in address bar and try again.</p>

            <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 mt-4 mb-12 w-full">
                <Link to="/" className="p-4 text-base text-center text-white md:w-auto md:mb-0 mb-4 w-full bg-secondary border rounded-md hover:bg-primary">Get back to Homepage</Link>
            </div>

            <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
                <img src={not_found} alt="girl in an underconstruction site" />
            </div>

            <div className="md:hidden grid place-content-center">
                <img src={not_found} alt="girl in an underconstruction site" />
            </div>
        </div>
    )
}

export default NotFound