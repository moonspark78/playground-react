import React, { useEffect, useState } from 'react'
import axios from 'axios'






export const RestAPI = () => {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    // Post, Get, Put, Delete
    const postData = () =>{
        axios
        .post("https://65899f2f324d4171525942ec.mockapi.io/users", {
            name: name,
            age: 23,
            hobbies: ["Poetry", "Cooking", "Travelling", "Coding", "Piano"],
        })
        .then((res) =>{
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    };

    const updateData = (id) =>{
         console.log(id);
         axios
         .put("https://65899f2f324d4171525942ec.mockapi.io/users", {
            name: name,
            age: 56,
            hobbies: ["Boxing", "Cooking", "Soccer", "Coding", "Piano"],
         }, id)
         .then((res) =>{
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    };






    useEffect(() => {
        axios
        .get("https://65899f2f324d4171525942ec.mockapi.io/users", )
        .then((res) =>{
            setUsers(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])








  return (
    <div>
         <h1 style={{textDecoration : "underline", color: "red", fontFamily: "inherit"}}>RestAPI</h1><br/><br/><br/>
        <input style={{border: "solid 1px black", width:"200px"}} placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <button onClick={postData} style={{borderRadius: "5px", width: "90px", height: "30px"}}>POST Data</button>
        {
            users.map((user) =>{
                return (
                    <>
                        <h3>{`${user.id}. ${user.name}`}</h3>
                        <button onClick={() => updateData(user.id)} style={{borderRadius: "5px", width: "90px", height: "30px", color: "white"}}>Update</button>
                    </>
                )
            })
        }
    </div>
  )
}
