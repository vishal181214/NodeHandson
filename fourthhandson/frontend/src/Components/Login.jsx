import React,{useEffect, useState} from 'react'
import '../style.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function Login() {
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const [data,setData] = useState();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    useEffect(()=>{
        fetch("/home")
        .then(res => res.json())
        .then(data => setData(data))
        console.log(data);
    },[])

    // async function handleSubmit (){
    //     console.log(email,password);
    //     try{
    //         await axios.post("/Login",{
    //             email,password
    //         })
    //     }
    //     catch(error){
    //         console.log(Error);
    //     }
    // }

  return (
    <div className='form'>
        <Link to='/RegistrationForm'><button type="submit" style={{marginLeft:"80%"}} className="btn">Register</button></Link>
        <div className='form-body'>
            <div className="email">
                <label className="form__label" htmlFor="email">Email </label>
                <input  type="email" id="email" name='email' className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" htmlFor="password">Password </label>
                <input className="form__input" name='password' type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
            </div>
        </div>
        <button type="submit"  className="btn">LogIn</button>
        <p>{data}</p>
        {/* <p>{data.age}</p> */}
    </div>
  )
}
