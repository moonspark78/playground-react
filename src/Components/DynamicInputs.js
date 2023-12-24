import React, { useState } from 'react'


export const DynamicInputs = () => {
    const [inputs, setInputs]= useState({});

    const getInputValue = (data) =>{
        let {name, value} = data.target;
        let input = {[name]: value};
        setInputs({...inputs, ...input});
    };
    console.log(inputs);





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
