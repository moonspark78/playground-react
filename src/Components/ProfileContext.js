import React from 'react'
import { useContext } from 'react'
import {UserData} from "../Contexts/GlobalContext";


export const ProfileContext = () => {
  let {setName} = useContext(UserData)





  return (
    <div>
      <button onClick={() => setName("Messi")}>Change the Name</button>
    </div>
  )
}
