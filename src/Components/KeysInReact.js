import React from 'react'

export const KeysInReact = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const details = [
        {
            name: "Ali",
            age: 36,
        },
        {
            name: "Elodie",
            age: 76,
        },
        {
            name: "Zoe",
            age: 22,
        },
        {
            name: "Théo",
            age: 38,
        }
    ];




  return (
    <div>
        <ul>
            {numbers.map((number) =>{
                return <li key={number}>{number}</li>
            })}
        </ul>

        <ul>
            {details.map((detail) =>{
                return <>
                <li>{detail.name}</li>
                <li>{detail.age}</li>
                </>
            })}
        </ul>
    </div>
  )
}
