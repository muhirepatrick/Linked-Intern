import React, {useState,useEffect,createContext} from 'react';
import './otherComponent/Dashperson.css';
import {
    Link,
    Outlet,useNavigate
} from "react-router-dom";
import hisImage from "./dashassets/5582302.png"
import logImage from "./dashassets/logbook.png"
import dashImage from "./dashassets/2201563.png"
import reportImage from "./dashassets/2201563.png"
import applicationImage from "./dashassets/942799.png"
import profileImage from "./dashassets/561743.png"
import axios from 'axios';
import Headerdash from './dashcomp/Headerdash';
export const studentData = createContext()
const Dashclients = () => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [students,setStudents] = useState([]);
    useEffect(() => {
        const logging = async () => {
            try {
                const response = await axios.get('/studentdashboard', { withCredentials: true });
                if(response.data.status === "bad"){
                    navigate("/login")
                }
                else if(response){                   
                    setIsAuthenticated(true)
                    setStudents([response.data[0].reg_index,response.data[0].first_name,response.data[0].province,response.data[0].district,response.data[0].sector,response.data[0].email,response.data[0].collage,response.data[0].options,response.data[0].department,response.data[0].year]);
                }
            } catch (error) {
                console.error('Error fetching auth status:', error);
            }
        };
        logging();
    },[])
    const date = new Date().getFullYear().toString();
    if(isAuthenticated === null){
        return <div>hello</div> 
    }
    const handlelogout= async()=>{
        await axios.get('/logout').then((response)=>{
            console.log("logout",response)
        })
    }
    return (
    
         <div className="persallin">
            <studentData.Provider value = {students}>
             <Headerdash />
             <div className="persthebody">
                 <div className="persbodyside">
                <nav className="perssidelinks" >
                <Link to = "" Style="display: flex;align-items: center; justify-content:start"><img src={dashImage} alt="" Style="width:25px;height:; margin-right:5px" /> Dashboard </Link>
                <Link to = "history" Style="display: flex;align-items: center; justify-content:start"><img src={hisImage} alt="" Style="width:25px;height:; margin-right:5px" /> History</Link>
                <Link to = "logbook" Style="display: flex;align-items: center; justify-content:start"><img src={logImage} alt="" Style="width:25px;height:; margin-right:5px" />Logo Book</Link>
                <Link to = "#" Style="display: flex;align-items: center; justify-content:start"><img src={reportImage} alt="" Style="width:25px;height:; margin-right:5px" />IAP Report</Link>
                <Link to = "application" Style="display: flex;align-items: center; justify-content:start"><img src={applicationImage} alt="" Style="width:25px;height:; margin-right:5px" />Application</Link>
                <Link to = "person" Style="display: flex;align-items: center; justify-content:start"><img src={profileImage} alt="" Style="width:25px;height:; margin-right:5px" />Personal Profile</Link>
                </nav>
                     <a href="" onClick={handlelogout} id="perslogout">Logout</a>
              
                 </div>
                 <div className="persthecontent">
           <Outlet />
                 </div>
             </div>
             <footer>
             <div className="perscopyright">
          <hr className="perscopyr" />
          <span className='persrights'>&copy; LinkedIntern All rights reserved. ({date})</span>
         </div>
             </footer>
             </studentData.Provider>
         </div>
        
            
           
       
    );
}

export default Dashclients;
