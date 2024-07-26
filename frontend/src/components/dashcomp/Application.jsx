import React,{useContext, useEffect, useState} from 'react';
import "./application.css"
import appimage from '../dashassets/application.png'
import { useParams } from 'react-router-dom';
import { studentData } from '../Dashclients';
import axios from 'axios';
const Application = () => {
    const contexting = useContext(studentData)
    const id = useParams()
    const [compdata,setCompData] = useState()
    const [comp,setComp] = useState(false)
    const [cemail,setcEmail] = useState()
    const [cname,setCname] = useState()
    const [cv,setCv] = useState("")
    useEffect(() =>{
        if(Object.keys(id).length>0){ 
            const comp = async ()=>{
                await axios.post("/apply",id).then((response)=>{

                    setCompData(response.data)
                    setComp(true)
                    setCname(response.data[0].company_name)
                    setcEmail(response.data[0].company_email)
                })

            }
            comp()
        }},[])

    
        const [whom,setWhom] = useState(contexting[0])
        const [file,setFile] = useState("")
        const submitapplication = async(e)=>{
            e.preventDefault();
            const formData ={
                cname:cname,
                cemail:cemail,
                whom:whom,
                cv:cv,
                file:file
            }
            console.log(formData);
            const result = await axios.post("/uploadfiles",formData,{
              headers: { 'Content-Type': 'multipart/form-data'}
            });
            console.log(result);
          }
        
   
    return (
        <div>
            <div className ="persdashappp">
                <span>Application</span>
                <div className ="persappcontentt">
                   <div className="perscontwordss">
                   <img src= {appimage} alt="" srcset="" />
                   <p>Make an application for internships.</p>
                   </div>
                   <form action="" method="post" onSubmit={(e)=>submitapplication(e)} >
                    <div className="tonamee">
                    <label htmlFor="to">To:</label>
                    <input type="text" placeholder="Company Name" value={cname} onChange={(e)=>{setCname(e.target.value)}} />
                    </div>

                   <div className="persdocc">
                   <label htmlFor="document"> Registration document</label>
                    <input type="file" name="" id="" accept= "application/pdf" onChange={(e)=> {setFile(e.target.files[0])}} required />
                   </div>
                    <div className="perstextt">
                        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setCv(e.target.value); }  } ></textarea>
                    </div>
                    <input type="submit" value="APPLY" name="apply" id="persapplyy" />
                   
                   </form>

                </div>

            </div>
        </div>
    );
}

export default Application;
