import React from 'react'
import { FaGithub,FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { Fade } from 'react-awesome-reveal'
import "./team.css"
function Teamcard(props) {
    return (
        <>
            <Fade as="div" className=" shadow-xl hover:shadow-orange-500 hover:shadow-2xl transition duration-300 max-w-sm scale-90 lg:scale-100 h-full text-center w-[80%] lg:w-[20%] m-5">
                <div className="transition-transform hover:scale-105  duration-300">
                    <div className="bg-[#2f2f2f] h-60 pt-0 ">
                        <img className=" object-cover h-60 w-fit m-auto " src={props.src} alt="" />
                    </div>
                    <div className="text-center h-32 bg-[#1d1d1d]  p-2">
                        <h1 className="pt-2  font-semibold text-xl text-white tracking-wide">
                        {props.name}
                        </h1>
                        <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
                            {props.role}
                        </h3>
                        <div className="flex justify-center gap-3 mb-2">
                            <a href={props.github}>

                                <FaGithub className=" hover:animate-bounce text-orange-600 hover:text-white cursor cursor-pointer   transition-all ease-in-out hover:-translate-x-1 text-2xl hover:text-3" />
                            </a>

                            <a href={props.linkedin}>
                                <FiLinkedin className=" hover:animate-bounce text-orange-600 hover:text-white cursor-pointer  transition-all ease-in-out text-2xl hover:text-3xl" />
                            </a>
                            
                            
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Teamcard