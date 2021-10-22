import logo from '../../resources/logo.svg'
import { FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-secondary w-full py-12 px-4 m-auto">
            <div aria-label="footer" className="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                <div aria-label="n time logo" className="mt-4 mb-8" role="img">
                    <img src={logo} className="transform -rotate-90 focus:outline-none h-44 w-44 mr-1 text-blue-400"></img>
                </div>
                <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h1 className="focus:outline-none text-2xl text-white font-black text-center">N Time</h1>
                    
                    <div className="my-7 text-base text-color f-f-l">
                        <ul className="md:flex items-center">
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                                <a className="md:flex md:items-center" target="_blank" href="https://twitter.com/king_tolu_7">
                                    <div className="grid justify-items-center">
                                        <FaTwitterSquare size={40}/>
                                    </div>
                                    <p className="p-2">Twitter</p>
                                </a>
                            </li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                                <a className="md:flex md:items-center" target="_blank" href="https://github.com/toluolatubosun">
                                    <div className="grid justify-items-center">
                                        <FaGithubSquare size={40}/>
                                    </div>
                                    <p className="p-2">GitHub</p>
                                </a>
                            </li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                                <a className="md:flex md:items-center" target="_blank" href="https://www.linkedin.com/in/john-olatubosun/">
                                    <div className="grid justify-items-center">
                                        <FaLinkedin size={40}/>
                                    </div>
                                    <p className="p-2">LinkedIn</p>
                                </a>
                            </li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                                <a className="md:flex md:items-center" target="_blank" href="https://www.instagram.com/king_tolu_/">
                                    <div className="grid justify-items-center">
                                        <FaInstagramSquare size={40}/>
                                    </div>
                                    <p className="p-2">Instagram</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-sm text-center text-white mb-1 f-f-l">
                        <p className="focus:outline-none">&copy; {(new Date().getFullYear())} N Time. All rights reserved</p>
                    </div>
                </div>
                {/* <div className="w-9/12 h-0.5 bg-white rounded-full"></div>  */}
            </div>
        </footer>
    
    )
}

export default Footer