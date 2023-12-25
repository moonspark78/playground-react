import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const InnerHTML = () => {
    const [quill, setQuill] = useState("");

    let data = `<p style="font-size: 30px">This is my. Home</p>`
    let data2 = `<b style="font-size: 30px">This is my. Home</b>`

    const getQuillData = (value) =>{
        setQuill(value);
    };
    console.log(quill);





  return (
    <>
        <h1 style={{textDecoration : "underline", color: "red", fontFamily: "inherit"}}>InnerHTML</h1>
        <div className='App'>
            <div dangerouslySetInnerHTML={{__html: quill}}></div>
            <div dangerouslySetInnerHTML={{__html: data2}}></div>

            <br/><br/><br/><ReactQuill onChange={getQuillData}/>
        </div>
    </>
  )
}
