import React, { useState } from 'react'
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa"

export const SearchBar = () => {
    const [input, setInput] = useState("")

    const fetchData = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
    };

    const handleChange = (value) =>{

    };



    
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input 
            placeholder='Type to Search ...' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
        />
    </div>
  )
}