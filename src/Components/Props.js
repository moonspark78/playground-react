import React, { useState } from 'react'
import {Child} from "./Child"

export const Props = () => {
    const [name, setName] = useState("Souli");
    const changeName = (value) =>{
        console.log(value);
        setName(value);
    };



  return (
    <div>
        <Child valueOfProps={name} changeName={changeName}/>
    </div>
  )
}
