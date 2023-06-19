import React from 'react'

const  Note = (props) => {
  return (
    <React.Fragment>
      <div className='note'>
      <h5 className='note-title'>{props.text}</h5>
      <div className='note-footer'>
        <small>{props.date}</small>
        <i className="fa fa-trash-o" aria-hidden="true" onClick={()=> {
          props.deleteNote(props.id) }}></i> {/* here we are passing the id of the note to be deleted. */}
          {/* <button onClick={()=>{props.editNote(props.id,true)}}>Edit</button>   Sending data from child to parent,but wont be usefull */}
          <button onClick={()=>{
            props.deleteNote(props.id)  // This is coz we add a new note(if we dont use this,then every time we edit, a new note is being created)
            props.editNote(props.id)}}>Edit</button>   {/* Sending data from child to parent,but wont be usefull */}
      </div>
    </div>
    </React.Fragment>
  )
}

export default Note