import React, { useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const SignIn = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState()


const fSubmit=async(e)=>{
    e.preventDefault();
    await axios.post('/users/login',{
        
        
            username:username,
            password:password
            
        
    })
    .then(res=>{
        console.log(res.data);
        if(username==='xxxxxx' && password==='xxxxxx'){
            window.location.assign('/admin')
        }else
        window.location.assign('/')
        
        
    }).catch(err=>{
        console.log(err)
    })




}
    return <div className="signin-box">

        <h3>SignIn</h3>
        <form action='/'>
            <input className="sign-input" type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/><br></br>
            <input className="sign-input" type="text" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/><br></br>
            <button onClick={fSubmit}>SignIn</button>
            </form>

       
        <Link to="/register"><p>or register</p></Link>
        
        
    </div>;
}





export default SignIn;

