import React, { useContext } from 'react'
import {UserData} from "../Contexts/GlobalContext";


export const ProfileContext = () => {
  let {setName} = useContext(UserData)





  return (
    <div>
      <h1>ProfileContext</h1>

      <button onClick={() => setName("Laura")}>Change the Name</button>
    </div>
  )
}
