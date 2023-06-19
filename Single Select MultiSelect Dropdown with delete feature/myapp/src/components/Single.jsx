import React, { useState } from "react";

const Single = ({singleSelectArray}) => {
   
      const [select, setSelect] = useState(null);
      const [state, setState] = useState(false);
    
      const selecthandler = (i) =>{
        setSelect(i)
      } 
  return (
    <main>
      <div className="selected-option-container">
        <div style={{fontSize : '1.1rem'}}>{singleSelectArray[select]?.label}</div>
        { state && <span className="remove-icon" onClick={()=>setSelect("")}>
        <i class="fa-solid fa-xmark"></i>
        </span>}
        <span className="drop-icon" onClick={() => setState(e=>!e)}>
          <i class="fa-solid fa-caret-down"></i>
        </span>
      </div>
      {state && (
          <div className="dropdown-container">
          {singleSelectArray.map((e, i) => {
            return <li key={i} onClick={()=>selecthandler(i)}>{e.label}</li>;
          })}
          </div>
      )}
    </main>
  )
}

export default Single