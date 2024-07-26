import React,{useState,useContext, useEffect} from 'react';
import "./logbook.css"
import { studentData } from '../Dashclients';
import axios from 'axios';
const Logobook = () => {
    const students = useContext(studentData)
    const [logbook,setLogbook] = useState({
        indexnum: students[0],
        email: students[5],
        collage: students[6],
        department: students[8],
        options: students[7],
        year: students[9],
        activity:"",
        tools:"",
        datedone:"",
        hours:"",
    })
    const [weeks,setWeeks] = useState(null)
    useEffect(()=>{
        const a = async ()=>{
            await axios.post("/logdata",logbook).then((response)=>{
                console.log(response)
                setWeeks(response.data)
            })
        }
        a()
    },[])
    const handleform = async(event)=>{
        event.preventDefault()
        await axios.post("/logbook",logbook)
        .then((response) => {console.log(response);alert("you day task added")})
        .catch((error) => {console.log("error found")})

    }
    return (
        <div>
            <div className="persmylogbooks">
                <span>LOGBOOK</span>
                <div className="perslogcontents">
                    <table border="1">
                        <tr>
                            <th>Day</th>
                            <th>Description of activity performed</th>
                            <th>Tools, machinery, equipment and methodology</th>
                            <th>N<sup><u>0</u></sup> of hours per day</th>
                        </tr>
                        
                       {weeks!= null ? weeks.map((day, i) =>{
                        return  <tr>
                        <td>{day.day}
                        </td>
                        <td>{day.activity}</td>
                        <td>{day.tools}</td>
                        <td>{day.hours}</td>
                    </tr>
                       }):""}
                       
                        <tr>
                            <td colSpan={3}>Total Hours</td>
                            <td> 0 hours</td>
                        </tr>

                    </table>


                    <div className="perstask">
                        <form action="" onSubmit={(e)=>handleform(e)}>
                           <div className="persactivity">
                           <label htmlFor="activity">Activity:</label>
                            <input type="text" name="activity" onChange={(e) => {
                                setLogbook({...logbook, activity: e.target.value})
                            }} placeholder="Enter the activity or task of the day." required />

                           </div>
                            <div className="perstools">
                            <label htmlFor="tools">Tools:</label>
                            <input type="text" name="tools" onChange={(e) =>{
                                setLogbook({...logbook,tools: e.target.value})
                            }} placeholder="Enter the tools used to perfom task of the day." required />

                            </div>

                            <div className="date" >
                                <label htmlFor="date">Date:</label>
                                <input type="date" name='date' onChange={(e)=>{
                                    setLogbook({...logbook, datedone: e.target.value})
                                }} id="persdate" required/>
                            </div>
                            <div className="pershours">       <div className="persdate" >
                                <label htmlFor="hours">Hours:</label>
                                <input type="number" name='hours' id="pershours" onChange={(e)=>{
                                    setLogbook({...logbook, hours: e.target.value})
                                }} placeholder="hours ex: 3" required/>
                            </div></div>
                            <input type="submit" value="Submit"  />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logobook;
