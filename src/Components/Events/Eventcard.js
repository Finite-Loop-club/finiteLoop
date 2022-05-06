import React from 'react'
import "./card.css"
import Button from "../BasicComponents/Button"
import { Fade } from "react-awesome-reveal";

function Eventcard() {
    return (
        <>
        <Fade duration={1000} delay={5} >

            <div className="h-96 w-96 m-4  flex items-center">
                <div className="container mx-auto p-5 bg-gray-900 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-500 hover:shadow-2xl transition duration-300">
                    <img className="rounded-lg" src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" alt="" />
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="mt-5 text-white text-2xl font-semibold">Event Name</h1>
                            <p className="mt-2 text-white">Small desc</p>
                        </div>
                        <div>
                            <Button text="Know more" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

        </>
    )
}

export default Eventcard