// Code Keypad Component Here
import React from 'react'

function Keypad (){
    function password(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={password}></input>
        </div>
    )
}

export default Keypad;