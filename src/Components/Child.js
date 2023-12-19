import React from 'react'

export const Child = ({valueOfProps, changeName}) => {
  return (
    <div>
        <h1>{valueOfProps}</h1>
        <button onClick={() => changeName("Hello this is elodie")}>Change Name</button>
    </div>
  )
}
