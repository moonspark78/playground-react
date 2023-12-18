import React, { useState } from 'react'

export const StateReact = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const increment = () =>{
        setCount(count+1)
        setIsVisible(true)
    }



  return (
    <div className='App'>
        <h1>{count}</h1>
        {isVisible ? (
            <h1>Visible</h1>
        ) : (
            <h1>Not visible </h1>
        )}
        <button onClick={increment}>increment the button</button>
    </div>
  )
}
