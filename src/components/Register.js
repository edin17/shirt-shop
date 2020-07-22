import React ,{useState}from 'react';

import axios from 'axios';




const Register = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [email,setEmail]=useState()


const fSubmit=()=>{

    axios.post('/users/add',{
        
            email:email,        
            username:username,
            password:password

        
    })
    .then(()=>window.location.assign('/signin'))

    
}



    return <div className="signin-box">
        <h3>SignIn</h3>
        <form>
            <input className="sign-input" type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/><br></br>             
            <input className="sign-input" type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/><br></br>
            <input className="sign-input" type="text" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/><br></br>
            <button onClick={fSubmit}>SignIn</button>
        </form>
        
        
    </div>;



}
export default Register;