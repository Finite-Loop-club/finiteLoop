import React from 'react'
import { Parallax } from 'react-parallax';
import Button from '../BasicComponents/Button';
import Cards from './Cards';

const inlineStyleRD = {
  background: 'transparent',
  left: '50%',
  top: '60%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

const inlineStyleMD = {
  background: 'transparent',
  left: '50%',
  top: '30%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}



const Perks = [
  {
    name: "Workshop",
    description: `The members get free access to all the events and workshops conducted by the Finite Loop club.`,
  },
  {
    name: "Internship",
    description: `Get a chance to grab internships and put your skills into use.`,
  },
  {
    name: "Real-Time Projects",
    description: `Being in this club, you get to work on real time projects, which allows you to bring out your creative side.`,
  },
  {
    name: "PEER TO PEER LEARNING",
    description: `Explain your ideas to others and participate in activities through which you can learn from your peers.`,
  },
  {
    name: "CODING CONTEST",
    description: `We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills.`,
  },
  {
    name: "GUEST LECTURERS",
    description: `Get an opportunity to listen to some of the renowned experts, and engage in discussions.`,
  },
  {
    name: "GUEST LECTURERS",
    description: `Get an opportunity to listen to some of the renowned experts, and engage in discussions.`,
  },

];



function About() {
  return (
    <>
      <div class=" h-full bg-gradient-to-r from-black to-gray-900">


        <div className='md:text-7xl text-5xl text-center text-white pt-5 font-bold tracking-widest  underline decoration-orange-500 underline-offset-8 decoration-4' >About Us</div>
        <div className=' text-xl md:text-3xl text-center text-white pt-3 pb-8   tracking-widest ' >Something that make sense</div>
        <p className='text-xl text-center text-white w-2/3 m-auto ' >
        Finite Loop is a Coding Club, which aims to give a good perspective of development, and encourages students to realize their ideas. We encourage students to participate in competitive programming and thus, inspire the next.
        </p>
        <div className='text-6xl text-center text-white pt-5 pb-3 font-bold tracking-widest  underline decoration-orange-500 underline-offset-8 decoration-4' >Perks</div>

        <div className=' flex flex-row flex-wrap justify-center w-[95vw] m-auto'>

          {Perks.map((perk, id) => {
            return (
              <Cards key={id} name={perk.name} desc={perk.description} />
            )
          })
          }

        </div>



      </div>

    </>
  )
}

export default About