import React,{useState,useEffect} from 'react'
import MainHeader from './MainHeader'
import Note from './Note'


// const getLocalItems = () =>{
//   let list = localStorage.getItem("text")
//   console.log(list)
//   if(list){   // if we are getting something then parse that array or return and empty
//     return JSON.parse(localStorage.getItem("text"))
//   }
//   else{
//     return []
//   }
// }

// const [text,setText] = useState([])
function App() {

  const [mode,setMode] = useState(true)
  const [text,setText] = useState(JSON.parse(localStorage.getItem("text")) || [])
  const [t,setT] = useState('')

  const addNoteHandler = (event) =>{
    const obj = {
         text2:event,
         date:new Date().toDateString(),
         id: Math.random().toString()
    }
    //* adding the object to the array,this object contains the input that we gave,setting the state of the final
    const newNotes = [obj,...text]
    setText(newNotes)
  }

  // Exporting the full Create Notes component here coz we are not able to achieve editNotes functionality coz component structure
  let characterLimit = 500

  const changeHandler = (event) =>{
    const final = characterLimit-event.target.value.length
    if(final >= 0){              // If we are in the limit
      setT(event.target.value)
    }
    else{
      alert('You cannot more than 200 characters')
    }
  }


  const saveNotesHandler = () =>{
    if(t.trim().length > 0){  // This means that u havent entered any text
      // props.addNote(t)
      addNoteHandler(t)
      setT('')
    }
    else{
      alert('Please enter a note')
    }
  }


  const deleteNoteHandler = (e) =>{
    console.log(e)
    const newNotes = text.filter((arrNum,index)=>index !== e)   
     setText(newNotes)

     // We need to update the local storage again
     const savedData = JSON.stringify(newNotes)
     localStorage.setItem('text',savedData)
  }


  function editHandler(id,state) {
       let edited = text.find((e,index)=>{ // We are finding that element jiski id humaari selected item ki id se match kre,then we will return
        // if(state){  This wont work coz it will be true once button is clicked
          return index === id
        // }
        })
        
        console.log(edited,state)
        setT(edited.text2)
        // Now we need to update the input,which can be done inside the CreateNotes component
        // setInput(e.text2)  not setInput(e) // coz we need to update the text only,not everything
        // But this cant be done from other other components,so we will import the full component here only
        // setT(edited.text2)
  }
  

  
  /***************************** Saving All Notes In Local Storage  *****************************/
    useEffect(() => {
    localStorage.setItem('text', JSON.stringify(text));
  }, [text]);




  

  return (
    <React.Fragment>
      <div className={`${mode ? '' : 'dark'}`}>
     <MainHeader mode={setMode}/>
     <div className="container">

     <div className='newNote'>
      <textarea spellCheck="false" className="ta" cols="28" rows="9" value={t} onChange={changeHandler}/>
      <div className="note-footer">
      <small>{characterLimit-t.length} Remaining</small>
      <button className="save" onClick={saveNotesHandler}>Save</button>
      </div>
      </div>

     {
      text.map((note,index)=>{
        return (
          <Note 
          // key={index}  This will cause problem while editing some stuff,or in other bigger projects
          id={index}
          key={note.id}       // We will use index of the map method,coz if we random,then index wont match
          text={note.text2}
          date={note.date}
          deleteNote={deleteNoteHandler}
          editNote={editHandler}
       /> )
      })
    }

     </div>
    </div>
    </React.Fragment>
    )
  }
  

export default App