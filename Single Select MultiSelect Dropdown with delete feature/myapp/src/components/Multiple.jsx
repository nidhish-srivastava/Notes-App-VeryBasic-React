import React, { useState } from 'react'

const Multiple = ({singleSelectArray}) => {

  const [selectedItemArray,setSelectedItemArray] = useState([])

  const addHandler = (item,i) =>{
    setSelectedItemArray((e)=>{
      return [...new Set([...e,item])]   // Using set data structure to avoid duplicates
    })
    }
  const deleteHandler = (item) =>{
    const remove = selectedItemArray.filter(e=>e!==item)
    setSelectedItemArray(remove)
  }




  return (
    <main>
       <div className="selected-option-container">
        <div style={{fontSize : '1.1rem'}} className='item-in-block-container' >
          {selectedItemArray.map(e=>(
            <div className='item-in-block'> 
             {e} 
             &nbsp;
            <i className="fa-solid fa-xmark" onClick={()=>deleteHandler(e)}></i>
             </div>
          ))}
        </div>
       <span className="remove-icon">
        <i className="fa-solid fa-xmark"></i>
        </span>
        <span className="drop-icon">
          <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
      <div className="dropdown-container">
          {singleSelectArray.map((e, i) => {
            return <li key={i} onClick={()=>addHandler(e.label,i)}>{e.label}</li>;
          })}
          </div>
    </main>
  )
}

export default Multiple