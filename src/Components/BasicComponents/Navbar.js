import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import logo1 from "../../assets/images/logo1.png"
import Switch from './switch/Switch'

function Navbar() {
    const [click, setClick] = useState(0)


    const handleHamburger = () => {
        if (click === 0) {
            document.getElementById('mobile-menu').classList.add('hidden')
            document.getElementById('mobile-menu').classList.add('visible')
            setClick(1)
        } else {
            document.getElementById('mobile-menu').classList.add('visible')
            document.getElementById('mobile-menu').classList.remove('hidden')
            setClick(0)
        }
    }

    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (

        <>

            <nav className=" px-2 sm:px-4 py-2.5 h-full bg-none">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <span> <img src={`${isMobile? logo :logo1}`} className="mr-3 inline h-24 sm:h-20" alt="Logo" /></span>

                    <button data-collapse-toggle="mobile-menu" type="button" onClick={handleHamburger} className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700  `} aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className=" justify-stretch  items-center w-full md:flex md:w-auto   md:order-1 hidden" id="mobile-menu">
                        <ul className="flex flex-col mt-4 align-middle text-center md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
                            <li>
                                <NavLink to="/" className="block py-2 pr-4 pl-3 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"  className="block py-2 pr-4 pl-3 text-gray-700   border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-white ">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/events" className="block py-2 pr-4 pl-3 text-gray-700   border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink  exact to="/team"  className={"block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" }>Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/"  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</NavLink>
                            </li>
                            {/* <li>
                                <Switch/>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>


        </>

    )
}

export default Navbar