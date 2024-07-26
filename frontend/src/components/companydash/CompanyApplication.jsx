import React,{useContext,useState} from 'react';
import "./Compapplication.css"
import appimage from '../dashassets/creativity.png'
import locationdata from '../dashassets/locations/locationdata.json';
import { datacontext } from '../DashCompany';
import axios from 'axios';
const Application = () => {
    const datas = useContext(datacontext)
    const [province,setProvince] = useState("East")
    const [district,setDistrict] = useState("Bugesera")
    const [sector,setSector] = useState("BugeseraRweru")
    const [districtchange,setchange] = useState(true)
    const [sectors,setSecChange] = useState(true)
    const [poster,setPoster] = useState({
        compemail: datas[2],
        compname: datas[0],
        province:province,
        district:district,
        sector:sector,
        department: datas[3],
        position: "",
        date: "",
        time: "",
        requirements: "",
        telephone:"",

    })
    function handledistr(dat){
        if(dat!= ""){
            setchange(false)
            setSecChange(true)
            setProvince(dat)
            setPoster({...poster,province: dat})
        } 
    }
    function handlesector(dat){
        if(dat!= ""){
            setSecChange(false)
            setDistrict(dat)
            setPoster({...poster,district: dat})
        } 
    }
    const handlepost = async (e) => {
        e.preventDefault();console.log(poster)
        await axios.post("/posting",poster).then((response) => {
            if(response){
                alert("Thanks post has been sended. wait for the applicant")
                window.location.reload();
            }

        })
    }
    return (
        <div>
            <div className ="compdashap">
                <span>MAKE A POST</span>
                <div className ="compappconten">
                   <div className="compcontword">
                   <img src= {appimage} alt="" srcset="" Style="height:200px;width:200px"/>
                   <p><b> <i>Make post for internships.</i></b></p>
                   </div>
                   <form action="" method="post" onSubmit={(e) => handlepost(e)}>
                    <div className="">
                    <label htmlFor="cemail" >Company Email:</label>
                    <input type="text" Style="padding:10px;border :none;background:none;" value={datas[2]} onChange={e => {setPoster({...poster,compemail: e.target.value});}}/>
                    </div>
                    <div>
                    <label htmlFor="cname" >Company Name:</label>
                    <input type="text" Style="background:none; border:none;padding: 10px"  value={datas[0]} onChange={e => {setPoster({...poster,compename: e.target.value})}} />
                    </div>
                    <select name="province" id="compprovince" onChange={(e) => {if(e.target.value != ""){ setProvince(e.target.value)
                    handledistr(e.target.value)
            }
              }}  >
                  <option value="">Province of branch..</option>
                  {  Object.keys(locationdata[0]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  })}
                  
              </select>
              <br />
              <select name="district" id="compdistrict" disabled = {districtchange} onChange={(e) => {if(e.target.value != ""){ setDistrict(e.target.value)
                handlesector(e.target.value)}
              }}>
                  <option value="">District of branch..</option>
                  {!districtchange ? Object.keys(locationdata[0][province]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select>
              <br />
              <select name="Sector" id="compSector" disabled = {sectors} onChange={(e) => {if(e.target.value != ""){ setSector(e.target.value); setPoster({...poster, sector: e.target.value})}
              }} >
                  <option value="">Sector of branch..</option>
                  {!sectors ? Object.keys(locationdata[0][province][district]).map(propertyname =>{
                   return <option key={propertyname} value={propertyname}>{propertyname}</option>
                  }) : ""}
              </select> 
                   <div className="compdo" Style="margin-top: 20px; display:flex; flex-direction: row;align-items: center" >
                   <label htmlFor="department">Department:</label>
                    <input type="TEXT" name="" value={datas[3]} onChange={e => {setPoster({...poster,department: e.target.value})}} />
                   </div>
                   <div className="compdo" Style="margin-top: 20px; display:flex; flex-direction: row;align-items: center" >
                   <label htmlFor="position"> Available Positions:</label>

                    <input type="number" name="" placeholder="example: 10" onChange={e => {setPoster({...poster,position: e.target.value})}}  />
                   </div>
                   <div className="do" Style="margin-top: 20px; display:flex; flex-direction: row;align-items: center">
                   <label htmlFor="date"> Date:</label>
                    <input type="date" name="date" onChange={e => {setPoster({...poster,date: e.target.value})}} />
                   </div>
                   <div className="do" Style="margin-top: 20px; display:flex; flex-direction: row;align-items: center" >
                   <label htmlFor="time"> Time:</label>
                    <input type="time" name="time" onChange={e => {setPoster({...poster,time: e.target.value})}} />
                   </div>
                    <div className="comptextarea" >
                        <textarea name="" id="" placeholder='WRITE THE REQUIREMENTS...' cols="30" rows="10" onChange={e => {setPoster({...poster,requirements: e.target.value})}}></textarea>
                    </div>

                    <div className="compdo" Style="margin-top: 20px; display:flex; flex-direction: row;align-items: center">
                   <label htmlFor="telephone"> Telephone:</label>
                    <input type="tele" name="tele"  onChange={e => {setPoster({...poster,telephone: e.target.value})}} />
                   </div>
                    <input type="submit" value="MAKE POST" name="posting" id="compposting" />
                   
                   </form>

                </div>

            </div>
        </div>
    );
}

export default Application;
