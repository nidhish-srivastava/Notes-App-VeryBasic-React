import React,{useState} from 'react'
import './MainHeader.css'

function MainHeader(props) {
  const modeHandler = () =>{ 
    props.mode((prev)=>!prev)
  }
  return (
    <nav>
        <ul>
            <li>Take Notes</li>
            <li onClick={modeHandler}>Toggle Mode</li>
        </ul>
    </nav>
  )
}

export default MainHeader