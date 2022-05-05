import React from 'react'
import Eventcard from './Eventcard'
import Tab from './Tab'

function Events() {
  return (
    <>

    <div className='text-7xl text-center text-white pt-5 font-bold tracking-widest ' >Events</div>
    <div className="bg-orange-500 h-1 w-48 my-2 m-auto"></div>
    <div className='text-3xl text-center text-white pt-1  tracking-widest ' >Something that make sense</div>

    <Tab/>

    <div className='flex flex-wrap w-[95vw] m-auto mt-0 justify-center ' >

        <Eventcard/>
        <Eventcard/>
        <Eventcard/>
        <Eventcard/>
        <Eventcard/>
        <Eventcard/>
    </div>
    </>
  )
}

export default Events