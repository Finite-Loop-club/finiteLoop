import React from 'react'
import error from './Home/png/pagenotfound.png'
import Button from './BasicComponents/Button'

function Error() {
    return (
        <>
            <div class="h-screen w-11/12 mx-auto flex items-center">
                <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div class="w-full lg:w-1/2 mx-8">
                        <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                            Sorry we couldn't find the page you're looking for
                        </p>
                        <div className='mt-4 w-44 md:w-44' >
                        <Button text="Back to Home" />
                        </div>
                    </div>
                    <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                        <img src={error} class="" alt="Page not found"/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Error