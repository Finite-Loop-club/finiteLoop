import React from 'react'
import { FaGithub,FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { Fade } from 'react-awesome-reveal'
import src from "../Home/img/coder.gif"
import "./team.css"
function Teamcard() {
    return (
        <>
            <Fade as="div" className=" max-w-sm scale-90 lg:scale-100 h-full text-center w-[80%] lg:w-[22%] m-5">
                <div className="transition-transform hover:scale-105  duration-300">
                    <div className="bg-[#2f2f2f] h-full pt-0 ">
                        <img className=" aspect-video w-fit m-auto " src={src} alt="" />
                    </div>
                    <div className="text-center h-40 bg-[#1d1d1d]  p-2">
                        <h1 className="pt-2  font-semibold text-xl text-white tracking-wide">
                            Name
                        </h1>
                        <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
                            Position
                        </h3>
                        <div className="flex justify-center gap-3 mb-2">
                            <a href="/">

                                <FaGithub className=" hover:animate-bounce text-orange-600 hover:text-white cursor cursor-pointer   transition-all ease-in-out hover:-translate-x-1 text-2xl hover:text-3" />
                            </a>

                            <a href="/">
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