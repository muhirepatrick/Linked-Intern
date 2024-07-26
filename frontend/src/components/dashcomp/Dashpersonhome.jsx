import React, { useState,createContext } from 'react';
import "./DashInst.css";
import companyimage from "../dashassets/company.png";
import zeroo from "../dashassets/companies.gif";
import axios from 'axios';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

export const contextintern = createContext();

const Dashpersonhome = () => {
  const [company,setCompany] = useState(null)
  useEffect( () =>{
     const datas =  async ()=>{
      await axios.get("/companies").then((response)=>{
        setCompany(response.data)
        console.log(response.data)
      })}
    datas()

  },[])
const [popop,setPopop] = useState(false)
const [podata,setPodata] = useState("")
  const handlesome = (e) => {

    setPopop(true)
    setPodata(e)
  }

 const handleinternships = ()=>{
  console.log(podata)
  }

    return (
        <div className="pershandlepers">
            <dialog className="persdialog" open={popop}  >
              <div className='persinnerdiv'>
                <div className='persclose' onClick={()=>{setPopop(!popop)}}>CLOSE</div>
              <div className='persndani' >  
            
            <div className="persdescdialogue">
            <div className="perspicname perspicdialogue">
           
           <img className = "perscomppic perscomppicdialogue" src={companyimage} alt="" srcset="" />
          </div>
          <div className="perscompdescrip perscompdecdialogue">
          <span className="perscompname perscompnamedialogue">{podata[0]}</span>
           <span className="perslocation perslocationdialogue">located at: {podata[1]}/{podata[2]} </span><br />
           <p className="perssumddesc perssumddescdialogue"><span><b>Internship Requirements</b></span> <br /> {podata[3]}</p>
           
          </div>
            
          <div className="persdowndesc">
             <div className='perspositions'>Available Position :{podata[4]} </div>
             <Link to={`/dashclient/application/${podata[5]}` } onClick={handleinternships} className="persgowing">Apply for Internship..</Link>
          </div>
          </div>
             </div>

             
                </div>
                
            </dialog>
{company!= null && company.length !=0? company.map(data=>{
  return <div className="perspersondash">

      <div className="persalldesc">
      <div className="perspicname">

     <img className = "perscomppic" src={companyimage} alt="" srcset="" />
    </div>
    <div className="perscompdescrip">
    <span className="perscompname">{data.company_name.charAt(0).toUpperCase()+data.company_name.substring(1)}</span>
     <span className="perslocation">{data.province}/{data.district} </span>
     <p className="perssumddesc"> {data.requirements.slice(0, 170)}...</p>

    </div>

    <div className="persdescside">
       <button className='persposition'>Position :{data.position}</button>
       <button onClick={() =>handlesome([data.company_name,data.province,data.district,data.requirements,data.position,data.id])} className="persmore">More..</button>
    </div>
    </div>
       </div>
    }):<div Style="width:100%; height:100%; display: flex;flex-direction: column; align-items: center">
           <img className = "" Style="width: 50%; height:; border-radius: 50%;" src={zeroo} alt="" srcset="" />
           <span Style="font-size:120%;font-weight:bold;color:">The company's posts will appear here!<br/>
           </span>
           <span Style="font-size:110%;font-weight:bold;color:;margin-top:10px"> There is no post yet. </span>
      
      </div>}

                
        </div>
    );
}

export default Dashpersonhome;
