import { useState } from 'react'
import './App.css'
import Form from "./Component/Form/Form";

function App() {

  const [NewNote,setNewNote] = useState({});
  const [NoteList , setNoteList] = useState({});

  console.log(NewNote)
  return (
    <div>
      <form newNoteSetter={setNewNote} setNoteList={setNoteList} NewNote={NewNote}></form>
    </div>
  )
}

export default App;
