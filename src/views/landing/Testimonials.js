import React from 'react'

function Testimonials() {
    return (
        <>
            <div>
                <section class="bg-slate-800 rounded-3xl">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            
                            <blockquote>
                                <p class="text-2xl font-medium text-gray-900 dark:text-white">" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eos aliquam, possimus fuga voluptates in amet placeat alias at, fugiat, asperiores a! Aliquam quidem fugit necessitatibus accusamus libero a deleniti distinctio, dolor animi iure praesentium sed doloribus, doloremque quae facilis numquam debitis repellat. Fugiat, quam? "</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">xyz person</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Testimonials