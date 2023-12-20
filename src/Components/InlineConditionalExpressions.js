import React, { useEffect } from 'react'

export const InlineConditionalExpressions = () => {
    useEffect(() => {
        let age = 26;
        let name = "Alice";
        if (age > 26){
            console.log("You are now old");
        }else if (name === "Alice" && age === 26){
            console.log("i'm 26 years old");
            console.log("Alice is my name");
        }else{
            console.log("Alice is not my name");
            console.log("Im less than 26 years old");
        }

        age > 26 ? console.log("You are now old") : name === "Alice" && age === 26 ? (
            <> 
                {console.log("i'm 26 years old")} 
                {console.log("Alice is my name")} 
            </>  
        ) :   
             <> 
                {console.log("i'm 26 years old")} 
                {console.log("Alice is my name")} 
            </>  
    },[]);
  return (
    <div>

    </div>
  )
}
