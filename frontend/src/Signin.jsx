import { useState } from 'react';
import Header from './components/Header';
import { Link,Outlet } from 'react-router-dom';
import "./components/otherComponent/signin.css";


function Signin (){


    const [changer,setChanger] = useState(true);  

    return (
        <>
        <div className="sgnall">
        <Header></Header>
        <div className="sgncombiner">
            
            <div className="sgnhead">
                <Link to = "/signin" id ={changer ? 'pers' : 'instt' } onClick={()=>{setChanger(true)}}  className="pers"> PERSON</Link>
                <Link to = "/signin/company" id={changer ? 'instt'  : 'pers' }  onClick = {()=>{setChanger(false)}} className= 'instt' >INSTITUTION</Link>

            </div>
            <div className="sgnbody">
                
              <Outlet/>

            
              </div>
        </div>
        </div>
        </>
    );
}

export default Signin;
