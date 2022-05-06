import React from 'react'
import { Parallax } from 'react-parallax';
import Button from '../BasicComponents/Button';

const inlineStyleRD = {
  background: 'transparent',
  left: '50%',
  top: '60%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


function About() {
  return (
    <>

      <Parallax className='h-[80vh] text-center ' bgImage={require('./img/lake.gif')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
        <div style={{ height: 500, }} >
          <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
            <span style={{ textShadow: "2px 2px 15px #000000" }} >About Us</span>
            <br />
            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>What we do here.</p>
            <Button text="What's new" />
          </div>
        </div>
      </Parallax>


      <Parallax className='h-[80vh] text-center ' bgImage={require('./img/lake.gif')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
        <div className="flex flex-row gap-3" >
          <div >
            <h2 className="text-4xl text-white"> About us </h2>
              <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam unde, odio eaque praesentium, velit similique neque consectetur animi sed beatae aperiam. Voluptatum laudantium dolores magnam. Nesciunt eveniet ratione animi similique obcaecati architecto necessitatibus reprehenderit et at numquam molestiae officia, rem ipsum. Dolorem quisquam modi labore temporibus dicta ex ducimus id.</p>
          </div>
          <div className="w-fit ">
            <img src="./img/code.gif" alt="" />
          </div>

        </div>
      </Parallax>


    </>
  )
}

export default About