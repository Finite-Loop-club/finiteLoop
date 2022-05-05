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



function Home() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>

                {/* get started */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/lake.gif')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >Welcome to Finite Loop</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>Innovate | Connect | Inspire</p>
                            <Button text="What's new" />
                        </div>


                    </div>
                </Parallax>

                {/* About us */}
                <Parallax className='h-[80vh] ' bgImage={require('./img/about.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >Know about the club</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>What we do here</p>
                            <Button text="About us" />
                        </div>
                    </div>
                </Parallax>



                {/* events */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/events.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >EVENTS</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>Events that we have done in past.</p>
                            <Button text="Events" />
                        </div>
                    </div>
                </Parallax>

                {/* Perks */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/about.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >Why You should join us</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>Perks of joing Us</p>
                            <Button text="Perks" />
                        </div>
                    </div>
                </Parallax>

                {/* Gallery */}
                <Parallax className='h-[80vh] ' bgImage={require('./img/gallery.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >See us through Images</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>Lorem ipsum dolor sit amet consectetur.</p>
                            <Button text="Gallery" />
                        </div>
                    </div>
                </Parallax>

                {/* Team  */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/team.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >TEAM</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>Hardworkig Team behind all this </p>
                            <Button text="Team" />
                        </div>
                    </div>
                </Parallax>

                {/* Contact us */}

                <Parallax className='h-[80vh] ' bgImage={require('./img/contact.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='text-white font-bold  text-4xl  md:text-6xl'>
                            <span style={{ textShadow: "2px 2px 15px #000000" }} >Contact us</span>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal py-2 text-2xl md:text-3xl font-body'>We’d Love to Hear From You</p>
                            <Button text="contact" />
                        </div>
                    </div>
                </Parallax>


            </div>


        </>
    )
}

export default Home