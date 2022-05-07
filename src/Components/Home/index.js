import React from 'react'
import { Parallax } from 'react-parallax';
import Button from '../BasicComponents/Button';
import { Link } from 'react-router-dom';

const inlineStyleRD = {
    background: 'transparent',
    left: '50%',
    top: '60%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
}



function Home() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>

                {/* get started */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/lake.gif')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='w-screen'>
                            <div className='text-white font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >Welcome to Finite Loop</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal text-white py-2 text-xl md:text-3xl font-body'>Innovate | Connect | Inspire</p>
                            <Link to="/events">   <Button text="What's new" />   </Link>
                        </div>


                    </div>
                </Parallax>

                {/* About us */}
                <Parallax className='h-[80vh] ' bgImage={require('./img/about.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='w-screen'>
                            <div className='text-white font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >Know about the club</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-white text-3xl md:text-3xl font-body'>What we do here</p>
                            <Link to="/about">   <Button text="About us" />  </Link>
                        </div>
                    </div>
                </Parallax>



                {/* events */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/events.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='w-screen'>
                            <div className='text-white font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >EVENTS</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal text-white py-2 text-2xl md:text-3xl font-body'>Events that we have done in past.</p>
                            <Link to="/events">   <Button text="Events" />  </Link>
                        </div>
                    </div>
                </Parallax>


                {/* Gallery */}
                <Parallax className='h-[80vh] ' bgImage={require('./img/gallery.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='w-screen'>
                            <div className='text-white font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >See us through Images</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal text-white py-2 text-2xl md:text-3xl font-body'>Lorem ipsum dolor sit amet consectetur.</p>

                            <Link to="/gallery">   <Button text="Gallery" />   </Link>
                        </div>
                    </div>
                </Parallax>

                {/* Team  */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/team.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='w-screen'>
                            <div className='text-white font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >TEAM</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal text-white py-2 text-2xl md:text-3xl font-body'>Hardworkig Team behind all this </p>
                            <Link to="/team">   <Button text="Team" />  </Link>
                        </div>
                    </div>
                </Parallax>

                {/* Contact us */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/contact.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className=' w-screen text-white'>
                            <div className=' font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >Contact us</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>We'd Love to Hear From You</p>
                            <Link to="/contact">   <Button text="contact" />  </Link>
                        </div>
                    </div>
                </Parallax>


            </div>


        </>
    )
}

export default Home