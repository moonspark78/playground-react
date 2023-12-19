import React, { useState } from 'react'

export const StateReact = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [array, setArray] = useState([
        {
            name: "Alice",
            age: 22,
        },
        {
            name: "Bob",
            age: 23,
        },
    ])
    const [object, setObject] = useState({
        name: "Bob",
        age: 42,
    })

    const increment = () =>{
        setCount(count+1);
        setIsVisible(!isVisible);
        setName("Souli");
    }



  return (
    <div className='App'>
        <h1>{count}</h1>
        <h1>{name}</h1>
        {isVisible ? (
            <h1>Visible</h1>
        ) : (
            <h1>Not visible </h1>
        )}
        <button onClick={increment}>Change States</button>
    </div>
  )
}
