import React from 'react'
import Teamcard from './Teamcard'
import {members} from "./teamdata"

function Team() {
  return (
    <>

    <div className='text-7xl text-center text-white pt-5 font-bold tracking-widest ' >Team</div>
    <div className="bg-orange-500 h-1 w-40 my-2 m-auto"></div>
    <div className='text-3xl text-center text-white pt-3 pb-8  tracking-widest ' >Our Team</div>


    <div className='flex flex-wrap w-[95vw] m-auto mt-0 justify-center ' >

      {members.map((member,id)=>{
        return(
          <Teamcard key={id} name={member.name} role={member.role} 
          github={member.github} linkedin= {member.linkedin}
          src={member.img}
          />
          
        )
      })}

        
    </div>
    </>
  )
}

export default Team