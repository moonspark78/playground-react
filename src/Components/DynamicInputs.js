import React from 'react'


export const DynamicInputs = () => {
  return (
    <div className='App'>
        <h1>Dynamic Inputs</h1>
        <div className='input-container'>
            <input 
                placeholder='Name' 
                name='name'
                onChange={getInputValue}

                />
            <input 
                placeholder='Age' 
                name='age'
                onChange={getInputValue}

                />
            <input 
                placeholder='Years of Experience' 
                name='yoe'
                onChange={getInputValue}

                />
        </div>
        <button>Add New Group</button>
    </div>
  )
}
