import React, {useState} from 'react';
import './lecturedash/LectureDash.css';
import {
    Link,
    Outlet,useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

import Headerdash from './dashcomp/Headerdash';

const DashLecture = () => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const logging = async () => {
            try {
                const response = await axios.get('/companydashboard', { withCredentials: true });
                if(response.data.status != "ok"){
                    navigate("/login")

                }
                else if(response.data.status === "ok"){
                    setIsAuthenticated(true);

                }
            } catch (error) {
                console.error('Error fetching auth status:', error);
            }
        };
        logging();
    },[])
    
    if(isAuthenticated === null){
        return <div>hello</div> 
    }

    const date = new Date().getFullYear().toString();
    
    
    
    

    return (
    
         <div className="allin">
             <Headerdash />
             <div className="thebody">
                 <div className="bodyside">
                <nav className="sidelinks" >
                <Link to = "">Dashboard </Link>
                <Link to = "Lecturehistory">History</Link>
                <Link to = "Lecturelogbook">Logo Book</Link>
                <Link to = "Lectureapplication">Application</Link>
                <Link to = "Lectureprofile">Personal Profile</Link>
                </nav>
                     <a href="" id="logout">Logout</a>
       
                 </div>
                 <div className="thecontent">
           <Outlet />
                 </div>
             </div>
             <footer>
             <div className="copyright">
          <hr className="copyr" />
          <span className='rights'>&copy; LinkedIntern All rights reserved. ({date})</span>
         </div>
             </footer>
         </div>
        
            
           
       
    );
}

export default DashLecture;
