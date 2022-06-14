import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import team from '../../assets/team/team.jpg'
import pattern from '../../assets/img/pattern_react.png'
import { GiThink, GiTeacher } from 'react-icons/gi'
import { GrWorkshop } from 'react-icons/gr'
import { BsCardChecklist, } from 'react-icons/bs'
import { BiMessageSquareDetail, BiGitRepoForked } from 'react-icons/bi'
import { FaFistRaised, FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineBranches, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { MdWorkOutline } from 'react-icons/md'
import ContactForm from './ContactForm'
import { AuthContext } from "../../context/AuthContext"
import SmallFooter from '../../Components/footers/SmallFooter'
import { Fade, Slide } from 'react-awesome-reveal'


function Home() {

    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser.displayName)
    console.log(currentUser)

    return (
        <>
            <AuthNavbar />
            <Fade cascade={true} duration={3000} >
                <section className="header relative  items-center flex h-screen max-h-[660px] md:max-h-[560px] ">

                    <Slide duration={3000} direction={"left"} >
                        <div className="mx-auto items-center flex flex-wrap">
                            <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 px-10">
                                <div className="pt-5 sm:pt-0 z-50 ">
                                    <h2 className="font-semibold text-4xl text-slate-600">
                                        Finite Loop - A beautiful Coding Club
                                    </h2>
                                    <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                        Some description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus fugiat autem in fuga. Quam. {" "}

                                    </p>
                                    <div className="mt-12">
                                        <NavLink
                                            to="/joinus"
                                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600  text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                        >
                                            Join Us
                                        </NavLink>
                                        <NavLink
                                            to="/auth/signin"
                                            className=" ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600  text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"

                                        >
                                            {!currentUser ? "Sign in" : "Profile"}

                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>


                    <img
                        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-[860px] "
                        src={pattern}
                        alt="..."
                    />
                </section>
            </Fade>


            <Fade  duration={3000} >
                <section className="mt-10 md:mt-10 pb-16 relative bg-slate-100">
                    <div className="container mx-auto px-4 pb-44 pt-10">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                                <div className="md:pr-12">
                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                        <BiMessageSquareDetail className='text-slate-900  ' />
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        About Us
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                        Finite Loop is a Coding Club, which aims to give a good perspective of development, and encourages students to realize their ideas. We encourage students to participate in competitive programming and thus, inspire the next.


                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <GiThink className='inline-block text-slate-900 mr-2 text-2xl' />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-500">
                                                        We stay curious, and seek out new solutions
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <BsCardChecklist className='inline-block text-slate-900 mr-2 text-2xl' />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-500">
                                                        We work relentlessly to produce fruitful results.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <FaFistRaised className='inline-block text-slate-900 mr-2 text-2xl' />
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-500">
                                                        We support each other to grow, with a positive spirit, and embrace our diversities.
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-0">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-xl"
                                    style={{
                                        transform:
                                            "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                                    }}
                                    src={team}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-slate-100 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-11/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                        className="w-full align-middle rounded-t-lg"
                                    />

                                    <blockquote className="relative p-8 mb-4">
                                        <h4 className="text-xl font-bold text-white">
                                            Great for your awesome project
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.  voluptate quod accusantium vero molestiae reprehenderit sed.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>


                            <div className="w-full md:w-6/12 px-4">
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-6/12 px-4">
                                        <div className="relative flex flex-col mt-4">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                    <FaChalkboardTeacher className='text-slate-900  ' />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">
                                                    Workshops
                                                </h6>
                                                <p className="mb-4 text-slate-500">
                                                    The members get free access to all the events and workshops conducted by the Finite Loop club.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col min-w-0">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                    <GiTeacher className='text-slate-900  ' />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">
                                                    Peer to Peer Learning
                                                </h6>
                                                <p className="mb-4 text-slate-500">
                                                    Explain your ideas to others and participate in activities through which you can learn from your peers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-6/12 px-4">
                                        <div className="relative flex flex-col min-w-0 mt-4">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                    <MdWorkOutline className='text-slate-900  ' />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">Internships</h6>
                                                <p className="mb-4 text-slate-500">
                                                    Get a chance to grab internships and put your skills into use.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col min-w-0">
                                            <div className="px-4 py-5 flex-auto">

                                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                    <GrWorkshop className='text-slate-900' />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">
                                                    Guest Lecture
                                                </h6>
                                                <p className="mb-4 text-slate-500">
                                                    Get an opportunity to listen to some of the renowned experts, and engage in discussions.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="w-full md:w-6/12 mx-auto px-4">
                                        <div className="relative flex flex-col min-w-0 mt-4">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                    <AiOutlineFundProjectionScreen className='text-slate-900  ' />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">Real-Time Projects</h6>
                                                <p className="mb-4 text-slate-500">
                                                    Being in this club, you get to work on real time projects, which allows you to bring out your creative side.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* call to action */}

                    {/* css components section */}

                    <div className="container mx-auto overflow-hidden pb-20">
                        {/* <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                            <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-sitemap text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                CSS Components
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                                Every element that you need in a product comes built in as a
                                component. All components fit perfectly with each other and can
                                have different colours.
                            </p>
                            <div className="block pb-6">
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Buttons
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Inputs
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Labels
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Menus
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Navbars
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Pagination
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Progressbars
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white  last:mr-0 mr-2 mt-2">
                                    Typography
                                </span>
                            </div>
                            <a
                                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                                target="_blank"
                                className="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
                            >
                                View All{" "}
                                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                            </a>
                        </div>

                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                                <img
                                    alt="..."
                                    src={require("../../assets/img/component-btn.png").default}
                                    className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                                />
                                <img
                                    alt="..."
                                    src={require("../../assets/img/component-profile-card.png").default}
                                    className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                                />
                                <img
                                    alt="..."
                                    src={require("../../assets/img/component-info-card.png").default}
                                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                                />
                                <img
                                    alt="..."
                                    src={require("../../assets/img/component-info-2.png").default}
                                    className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                                />
                                <img
                                    alt="..."
                                    src={require("../../assets/img/component-menu.png").default}
                                    className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                                />
                                <img
                                    alt="..."
                                    src={require("../../assets/img/component-btn-pink.png").default}
                                    className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                                />
                            </div>
                        </div>
                    </div> */}

                        <div className="flex flex-wrap items-center ">
                            <div className="w-full md:w-6/12 px-4 mx-auto mt-32">
                                <div className="justify-center flex flex-wrap relative">
                                    <div className="my-4 w-full lg:w-6/12 px-4 hidden md:block">

                                        <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Svelte
                                            </p>
                                        </div>


                                        <div className="bg-sky-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                ReactJS
                                            </p>
                                        </div>


                                        <div className="bg-slate-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                NextJS
                                            </p>
                                        </div>

                                    </div>
                                    <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">

                                        <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                JavaScript
                                            </p>
                                        </div>


                                        <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Angular
                                            </p>
                                        </div>


                                        <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Vue.js
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                    <BiGitRepoForked className='text-slate-900  ' />
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Work on new Trending Tech Stack
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                                    In order to create a great User Experience some components
                                    require JavaScript. In this way you can manipulate the elements
                                    on the page and give more options to your users.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                                    We created a set of Components that are dynamic and come to help
                                    you.
                                </p>


                            </div>
                        </div>
                    </div>

                    {/* <div className="justify-center text-center flex flex-wrap mt-24">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
                            Notus React is a completly new product built using our past
                            experience in web templates. Take the examples we made for you and
                            start playing with them.
                        </p>
                    </div>
                </div> */}
                </section>

            </Fade>
          
            {/* call to action */}

            <section className="py-10 bg-slate-600 overflow-hidden pb-40 md:pb-0 ">
                <div className="container mx-auto pb-40">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                            <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <AiOutlineBranches className='inline-block text-slate-900 text-2xl' />
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                                Github Session
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis consequuntur, quisquam sit quibusdam similique eveniet nulla error?
                            </p>

                            <NavLink
                                to="/"
                                target="_blank"
                                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                            >
                                Register Now
                            </NavLink>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mx-auto  mt-12 relative">
                            < FiGithub className='inline-block w-fit text-white absolute mx-auto text-[300px] lg:text-[500px] opacity-70 ' />

                        </div>
                    </div>
                </div>
            </section>
            {/*             
            <section className="pb-16 bg-slate-200 relative pt-32">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-slate-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
                        <div className="w-full text-center lg:w-8/12">
                            <p className="text-4xl text-center">
                                <span role="img" aria-label="love">
                                    😍
                                </span>
                            </p>
                            <h3 className="font-semibold text-3xl">
                                Do you love this Starter Kit?
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed mt-4 mb-4">
                                Cause if you do, it can be yours now. Hit the buttons below to
                                navigate to get the Free version for your next project. Build a
                                new web app or give an old project a new look!
                            </p>
                            <div className="sm:block flex flex-col mt-10">
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                                    target="_blank"
                                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-orange-500 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Get started
                                </a>
                                <a
                                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                                    target="_blank"
                                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                                >
                                    <i className="fab fa-github text-lg mr-1"></i>
                                    <span>Help With a Star</span>
                                </a>
                            </div>
                            <div className="text-center mt-16"></div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="py-10 bg-none overflow-hidden">
                <div className="container mx-auto pb-">
                    <div className="flex flex-row-reverse flex-wrap justify-center">
                        <div className="w-full md:px-4 ml-auto mr-auto md:mt-10">

                            <ContactForm />


                        </div>

                        <div className=" hidden px-4 mr-auto ml-auto mt-32 relative">
                            {/* < FiGithub className='inline-block text-white absolute -top-150-px -right-100 left-auto opacity-80 text-[500px] ' /> */}

                        </div>
                    </div>
                </div>
            </section>
            <SmallFooter />

        </>
    )
}

export default Home