import React, {useState} from "react";


const HomePage = () => {
const doFetch = async () => {
    const response = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email:'wow'})
    })
    const jsonedData = await response.json();
    console.log(jsonedData)
}

    return (
        <>
        <h1>welcome to front end</h1>
        <button onClick={doFetch}>fetchCall</button>
        </>
    )
}


export default HomePage;