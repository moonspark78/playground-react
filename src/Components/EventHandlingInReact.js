import React from 'react'

export const EventHandlingInReact = () => {

  const addNums = () =>{
    console.log(2+2);
  };
  const getInput = (event) => {
    console.log(event.target);
  };





  return (
    <div>
      <input placeholder='add somthing ...' onChange={getInput} name='input'/> 
      <button onClick={() => addNums(2,2)}>Add Numbers</button>
    </div>
  )
}
