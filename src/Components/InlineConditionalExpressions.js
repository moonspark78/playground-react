import React, { useEffect } from 'react'

export const InlineConditionalExpressions = () => {
    let age = 28;
    let name = "Alie";
    useEffect(() => {
        let age = 28;
        let name = "Alie";
        /* if (age > 26){
            console.log("You are now old");
        }else if (name === "Alice" && age === 26){
            console.log("i'm 26 years old");
            console.log("Alice is my name");
        }else{
            console.log("Alice is not my name");
            console.log("Im less than 26 years old");
        } */

        age > 26 ? console.log("You are now old") : name === "Alice" || age === 26 ? (
            <> 
                {console.log("i'm 26 years old")} 
                {console.log("Alice is my name")} 
            </>  
        ) :  ( 
             <> 
                {console.log("Alice is not my name")} 
                {console.log("Im less than 26 years old")} 
            </>  
        )
    },[]);
  return (
    <div>
        {age > 26 ?(
            <h1>You are now old</h1>
            ) : name === "Alice" || age === 26 ? (
            <> 
                <h1>i'm 26 years old</h1>
                <h1>Alice is my name</h1>
            </>
        ) :  ( 
             <> 
                <h1>Alice is not my name</h1>
                <h1>Im less than 26 years old</h1>
            </>  
        )}
    </div>
  )
}
