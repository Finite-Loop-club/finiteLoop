import React from 'react'
import "./card.css"
import Button from "../BasicComponents/Button"
import { Fade, Slide } from "react-awesome-reveal";

function Eventcard(props) {
    return (
        <>

            <Fade duration={1000}  className="h-fit w-96 m-4 flex items-center hover:filter-backdrop-blur-lg ">
                <div className="container mx-auto p-5 bg-gray-100 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500 hover:shadow-2xl transition-all hover:scale-105  duration-200 hover:border-2 hover:border-org ">
                    <img className="rounded-lg" src={props.src} alt="" />
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="mt-5 text-gray-600 text-2xl font-semibold">{props.name}</h1>
                            <p className="mt-2 text-sm text-gray-600">{props.catogary}</p>
                        </div>
                        <div className="mt-4 w-40 md:w-36" >
                            <Button text="Know more" />
                        </div>
                    </div>
                </div>
            </Fade>



        </>
    )
}

export default Eventcard