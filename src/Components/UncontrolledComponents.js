import React, { createRef } from 'react'

export const UncontrolledComponents = () => {
    let name = React.createRef();
    let age = React.createRef();


    const getName = (event) =>{
        console.log(event.target.value);
    }
    const getAge = (event) =>{
        console.log(event.target.value);
    }


    const Submit = () =>{
        console.log(name.current.value);
        console.log(age.current.value);
    }

  return (
    <div className='cc'>
        <h1 style={{textDecoration : "underline", color: "red", fontFamily: "cursive"}}>Uncontrolled Components</h1>
        <hr/>


        {/* Uncontrolled Component */}
        {/* ICI le composant n'est pas rafraichie */}
        {/* <input placeholder='Name...' ref={name} />
        <input  placeholder='Age...' ref={age} /> */}

        {/* Controlled Component */}
        <input placeholder='Name...'  onChange={getName}/>
        <input  placeholder='Age...'  onChange={getAge}/>
        
        <button onClick={Submit} style={{borderRadius: "5px", marginLeft: "18px"}}>Submit</button>
    </div>
  )
}
