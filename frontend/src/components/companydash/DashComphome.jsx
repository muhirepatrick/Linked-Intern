import React, {useState,useEffect,useContext} from 'react';
import "./Dashcomp.css";
import companyimage from "../dashassets/user.png";
import loading from "../dashassets/loading.gif";
import {datacontext} from "../DashCompany"
import zeru from "../dashassets/collaboration.jpg"; 
import {
    Link,
    Outlet,
    useNavigate
} from "react-router-dom";
import axios from 'axios';
const DashComphome = () => {
    // const useremail = useContext(datacontext)
    // const compemail = useremail[2]
    // const navigate = useNavigate()
    // const [isAuthenticated, setIsAuthenticated] = useState(null);
    // const [names,setNames] = useState(null);
    // const [popop,setPopop] = useState(false)
    // const [gotdata,setGotdata] = useState([])
    // console.log("trying to understand",isAuthenticated)
    // useEffect(() => {
    //     const loggin = async () => {

    //              await axios.get('/gettingApplicant').then((response) => {
    //                 if(response){
    //                     console.log("my response of home ",response)
    //                     setNames(response.data)
    //                     setIsAuthenticated(true);
    //                 }
    //             }).catch((error)=>console.error('Error fetching auth status:', error))
    //     };
    //     loggin();
    // },[])
    // const searcher = async ()=>{
    //     console.log("doing search")
    //     console.log("email",compemail)
    // }

    // if(isAuthenticated === null){
    //     searcher()
    //     return <div><img className = "comploading" src={loading} alt="loading..." srcset="" /></div>
    // }

    // function handlerejaccept(id,decisio){
    //     axios.post("/appdecisions",{userid : id,decision:decisio}).then((response)=>{
    //         if(response.data.back == "rejected"){
    //             alert("Rejected")
    //             window.location.reload()
    //         }
    //         if(response.data.back == "rccepted"){
    //             alert("Accepted")
    //             window.location.reload()
    //         }
    //     })    
    // }
    // function handledecision(dat){
    //     setGotdata(dat)
    //     setPopop(true)
    // }
    const [inform,setInform] = useState(null)
    useEffect(()=>{
        axios.get("/gettingApplicant").then((response)=>{
            if(response.data.length>0){
                console.log("dash response:",response)
                console.log("dash response:",response.data.length)
                setInform(response.data)
            }
        }).catch((error)=>{})
    },[])
    const [pushh,setPushh] = useState([])
    const [dialogue,setDialogue] = useState(false)
    return (
        <div className="comphandlepers">
            { /* <dialog open={popop} >
            <div className='compinnerdiv'>
            <div className='compclose' onClick={()=>{setPopop(!popop)}}>CLOSE</div>
            <div className='compndani' >
                
            
                <div className="compdescdialogue">
                <div className="comppicname comppicdialogue">
               
               <img className = "comppic comppicdialogue" src={companyimage} alt="company picture" srcset="" />
              </div>
              <div className="compdescrip compdecdialogue">
              <span className="compname compnamedialogue">{}{gotdata[2]}</span>
               <span className="complocation complocationdialogue">Study at: {gotdata[3]}/{} </span>
               <span>Department: {gotdata[4]}</span>
               <span>Option: {gotdata[5]}</span>
               <p className="compsumddesc compsumddescdialogue"><span><b>Description of {gotdata[2]}</b></span> 
               <br /> {gotdata[7]}</p>
              </div>
                
              <div className="compdowndesc">
                 <div className='compdocum'>Available documents: <br/> {}</div>
                <div className='comphiddendecision'> <button onclick = {handlerejaccept(gotdata[0],"compAccepted")} className="comppositionz">Accept</button>
                 <button onClick ={handlerejaccept(gotdata[0],"compRejected")} className="compreject">Reject</button></div>
              </div>
              </div>
                 </div>
            </div>
            </dialog>
           {names.length!=null && names.length>0 ? names.map((data,i)=>{
            return  <div className="comppersondash">
                
            <div className="compalldesc">
            <div className="picname">
          
           <img className = "compcomppic" src={companyimage} alt="" srcset="" />
          </div>
          <div className="compcompdescrip">
          <span className="compcompname">{data.names.charAt(0).toUpperCase()+data.names.substring(1)}</span>
           <span className="complocation">Study at:{data.collage}/{} </span>
           <p className="compsumddesc"> {data.personalcv.slice(0, 170)}...</p>
          
          </div>
            
          <div className="compdescside">
             <button onClick={() =>handledecision([data.id,data.requester,data.names,data.collage,data.department,data.options,data.company_name,data.personalcv,data.filename,data.dates])} className='compposition'>View more</button>
          </div>
          </div>
             </div>
           }) :<div Style="width:95%; height:100%; display: flex;flex-direction: column; align-items: center">
           <img className = "" Style="width: 35%; height:; border-radius: 50%;box-shadow: 3px 2px 10px 19px lightgray" src={zeru} alt="" srcset="" />
           <span Style="font-size:110%;font-weight:bold;">Intern's applications will appear here!<br/>
           </span>
           <span Style="font-size:100%;font-weight:bold;color:;margin-top:10px"> There is no application yet. </span>
           <Link to="/dashboardcompany/postinternship"Style="font-size:110%;font-weight:bold;color:blue;margin-top:10px;padding:10px;background-color:lightblue;"> Make post to Apply.. </Link>
      
      </div>}


               */}
               {pushh.length< 1 ? "" :<dialog open={dialogue} className="compdialog">
               <div className='compinnerdiv'>
               <button className='compclose' onClick={()=>{setDialogue(!dialogue)}}>CLOSE</button>
               <div className='compndani'>
                <div className="compdescdialogue">
                <div className="comppicname comppicdialogue">
               
               <img className = "comppic comppicdialogue" src={companyimage} alt="company picture" srcset="" />
              </div>
              <div className="compdescrip compdecdialogue">
              <span className="compname compnamedialogue">{pushh[0].department}{pushh[0].department}</span>
               <span className="complocation complocationdialogue">Study at: {pushh[0].collage}/{pushh[0].department} </span>
               <span>Department: {pushh[0].department}</span>
               <span>Option: {pushh[0].option}</span>
               <p className="compsumddesc compsumddescdialogue"><span><b>Description of {pushh[0].names}</b></span> 
               <br /> {pushh[0].personalcv}</p>
              </div>
              <div className="compdowndesc">
                 <div className='compdocum'>Available documents: <br/> {}</div>
                <div className='comphiddendecision'> <button  className="comppositionz">Accept</button>
                 <button  className="compreject">Reject</button></div>
              </div>
              </div>
                 </div>
                </div>
               </dialog>}
                {inform == null? <div Style="width:95%; height:100%; display: flex;flex-direction: column; align-items: center">
           <img className = "" Style="width: 35%; height:; border-radius: 50%;box-shadow: 3px 2px 10px 19px lightgray" src={zeru} alt="" srcset="" />
           <span Style="font-size:110%;font-weight:bold;">Intern's applications will appear here!<br/>
           </span>
           <span Style="font-size:100%;font-weight:bold;color:;margin-top:10px"> There is no application yet. </span>
           <Link to="/dashboardcompany/postinternship"Style="font-size:110%;font-weight:bold;color:blue;margin-top:10px;padding:10px;background-color:lightblue;"> Make post to Apply.. </Link>
      
      </div> : inform.map((data,i)=>{
            return  <div className="comppersondash">
                
            <div className="compalldesc">
            <div className="comperspicname">
           <img className = "compcomppic" src={companyimage} alt="" srcset="" />
          </div>
          <div className="compcompdescrip">
          <span className="compcompname">{data.names.charAt(0).toUpperCase()+data.names.substring(1)}</span>
           <span className="complocation">Study at:{data.collage}/{} </span>
           <p className="compsumddesc"> {data.personalcv.slice(0, 170)}...</p>
          </div>
          <div className="compdescside">
             {/* <button onClick={() =>handledecision([data.id,data.requester,data.names,data.collage,data.department,data.options,data.company_name,data.personalcv,data.filename,data.dates])} className='compposition'>View more</button> */}
             <button onClick={()=>{setPushh([data]) 
                setDialogue(true);
                console.log(data)
             }} className='compposition' >more</button>
          </div>
          </div>
            </div>
           })} 
        </div>
    );
}
export default DashComphome;