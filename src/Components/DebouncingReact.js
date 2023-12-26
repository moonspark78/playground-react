import React from 'react'
import axios from 'axios';




const pinAPI = `https://api.postalpincode.in/pincode/`;


export const DebouncingReact = () => {
    const searchPin = (value) =>{
        axios.get(pinAPI + value).then((response) =>{
          console.log(response);
        })
    };








  return (
    <>
        <h1 style={{textDecoration : "underline", color: "red", fontFamily: "cursive"}}>Debouncing React</h1>
        <div>
            <input onChange={(e) => searchPin(e.target.value)} placeholder='Enter your Pin-Code' style={{border: "solid 1px black", width: "190px"}}/>
        </div>
    </>
  )
}
