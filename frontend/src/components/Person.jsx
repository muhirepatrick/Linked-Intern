import React, { useState,useEffect } from 'react';
import axios from 'axios';
import locationdata from './dashassets/locations/locationdata.json';
import pro from './dashassets/locations/pro.json';
import districts from './dashassets/locations/district.json';
import { useNavigate, json } from 'react-router-dom';


function Person(){   
    const navigate = useNavigate()
    //  handle person form 
    const  [index,setindex]= useState('')
    const  [fname,setFname]= useState('')
    const  [lname,setLname]= useState('')
    const  [gender,setgender]= useState('')
    const  [email,setemail]= useState('')
    const  [phone ,setphone ]= useState('')
    const  [collage ,setCollage ]= useState('')
    const  [department ,setDepartment ]= useState('')
    const  [province ,setprovince ]= useState('')
    const  [district ,setdistrict ]= useState('')
    const  [sectors ,setsectors ]= useState('')
    const  [cells ,setcells ]= useState('')
    const  [passwd ,setpasswd ]= useState('')
    const  [confirmpass ,setconfirmpass ]= useState('')

    //message from backend
    const  [messageofback,setmessageofback]= useState({
        sms: '',
        bole: true,
    })


    const handleFormsubmit = async (e) =>{
        e.preventDefault();
        try {
        await axios.post("/add_user",
        { 
        index : index,
        first_name :fname,
        last_name :lname ,
        gender: gender,
        email: email,
        phone: phone ,
        collage: collage ,
        department: department,
        province: province ,
        district :district ,
        sector :sectorname,
        cell: cellname,
        village: villagename,
        password: passwd ,
        confirmpass: confirmpass})
        .then((res) => {
            console.log("sent")
            console.log("sent",province,district,sectorname,cellname,villagename)
            console.log(res.data.message)
            if(res.data.message != null){
                if(res.data.message=="data inserted"){
                    navigate("/login")
                }else{
                    setmessageofback({
                        sms: res.data.message,
                        bole:false
                    })
                }
                
            }
        })}
        catch(err) {console.log(err)}
    }

    // handle location data
    // const another = Object.keys(pro[0]).map(key =>key)
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
            setprovince(dat)
        } 
    }
    function handlesector(dat){
        if(dat!= ""){
            setSector(false)
            setCell(true)
            setVillage(true)
            setdistrict(dat)
        } 
    }
    function handlecell(dat){
        if(dat!= ""){
            setCell(false)
            setVillage(true)
            setSectorname(dat)
        } 
    }
    function handlevillage(dat){
        if(dat!= ""){
            setVillage(false)
            setCellname(dat)
        } 
    }
    function handlevillages(dat){
        setVillagename(dat)
    }

   

    

      
        
    return (
        <div>
              <div className="insttAll">
              
              <form onSubmit={handleFormsubmit}>
          <div className="compinfor">
              <div className="compDetails">
              <h1>Personal Information & Contacts </h1>
              <div className="">
              <label htmlFor="index">Index :</label> <input type="text" name='index' id="index"  onChange = {(e)=> setindex({index : e.target.value})} required />
              </div>
              <br />
              <div className="">
              <label htmlFor="pfname">First name :</label> <input type="text" name='pfname' id="pfname" onChange = {(e)=> setFname({ fname: e.target.value})} required />
              </div>
              <br />
              <div className="">
              <label htmlFor="plname">Last name :</label> <input type="text" name='plname' id="plname" onChange = {(e)=> setLname({ lname: e.target.value})} required />
              </div>
              <br />
              <div className=""><label htmlFor="pGender">Gender</label> <select name="pGender" id="pGender" onChange = {(e)=> setgender({gender: e.target.value})} required>
                  <option value="">Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
              </div>
              <br />
              <div className="">
              <label htmlFor="pemail"> Email: </label>
              <input type="pemail" name="pemail" id="pemail" placeholder='youremail@gmail.com' onChange = {(e)=> setemail({email: e.target.value})} required />
              </div>

              <br />
              <div className="">
              <label htmlFor="pphone">Phone: </label>
              <input type="number" placeholder='eg: 072030000' name='pphone' id='pphone' required onChange = {(e)=> setphone({ phone: e.target.value})}/>

              </div>
              <br />
              <div className="">
              Collage: <select name="perscollage" id="perscollage" onChange={(e)=>{setCollage(e.target.value)}} required>
                  <option value="">Choose your Collage </option>
                  <option value="IPRC-Musanze">IPRC-Musanze</option>
                  <option value="IPRC-Kigali">IPRC-Kigali</option>
                  <option value="IPRC-huye">IPRC-huye</option>
                  <option value="IPRC-Gishari">IPRC-Gishari</option>
                  <option value="IPRC-Ngoma">IPRC-Ngoma</option>
                  <option value="IPRC-Karongi">IPRC-Karongi</option>
                  <option value="IPRC-Tumba">IPRC-Tumba</option>
                  <option value="other">other</option>
              </select>
              </div>
              <br />
              <div className="">
              Department <select name="persDepart" id="persDepart" onChange={(e)=>{setDepartment(e.target.value)}} required>
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
                  <option value="Eductation">Eductaion</option>
                  <option value="other">other</option>
              </select>
              </div>
              </div>
              <div className="location">
              <h1> Personal Location</h1>
              <select required name="province" id="province" onChange={(e) => {if(e.target.value != ""){ setProo(e.target.value)
                handledistr(e.target.value)}
              }}  >
                  <option value="">Province</option>
                  {  Object.keys(locationdata[0]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  })}
                  
              </select>
              <br />
              <select required name="district" id="district" disabled = {distr} onChange={(e) => {if(e.target.value != ""){ setDistname(e.target.value)
                handlesector(e.target.value)}
              }}>
                  <option value="">District</option>
                  {!distr ? Object.keys(locationdata[0][proo]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select required name="Sector" id="Sector" disabled = {sector} onChange={(e) => {if(e.target.value != ""){ setSectorname(e.target.value)
                handlecell(e.target.value)}
              }} >
                  <option value="">Sector</option>
                  {!sector ? Object.keys(locationdata[0][proo][distname]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select required name="cell" id="cell" disabled = {cell} onChange={(e) => {if(e.target.value != ""){ setCellname(e.target.value)
                handlevillage(e.target.value)}
              }} >
                  <option value="">Cell</option>
                  {!cell ? Object.keys(locationdata[0][proo][distname][sectorname]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select required name="vilage" id="village" disabled = {village} onChange={(e) => {handlevillages(e.target.value)
                 setVillagename(e.target.value)}}>
                  <option value="">Village</option>
                  {!village ? (locationdata[0][proo][distname][sectorname][cellname]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }): "" }
              </select>


              </div>
              

           <div className="security">
           <h1>Password and Security</h1>

<div className="">
<label htmlFor="passWd">Password : </label>
<input type="password" name="passWd" id="passWd" required onChange = {(e)=> setpasswd({ passwd: e.target.value})}/>
</div>
<br />
<div className="">
<label htmlFor="coPassWd">Confirm password : </label>
<input type="password" name="coPassWd" id="coPassWd" required onChange = {(e)=> setconfirmpass({ confirmpass: e.target.value})}/>
</div>
           </div>
              <br />
            <div className={messageofback.bole ? "messaging" : "mesactive"}>
                       {messageofback.sms}</div>


              <button className="signBtn">SIGNIN</button>

          </div>
          </form>
        </div>
        </div>
    );
}

export default Person;
