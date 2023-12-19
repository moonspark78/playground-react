import React, { useState } from 'react'
import {Child} from "./Child"

export const Props = () => {
    const [name, setName] = useState("Souli");
    const changeName = () =>{
        setName("alice")
    };



  return (
    <div>
        <Child valueOfProps={name} changeName={changeName}/>
    </div>
  )
}
