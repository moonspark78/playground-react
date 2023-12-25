import React from 'react'

export const InnerHTML = () => {
    let data = `<p style="font-size: 30px">This is my. Home</p>`
    let data2 = `<b style="font-size: 30px">This is my. Home</b>`







  return (
    <>
        <h1 style={{textDecoration : "underline", color: "red", fontFamily: "inherit"}}>InnerHTML</h1>
        <div className='App'>
            <div dangerouslySetInnerHTML={{__html: data}}></div>
            <div dangerouslySetInnerHTML={{__html: data2}}></div>
        </div>
    </>
  )
}
