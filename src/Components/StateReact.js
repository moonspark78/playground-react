import React, { useState } from 'react'

export const StateReact = () => {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount(count+1)
    }



  return (
    <div className='App'>
        <h1>{count}</h1>
        <button onClick={increment}>increment the button</button>
    </div>
  )
}
