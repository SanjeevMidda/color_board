import React, { useState } from 'react'
import "../index.css"

function Panel() {

const [colorValues, setColorValues] = useState([randomNumber(), randomNumber(), randomNumber()]);

    function randomNumber(){
        return Math.floor(Math.random() * 255);
    }

    function changeColor(){
        setColorValues([randomNumber(), randomNumber(), randomNumber()])
    }

    let styles = {
        backgroundColor: `rgb(${colorValues[0]} ${colorValues[1]} ${colorValues[2]})`
    }


  return (
    <div className='panel' style = {styles} onMouseOver={changeColor}></div>
  )
}

export default Panel