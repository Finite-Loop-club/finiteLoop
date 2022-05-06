import React from 'react'
import "./switch.css"

function Switch() {
    return (
        <label class="switch">
            <input className='switch_input' type="checkbox"/>
                <span class="slider"></span>
        </label>
    )
}

export default Switch