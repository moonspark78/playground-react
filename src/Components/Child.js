import React from 'react'

export const Child = ({valueOfProps, changeName}) => {
  return (
    <div>
        <h1>{valueOfProps}</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}
