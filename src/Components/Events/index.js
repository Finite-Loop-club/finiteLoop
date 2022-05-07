import React from 'react'
import Eventcard from './Eventcard'
import Tab from './Tab'
import {eventData} from "./eventData"


function Events() {
  return (
    <>

    <div className='text-7xl text-center text-white pt-5 font-bold tracking-widest ' >Events</div>
    <div className="bg-orange-500 h-1 w-48 my-2 m-auto"></div>
    <div className='text-3xl text-center text-white pt-3 pb-8   tracking-widest ' >Something that make sense</div>

    <Tab/>

    <div className='flex flex-wrap w-[95vw] m-auto mt-0 justify-center ' >
      {eventData.map((events, id)=>{
        return(
          <Eventcard key={id} name={events.name} src={events.image} catogary={events.type}  />


        )
      } )}


    </div>
    </>
  )
}

export default Events