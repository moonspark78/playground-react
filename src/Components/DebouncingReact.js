import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';




const pinAPI = `https://api.postalpincode.in/pincode/`;


export const DebouncingReact = () => {
  
  const [pin, setPin] = useState("");



    useEffect(() => {
        const debouncing = setTimeout(() =>{
          axios.get(pinAPI + pin).then((res) =>{
            console.log(res.data[0].PostOffice);
          }).catch((error) =>{
            console.log(error);
          })
        },2000);

        return () =>{
          clearTimeout(debouncing);
        }
    },[pin])




  return (
    <>
        <h1 style={{textDecoration : "underline", color: "red", fontFamily: "cursive"}}>Debouncing React</h1>
        <div>
            <input onChange={(e) => setPin(e.target.value)} placeholder='Enter your Pin-Code' style={{border: "solid 1px black", width: "190px"}}/>
        </div>
    </>
  )
}
