import React from 'react'
import { Link } from 'react-router-dom'

function SmallFooter(props) {

    const main = [{
            item: "Home",
            link: "/",
        },
        {
            item: "Login",
            link: "/login",
        },
        {
            item: "Other Links",
            link: "/",
        }]

    return (
        <>
            <footer
                className={
                    (props.absolute
                        ? "absolute w-full bottom-0 bg-none"
                        : "relative") + " pb-6"
                }
            >
                <div className="container mx-auto px-4">
                    <hr className="mb-6 border-b-1 border-slate-600" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-sm text-black font-semibold py-1 text-center md:text-left">
                                Copyright © {new Date().getFullYear()}{" "}
                                <Link
                                    to="/"
                                    className="text-black hover:text-slate-700 text-sm font-semibold py-1"
                                >
                                    Finite Loop
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                {main.map((index, key) => {
                                    return (
                                        <>
                                            <li key={key} >
                                                <Link
                                                    to={index.link}
                                                    className="text-black hover:text-slate-600 text-sm font-semibold block py-1 px-3"
                                                >
                                                    {index.item}
                                                </Link>
                                            </li>
                                        </>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SmallFooter