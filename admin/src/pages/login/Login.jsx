import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { useState } from 'react'

function Login() {
    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")
    const dispatch = useDispatch();

    const handleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password})
      }

  return (
    <div style={{display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"100vh",
    flexDirection:"column"}}>
        <input style={{padding:10,marginBottom:20}} type='text' placeholder='username' onChange={(e)=>setusername(e.target.value)}></input>
        <input style={{padding:10,marginBottom:20}} type='password' placeholder='password' onChange={(e)=>setpassword(e.target.value)}></input>
        <button style={{padding:10,width:100}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login