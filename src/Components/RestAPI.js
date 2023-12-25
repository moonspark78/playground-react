import React from 'react'
import axios from 'axios'






export const RestAPI = () => {
    // Post, Get, Put, Delete
    const postData = () =>{
        axios.post("https://65899f2f324d4171525942ec.mockapi.io/users", {
            name: "Alice",
            age: 23,
            hobbies: ["Poetry", "Cooking", "Travelling", "Coding", "Piano"],
        })
    };








  return (
    <div>
         <h1 style={{textDecoration : "underline", color: "red", fontFamily: "inherit"}}>RestAPI</h1><br/><br/><br/>
        <button onClick={postData} style={{borderRadius: "5px", width: "90px"}}>POST Data</button>
    </div>
  )
}
