import React, { useState } from 'react';
import axios from 'axios';
import "./components/otherComponent/login.css";
import padlock from "./assets/padlock.png";
import email from "./assets/email.png";
import {useNavigate} from "react-router-dom"
function Login(){
    const date = new Date().getFullYear().toString();
    const [eemail, setemail] = useState('')
    const [passwd, setpasswd] = useState('')
    const [messages,setmessages] = useState({
        sms: '',
        bole: true, 
    })
    const navigate = useNavigate()
    const  login = async (e)=>{
        e.preventDefault();
        try { await axios.post('/login', {eemail,passwd}).then((response)=> {
            if (response != null){
                if(response.data.message === "loggedin"){
                     navigate("/dashclient")   
                }else if(response.data.message === "company"){
                    navigate("/dashboardcompany")
                }
                else if(response.data.message === "lecture"){
                    navigate("/DashboardLecture")
                }
                else{
                    setmessages({
                        sms: response.data.message,
                        bole:false
                       
                    })
                }
            }
        })}
        catch(error){
            if (error){
                console.log(error)
            }
        }
    }

    
    return (
        <>
        <div className="loginall">
            <div className="combiner">
            <div className="flghead">
                <span>LOGIN</span>
            </div>
            <div className="mlogin">
                <form className="form" onSubmit={login}>
                    <div className="email">
                        <input type="email" value={eemail}  id="email" placeholder ="Email or Phone" onChange={ (e) =>{ setemail( e.target.value )}} />
                        <img src={email} alt="" />
                    </div>
                    <div className="password">
                        <input type="password" name="password" id="" onChange={ (e) =>{ setpasswd( e.target.value )}} placeholder='Password' required/>
                        <img src={padlock} alt="" />

                    </div>
                    <div className={messages.bole ? "messaging" : "mesactive"}>
                       {messages.sms}
                    </div>
                    <div className="sublinks">
                        <input type="submit" name="login" id="login" value="LOGIN" required />
                        <a href="/signin"  >SIGNIN</a>
                    </div>
                </form>
                <a href="#" className='forgetp'>Forget Password?</a>

            </div>
            <div className="blogin">
                <div className="aboutlink"><span>Contact Us</span>
                <span>Privacy</span></div>
                <span>&copy; LinkedIntern All rights reserved. ({date})</span>

            </div>
            </div>


        </div>
        
        </>
    );
}

export default Login;
