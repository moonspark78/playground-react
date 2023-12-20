import React from 'react'

export const EventHandlingInReact = () => {

  const addNums = (num1, num2) =>{
    console.log(num1+ num2);
  };
  const getInput = (event) => {
    console.log(event.target.name);
  };





  return (
    <div>
      <input placeholder='add somthing ...' onChange={getInput} name='input'/> 
      <button onClick={() => addNums(2,2)}>Add Numbers</button>
    </div>
  )
}
