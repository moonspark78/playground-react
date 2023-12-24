import React from 'react'


export const DynamicInputs = () => {
  return (
    <div className='App'>
        <h1>Dynamic Inputs</h1>
        <div className='input-container'>
            <input placeholder='Name'/>
            <input placeholder='Age'/>
            <input placeholder='Years of Experience'/>
        </div>
        <button>Add New Group</button>
    </div>
  )
}
