import React, { useState } from 'react';
import axios from 'axios';
import locationdata from './dashassets/locations/locationdata.json'

const Companysign = () => {

    //handle location 
    const [proo,setProo] = useState("East")
    const [distname,setDistname] = useState("Bugesera")
    const [sectorname,setSectorname] = useState("BugeseraRweru")
    const [cellname,setCellname] = useState("Nkanga")
    const [villagename,setVillagename] = useState("")
    const [distr,setDistr] = useState(true)
    const [sector,setSector] = useState(true)
    const [cell,setCell] = useState(true)
    const [village,setVillage] = useState(true)
    
    function handledistr(dat){
        if(dat!= ""){
            setDistr(false)
            setSector(true)
            setCell(true)
            setVillage(true)
            setProo(dat)
            setMydata({...mydata, province: dat})
        } 
    }
    function handlesector(dat){
        if(dat!= ""){
            setSector(false)
            setCell(true)
            setVillage(true)
            setDistname(dat)
            setMydata({...mydata, district: dat})
        } 
    }
    function handlecell(dat){
        if(dat!= ""){
            setCell(false)
            setVillage(true)
            setSectorname(dat)
            setMydata({...mydata, sector: dat})
        } 
    }
    function handlevillage(dat){
        if(dat!= ""){
            setVillage(false)
            setCellname(dat)
            setMydata({...mydata, cell: dat})
        } 
    }
    function handlevillages(dat){
        if(dat!= ""){
            console.log(dat)
            setVillagename(dat)
            setMydata({...mydata, village: dat})
            
        }
    }
   
    // form handle
    const [mydata,setMydata] = useState({
        companyName : '',
        companyType : '',
        companyDepartment : '',
        companyAbbreviation : '',
        companyBranch: '', 
        compPhone : "",
        province: "",
        district :"",
        sector :"",
        cell: "",
        village: "",
        compEmail : "",
        compPerFname : "",
        compPerLname : "",
        compPerEmail : "",
        compRole : "",
        compTitle : "",
        compPassword : "",
        compConfirmPass: "",
    })
     //message from backend
     const  [messageofback,setmessageofback]= useState('')

    function handlecompany(e){
        e.preventDefault();
        console.log(mydata)
        axios.post("/company",{mydata}).then((res)=>{
            console.log(mydata)
            console.log(res)
        }).catch((err)=>{console.log(err)})
    }
    return (

            <div className="insttAll">
              
              <form onSubmit={handlecompany}>
          <div className="compinfor">
              <div className="compDetails">
              <h1>Contacts & Company Information</h1>
              <div className="">
              <label htmlFor="cname">Company name</label> <input type="text" name='cname' id="cname" onChange={(e)=>{setMydata({...mydata, companyName: e.target.value})} } />
              </div>
              <br />
              <div className=""><label htmlFor="ctype">Company type</label> <select name="ctype" id="ctype" onChange={(e)=>{setMydata({...mydata, companyType: e.target.value})} }>
                  <option value="">Choose type</option>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                  <option value="civil">Civil society</option>
              </select>
              </div>
              <br />

              <div className="">
              Business department <select name="cDepart" id="cDeparte" onChange={(e)=>{setMydata({...mydata, companyDepartment: e.target.value})}}>
                  <option value="">Choose Department</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="ICT">ICT</option>
                  <option value="Energy">Energy</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Mining">Mining</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Financial services">Financial services</option>
                  <option value="Health Services">Health Services</option>
                  <option value="Construction">Construction</option>
                  <option value="Eductaion">Eductaion</option>
                  <option value="other">other</option>
              </select>
              </div>
              <br />    
              <div className="">
              <label htmlFor="abbrev">Company Abbreviation:</label>  <input type="text" name="abbrev" id="abbrev" onChange={(e) =>{setMydata({...mydata, companyAbbreviation: e.target.value})}}/>  
              </div>
               <br />
              <div className="">
              <label htmlFor="branches">Company Branches: </label>
              <input type="number" placeholder='Example: 10' name='branc' id="branc" onChange={(e) =>{setMydata({...mydata,companyBranch : e.target.value})}} />
              </div>
              <br />
              <div className="">
              <label htmlFor="cemail"> Email: </label>
              <input type="cemail" name="cemail" id="cemail" placeholder='youremail@gmail.com' onChange={(e) =>{setMydata({...mydata, compEmail : e.target.value})}} />
              </div>

              <br />
              <div className="">
              <label htmlFor="cphone">Phone: </label>
              <input type="number" placeholder='eg: 072030000' name='cphone' id='cphone' onChange={(e) =>{setMydata({...mydata, compPhone : e.target.value})}} required/>

              </div>
              </div>
              <div className="location">
              <h1>Location</h1>
              <select name="province" id="province" onChange={(e) => {if(e.target.value != ""){ setProo(e.target.value)
                handledistr(e.target.value)}
              }}  >
                  <option value="">Province</option>
                  {  Object.keys(locationdata[0]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  })}
                  
              </select>
              <br />
              <select name="district" id="district" disabled = {distr} onChange={(e) => {if(e.target.value != ""){ setDistname(e.target.value)
                handlesector(e.target.value)}
              }}>
                  <option value="">District</option>
                  {!distr ? Object.keys(locationdata[0][proo]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select name="Sector" id="Sector" disabled = {sector} onChange={(e) => {if(e.target.value != ""){ setSectorname(e.target.value)
                handlecell(e.target.value)}
              }} >
                  <option value="">Sector</option>
                  {!sector ? Object.keys(locationdata[0][proo][distname]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select name="cell" id="cell" disabled = {cell} onChange={(e) => {if(e.target.value != ""){ setCellname(e.target.value)
                handlevillage(e.target.value)}
              }} >
                  <option value="">Cell</option>
                  {!cell ? Object.keys(locationdata[0][proo][distname][sectorname]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select name="vilage" id="village" disabled = {village} onChange={(e) => {
                handlevillages(e.target.value)
                 setVillagename(e.target.value)}}>
                  <option value="">Village</option>
                  {!village ? (locationdata[0][proo][distname][sectorname][cellname]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }): "" }
              </select>

              </div>
              <div className="personInInst">
              <h1>Contacts of Company's personal information</h1>

<div className="">
<label htmlFor="cFirstN"> First Name: </label>
<input type="text" name='cFirstN' id="cFirstN" required  onChange={(e) =>{setMydata({...mydata, compPerFname : e.target.value})}} /> 
</div>
<br />
<div className="">
<label htmlFor="cLastN"> Last Name: </label>
<input type="text" name='cLastN' id="cLastN" required  onChange={(e) =>{setMydata({...mydata, compPerLname : e.target.value})}} />
</div>
<br />
<div className="">
<label htmlFor="cPersEmail"> Personal email: </label>
<input type="email" name='cPersEmail' id="cPersEmail" required  onChange={(e) =>{setMydata({...mydata, compPerEmail : e.target.value})}} />
</div>
<br />
<div className="">
<label htmlFor="persRole"> Role in company: </label>
<input type="text" name='persRole' id="persRole" required placeholder='example: Manager' onChange={(e) =>{setMydata({...mydata, compRole : e.target.value})}} />
</div>
<br />
<div className="">
<label htmlFor="persTittle"> Your tittle: </label>
<input type="text" name='persTittle' id="persTittle" required placeholder='example: Dr or Professor'  onChange={(e) =>{setMydata({...mydata, compTitle : e.target.value})}}/>
</div>
              </div>

           <div className="security">
           <h1>Password and Security</h1>
<div className="">
<label htmlFor="passWd">Password : </label>
<input type="password" name="passWd" id="passWd" onChange={(e) =>{setMydata({...mydata, compPassword : e.target.value})}} required/>
</div>
<br />
<div className="">
<label htmlFor="coPassWd">Confirm password : </label>
<input type="password" name="coPassWd" id="coPassWd" onChange={(e) =>{setMydata({...mydata, compConfirmPass : e.target.value})}} required/>
</div>
           </div>
              <br />
              <button className="signBtn">SIGNIN</button>
          </div>
          </form>
        </div>
        
    );
}

export default Companysign;
