import React, { useContext } from 'react'
import {UserData} from "../Contexts/GlobalContext";
import {Settings} from "./Settings"

export const HomeContext = () => {
  let {name} = useContext(UserData);


  return (
    <div>
      <h1>The Name is : {name}</h1>
      <Settings name={name}/>
    </div>
  )
}
