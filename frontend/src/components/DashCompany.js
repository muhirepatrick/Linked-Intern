import React, {useState,useEffect,createContext} from 'react';
import  './otherComponent/Dashcompany.css';
import {
    Link,
    Outlet,
    useNavigate
} from "react-router-dom";
import axios from 'axios';
import Headerdash from './companydash/Headercompdash';
import hisImage from "./dashassets/5582302.png"
import dashImage from "./dashassets/dassh.png"

export const datacontext = createContext();
const DashCompany = () => {
    const navigate = useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [names,setNames] = useState([]);

    function logoutcomp(){
        console.log("logout accessed ")
        axios.get('/logout').then((response)=>{
           console.log("logout",response)
           setIsAuthenticated(null);
           if(response.data.message === "destroyed"){
               console.log("destroy")
               navigate("/login")
           }
       })}
    useEffect(() => {
        const logger = async () => {
            console.log("loading..")
            try {
                const response = await axios.get('/companydashboard', { withCredentials: true });
                console.log("dash home response :"+response)
                if(response.data.status === "bad"){
                    navigate("/login")
                }
                else if(response){
                    console.log("my response in all",response.data)
                    setNames([response.data[0].company_name,response.data[0].company_type,response.data[0].company_email,response.data[0].department,response.data[0].province,response.data[0].district,response.data[0].sector,response.data[0].company_phone],response.data[0].company_type)
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error fetching auth status:', error);
            }
        };
        logger();
        console.log("loading..")
    },[])
    const date = new Date().getFullYear().toString();
    if(isAuthenticated === null){
        return <div>hello</div> 
    }
    return (
         <div className="compallin">
            <datacontext.Provider value ={names}>
             <Headerdash/>
             <div className="compthebody">
                 <div className="compbodyside">
                <nav className="compsidelinks" >
                <Link to = ""  Style="display: flex;align-items: center; justify-content:start"><img src={dashImage} alt="" Style="width:25px;height:; margin-right:5px" />Dashboard applicant </Link>
                <Link to = "companyhistory"  Style="display: flex;align-items: center; justify-content:start"><img src={hisImage} alt="" Style="width:25px;height:; margin-right:5px" /> History</Link>
                <Link to = "companyinterns"  Style="display: flex;align-items: center; justify-content:start"><img src={hisImage} alt="" Style="width:25px;height:; margin-right:5px" />Interns</Link>
                <Link to = "postinternship"  Style="display: flex;align-items: center; justify-content:start"><img src={hisImage} alt="" Style="width:25px;height:; margin-right:5px" />Post position</Link>
                <Link to = "companyprofile"  Style="display: flex;align-items: center; justify-content:start"><img src={hisImage} alt="" Style="width:25px;height:; margin-right:5px" />Personal Profile</Link>
                </nav>
                     <a href="" id="complogout" onClick= {logoutcomp} >Logout</a>
                 </div>
                 <div className="compthecontent"> 
           <Outlet />
                 </div>
             </div>
             <footer className="compfooter">
             <div className="compcopyright">
          <hr className="compcopyr" />
          <span className='comprights'>&copy; LinkedIntern All rights reserved. ({date})</span>
         </div>
             </footer></datacontext.Provider>
         </div>
    );
}
export default DashCompany;
