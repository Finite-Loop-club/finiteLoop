import React from 'react'
import "./card.css"
import Button from "../BasicComponents/Button"
import { Fade, Slide } from "react-awesome-reveal";

function Eventcard(props) {
    return (
        <>

            <Fade duration={1000} className="h-fit w-96 m-4 flex items-center hover:filter-backdrop-blur-lg ">
                <div className="container mx-auto p-5 bg-gray-100 max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-800 hover:shadow-2xl transition-all hover:scale-105  duration-200">
                    <img className="rounded-lg" src={props.src} alt="" />
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="mt-5 text-gray-600 text-2xl font-semibold">{props.name}</h1>
                            <p className="mt-2 text-sm text-gray-600">{props.catogary}</p>
                        </div>
                        <div className="mt-4 w-40 md:w-36" >
                            <button
                                className="bg-white text-slate-700 active:bg-slate-50 text-md font-bold  px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>



        </>
    )
}

export default Eventcard