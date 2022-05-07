import React from 'react'
import "./card.css"
import Button from "../BasicComponents/Button"
import { Fade } from "react-awesome-reveal";

function Eventcard(props) {
    return (
        <>

            <Fade as="div"duration={1000}  className="h-fit w-96 m-4  flex items-center">
                <div className="container mx-auto p-5 bg-gray-900 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500 hover:shadow-2xl transition-all hover:scale-105  duration-300">
                    <img className="rounded-lg" src={props.src} alt="" />
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="mt-5 text-white text-2xl font-semibold">{props.name}</h1>
                            <p className="mt-2 text-white">{props.type}</p>
                        </div>
                        <div>
                            <Button text="Know more" />
                        </div>
                    </div>
                </div>
            </Fade>

        </>
    )
}

export default Eventcard