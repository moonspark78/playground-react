import React from 'react'
import { useContext } from 'react'
import {UserData} from "../Contexts/GlobalContext";


export const Settings = () => {
    let {name, age} = useContext(UserData);

  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}
 