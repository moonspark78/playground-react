import React from 'react'

export const ProfileContext = ({setName}) => {






  return (
    <div>
      <h1>ProfileContext</h1>

      <button onClick={() => setName("Laura")}>Change the Name</button>
    </div>
  )
}
