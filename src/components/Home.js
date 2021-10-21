import work_from_anywhere from '../resources/working_from_anywhere.svg'
import { Link as ScrollLink } from 'react-scroll'

const Home = () => {
    return(
        <div>
            <main className="bg-white font-open-sans">
                <div className="container mx-auto px-8 py-24 lg:py-20 relative flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h1 className="text-center lg:text-left text-3xl sm:text-5xl font-light text-blue-700 leading-tight mb-4">Welcome, to N Time <strong className="font-black text-secondary text-3xl sm:text-4xl block">Track your spaces</strong></h1>
                        <div className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">
                            <ul>
                                <li>Show up to events at the right time</li>
                                <li>Keep track of the venue</li>
                                <li>Save time, waiting endlessly for the event to begin</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 mt-10 lg:mr-8">
                        <img className="w-full" src={work_from_anywhere}/>
                    </div>
                </div>
            </main>

            <div id="about" className="md:mt-16 mb-28 md:grid md:grid-cols-6 md:flex md:items-center">
                <div className="md:col-span-2">
                    <h1 className="text-center text-5xl font-bold text-secondary tracking-wider">About</h1>
                    <p className="text-center text-xl">the story...</p>
                </div>
                <div className="mt-4 md:col-span-4">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-screen">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="filter drop-shadow-lg relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl w-full sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="divide-y divide-gray-300">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>If you have ever been very early to a class, and you had wait to wait for hours for the professor not to show up</p>
                                <p>Or gone for an event only to find out, upon arriving that the venue or time has been changed</p>
                               
                                <p>Then this is for you</p>
                            </div>
                            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <p>Want to know more?</p>
                                <p>
                                <ScrollLink to="contact" offset={50} smooth={true} duration={500} className="text-primary hover:text-cyan-700"> Contact me &rarr; </ScrollLink>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="how-to-use" className="mt-28 mb-10">
                <h1 className="text-center text-5xl font-bold text-secondary tracking-wider">How To Use</h1>
            </div>

            <div id="contact">

            </div>
        </div>
    )
}

export default Home