import React, { useState } from 'react'
import axios from 'axios'


const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        if(username=="p" && password=="p"){
            console.log("username: ", username)
            console.log("password: ", password)
        }
    }

    return(
        <div>
           <div>    
            <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="username" onChange={e => setUsername(e.target.value)}></input>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}></input>
            <br></br>
            <button>Login</button>
            </form> 
           </div>
        </div>
        )
}       

export default Login;