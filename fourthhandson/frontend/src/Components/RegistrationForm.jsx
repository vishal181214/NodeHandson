import React, {useState} from 'react';
import '../style.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function RegistrationForm() {
    const [firstName, setFirstName] = useState();
    const [cellno, setCellNo] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "cellno"){
            setCellNo(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    async function handleSubmit (){
        console.log(firstName,cellno,email,password);
        try{
            await axios.post("/RegistrationForm",{
                firstName,cellno,email,password
            })
        }
        catch(error){
            console.log(Error);
        }
    }

    return(
      <div className="form">
        <Link to='/Login'><button type="submit" style={{marginLeft:"80%"}} className="btn">LogIn</button></Link>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">Name </label>
                  <input className="form__input" type="text" name="firstName" id="firstName" value={firstName} onChange = {(e) => handleInputChange(e)}  placeholder="First Name"/> 
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Cell No </label>
                  <input className="form__input" type="text" name="lastName" id="cellno" value={cellno}   onChange = {(e) => handleInputChange(e)} placeholder="Mobile Number"/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input className="form__input" type="email" name="email" id="email"   value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password" name="password" id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
          </div>
          <div className="footer">
                <button onClick={()=>handleSubmit} type="submit" className="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;
