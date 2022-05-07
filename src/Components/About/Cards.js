import React from 'react'

function Cards(props) {
    return (
        <>
            <div className=' w-1/3    border-2 p-8 pt-3 text-center backdrop-blur bg-gray-500/30 rounded-lg m-2  '>
                <h1 className='text-3xl self-center underline decoration-orange-500 underline-offset-4  text-white pt-5 font-bold tracking-widest' >{props.name}</h1>
                <p className='text-md  text-gray-300 p-5 pl-0 '>{props.desc}</p>
            </div>
        </>
    )
}

export default Cards