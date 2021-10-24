import work_from_anywhere from '../resources/working_from_anywhere.svg'
import { Link as ScrollLink } from 'react-scroll'
import hello from '../resources/hello.svg'
import { FaSpellCheck, FaRocket, FaRegLaughBeam, FaCheckCircle } from "react-icons/fa";
import { useState } from 'react';

const Home = () => {
    const [showAlert, setShowAlert] = useState(false)

    const CopyToClipboard = () => {
        navigator.clipboard.writeText('0xc426df2251D72066FCccc2f338D737801eBf6ce6');
        setShowAlert(true)
    }
    
    const closeAlert = () => {
        setShowAlert(false)
    }

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
                                <li>Save time, waiting endlessly for an event to begin</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 mt-10 lg:mr-8">
                        <img className="w-full" src={work_from_anywhere}/>
                    </div>
                </div>
            </main>

            <div id="about" className="lg:mt-16 mb-28 lg:grid lg:grid-cols-6 lg:flex lg:items-center">
                <div className="lg:col-span-2">
                    <h1 className="text-center text-5xl font-bold text-secondary tracking-wider">About</h1>
                    <p className="text-center text-xl">the story...</p>
                </div>
                <div className="mt-10 lg:col-span-4">
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
                <p className="text-center text-xl">the steps...</p>
                
                <div className="rounded-md shadow-lg bg-gradient-to-t from-gray-100 to-white md:flex md:space-x-10 md:grid md:grid-cols-5 items-center py-8 px-8 md:px-16 md:mx-20 mt-16">
                    <div className="md:col-span-1">
                        <div className="grid justify-items-center mb-8">
                            <div>
                                <FaSpellCheck size={120} className="text-secondary text-8xl md:text-9xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 md:col-span-4">
                        <h1 className="text-center sm:text-left text-2xl font-bold text-primary tracking-wider mb-4">SignUp and Login</h1>
                        <p>The first thing you need to do is to signup, or login is you already have an account</p> 
                        <p>After completeing this step you now have access to join and create spaces (classes, events or whatever)</p>
                        <p>You also get email notifications regarding your spaces</p>
                    </div>
                </div>

                <div className="rounded-md shadow-lg bg-gradient-to-t from-gray-100 to-white md:flex md:space-x-10 md:grid md:grid-cols-5 items-center py-8 px-8 md:px-16 md:mx-20 mt-16">
                    <div className="md:col-span-1">
                        <div className="grid justify-items-center mb-8">
                            <div>
                                <FaRocket className="text-secondary text-8xl md:text-9xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 md:col-span-4 md:row-start-1">
                        <h1 className="text-center sm:text-left text-2xl font-bold text-primary tracking-wider mb-4">Create or Join a Space</h1>
                        <p>Spaces can be anything from classes to events and much more</p>
                        <p>When you create a space a unique 8-digit code is generated; you can share this code with your friends so they can join the space</p>
                        <p>Request space code from friends to join their space</p>
                    </div>
                </div>

                <div className="rounded-md shadow-lg bg-gradient-to-t from-gray-100 to-white md:flex md:space-x-10 md:grid md:grid-cols-5 items-center py-8 px-8 md:px-16 md:mx-20 mt-16">
                    <div className="md:col-span-1">
                        <div className="grid justify-items-center mb-8">
                            <div>
                                <FaRegLaughBeam className="text-secondary text-8xl md:text-9xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 md:col-span-4">
                        <h1 className="text-center sm:text-left text-2xl font-bold text-primary tracking-wider mb-4">Enjoy and have fun!!!</h1>
                        <p>Now you can view time and venue changes on your space. Track wheter your space has begun.</p>
                        <p>And also update your space</p>
                    </div>
                </div>
                 
            </div>

            <div id="contact" className="mt-28 mb-28">
                <h1 className="text-center text-5xl font-bold text-secondary tracking-wider">Contact</h1>
                <p className="text-center text-xl">the man...</p>

                <div id="about" className="mt-20 mx-8">
                    <div className="mt-10 flex items-center">
                        <img className="mx-auto" src={hello}/>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-center text-2xl md:text-3xl font-semibold text-secondary tracking-wider">Send me an email</h1>
                        <p className="text-center text-primary text-xl m-2">
                            <a target="_blank" rel="noreferrer" href="mailto:toluolatubosun@gmail.com">toluolatubosun@gmail.com</a>
                        </p>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-center text-2xl md:text-3xl font-semibold text-secondary tracking-wider">Donate Cryptocurrency</h1>
                        <p className="text-center text-xl m-2">Send any coin on the Binance Smart Chain Network</p>
                        <div onClick={CopyToClipboard} className="cursor-pointer text-center text-primary truncate text-xl m-2">0xc426df2251D72066FCccc2f338D737801eBf6ce6</div>
                    </div>

                    { showAlert &&
                        <div className="grid place-items-center">
                            <div className="text-white px-6 py-4 border-0 md:w-1/3 rounded relative mb-4 bg-primary">
                                <span className="text-xl inline-block mr-5 align-middle">
                                    <FaCheckCircle/>
                                </span>
                                <span className="inline-block align-middle mr-8">
                                    Copied to clipboard
                                </span>
                                <button onClick={closeAlert} className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                                    <span>×</span>
                                </button>
                            </div>
                        </div>
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Home