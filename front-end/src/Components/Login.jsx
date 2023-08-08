import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/login', values)
            .then(res => {
                console.log(res.data)
                if(res.data=="Success")
                {
                    navigate('/home');
                }else{
                    alert("No");
                }
            })
    }

    return(
        <div>
           <div>    
            <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input type="email" name='email' onChange={handleInput}></input>
            <p>Password</p>
            <input type="password" name="password" onChange={handleInput}></input>
            <br></br>
            <button>Login</button>
            </form> 
           </div>
        </div>
        )
}       

export default Login