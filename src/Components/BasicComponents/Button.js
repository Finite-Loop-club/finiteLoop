import React from 'react'
import "./btn.css"

function Button(props) {
    return (

        <button className='font-bold custombtn' > {props.text}
        </button>

    )
}

export default Button



