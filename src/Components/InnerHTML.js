import React from 'react'

export const InnerHTML = () => {
    let data = `<p>This is my. Home</p>`







  return (
    <>
        <h1 style={{textDecoration : "underline", color: "red", fontFamily: "inherit"}}>InnerHTML</h1>
        <div className='App'>
        {data}
        </div>
    </>
  )
}
