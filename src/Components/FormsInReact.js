import React from 'react'
import "./FormsInReact.css"

export const FormsInReact = () => {
    const getInputs = (value, name) =>{
        console.log(name);
    }




  return (
    <div className='to'>
        <h1>Forms</h1>
        <div className='form'>
        <input 
            placeholder='Write your name' 
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name='name'
            type='text'
        />
            

        <input 
            placeholder='Write your age'
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name='age'
            type='number'
        />

        <input 
            placeholder='Write your Hobbies'
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name="hobbies"
            type='text'
        />

        <input 
            placeholder='Write your date'
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name='date'
            type='date'
        />

            
        <button>Submit</button>

        


        </div>
    </div>
   
  )
}
