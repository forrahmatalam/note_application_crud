import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const App = () => {

const [value, setValue] = useState({
    title:"",
    description: ""
})




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);

         //api call
let res =await axios.post("http://localhost:3000/notes/create",value)
console.log(res)

    setValue({
    title:"",
    description: ""


    
})

  }

 const handleChange = (e) => {
   setValue((prev)=>({...prev,[e.target.name]:e.target.value}))
 }

  
    
  return (
    <form onSubmit ={handleSubmit}  className=" gap-4 h-screen p-5 w-screen flex  items-center justify-center flex-direction flex-col">
        <input name="title" value={value.title || ""} onChange={handleChange} className="border-[0.5px] bg-green-900 text-[8px] border-black rounded-md px-4 py-2" type="text" placeholder="Enter Title" />
         <input name="description" value={value.description || ""} onChange={handleChange} minLength="20" required className="border-[0.5px] bg-green-900 text-[8px] border-black rounded-md px-4 py-2" type="text" placeholder="Enter Description" />
        <button className="bg-blue-600 text-[10px] text-white px-3 py-2 rounded-md">Add Note</button>
    </form>
  )
}

export default App