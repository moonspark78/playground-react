import React, { useState } from 'react'
import {Child} from "./Child"

export const Props = () => {
    const [name, serName] = useState("Souli")
  return (
    <div>
        <Child name={name}/>
    </div>
  )
}
