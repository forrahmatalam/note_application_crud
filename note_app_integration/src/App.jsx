
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import NoteCard from './components/NoteCard.jsx'




const App = () => {

const [value, setValue] = useState({
    title:"",
    description: ""
})

const [allNotes, setAllNotes] = useState([])


const [isDataForUpdate, setIsDataForUpdate] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (isDataForUpdate){
        //api call for updation
         let res =await axios.put(`http://localhost:3000/notes/${isDataForUpdate}`,value)
       console.log(res)
       console.log(isDataForUpdate)
    }else{
        //api call for creation
      let res =await axios.post("http://localhost:3000/notes/create",value)
       console.log(res)
    }
    setValue({
    title:"",
    description: ""
})
getAllNotes()
  }

 const handleChange = (e) => {
   setValue((prev)=>({...prev,[e.target.name]:e.target.value}))
 }

 let getAllNotes = async () => {
  try{
      let res = await axios.get("http://localhost:3000/notes/allNotes" )
    setAllNotes(res.data.data)

  }catch(err){
      console.log(err)
  }
}


useEffect(()=>{
  getAllNotes();
}
,[])




//Delete Api
let deleteNote = async (id) => {
  try{
      let res = await axios.delete(`http://localhost:3000/notes/${id}`)
      console.log(res)
      getAllNotes()
  }catch(err){
      console.log(err)
  }
}

//Edit Api
let updateNote = (note) => {
console.log(note)
setIsDataForUpdate(note._id)

setValue({
title:note.title,
description:note.description
})

};


  return (
   <div className="min-h-screen w-screen bg-gray-950 px-6 py-10 text-white">

     <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">

       <h1 className="text-3xl font-bold tracking-wide">
         Notes Application
       </h1>

       <form
         onSubmit={handleSubmit}
         className="flex w-full max-w-2xl flex-col gap-3 rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-xl"
       >
          <input
            name="title"
            value={value.title || ""}
            onChange={handleChange}
            className="rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
            type="text"
            placeholder="Enter Title"
          />

          <input
            name="description"
            value={value.description || ""}
            onChange={handleChange}
            minLength="20"
            required
            className="rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
            type="text"
            placeholder="Enter Description"
          />

          <button
            className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95"
          >
            Add Note
          </button>
       </form>

       <button
         onClick={getAllNotes}
         className="rounded-lg bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-yellow-700 active:scale-95"
       >
         Get All Notes
       </button>

       <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {
              allNotes.map((val)=>
                <NoteCard
                  key={val._id}
                  note={val}
                  deleteNote={deleteNote}
                  updateNote={updateNote}
                />
              )
          }
       </div>

     </div>

   </div>


  )
}

export default App
