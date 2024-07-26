import React, { useContext, useEffect, useState } from 'react';
import { studentData } from '../Dashclients';
import "./profile.css"
import userprofile from '../dashassets/user.png'
import loader from '../dashassets/giphy.gif' 
import axios from 'axios';
const Profile = () => {
    const user = useContext(studentData)
    const [myprofile,setMyprofile] = useState(null)
    useEffect(() => {
         axios.get("/personalprofile").then((response) => {
            console.log(response); 
            setMyprofile(response.data)
         })
    },[])
    return (
       
            <div className="persprofileall" Style="height: 900px">
                <div className="persproimage" Style="margin-bottom: 10px">
                <img className="persimgprofile" src={userprofile}    />
                <button>Edit</button>
                <br />
                
                </div>
                <span Style="width:300px; height:40px;text-align:center;font-weight:bold;text-transform: capitalize;">{myprofile!= null? myprofile[0].first_name:""} { myprofile!= null? myprofile[0].last_name :""}</span>
                <div className="presproinformation" Style="height:600px" >
                    
                  {myprofile!==null? <table Style="width: 500px">
                        <tr>
                            <td>Names: <span Style="text-transform: capitalize;"> {myprofile[0].first_name} { myprofile[0].last_name}</span> </td> 
                            <td>Reg n<sup><u>0</u></sup>: {myprofile[0].reg_index} </td>
                        </tr>
                        <tr>
                            <td>Gender: {myprofile[0].gender} </td> 
                            <td>Telephone N<sup><u>0</u></sup>: {myprofile[0].phone} </td>
                        </tr>
                        <tr>
                            <td>Your email: {myprofile[0].email} </td> 
                            <td> </td>
                        </tr>
                        <tr>
                            <td colSpan={2} Style="text-align:center;font-weight: bold; border-bottom: 1px solid black" >Study at {myprofile[0].collage} </td> 
                           
                        </tr>
                        <tr>
                            <td>Department: {myprofile[0].department} </td> 
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Option: {myprofile[0].options} </td> 
                            <td> </td>
                        </tr>
                        <tr>
                            <td>year of study: {myprofile[0].year} </td> 
                            <td> </td>
                        </tr>
                        <tr>
                            <td colSpan={2} Style="text-align:center;font-weight: bold; border-bottom: 1px solid black" >Your location </td> 
                           
                        </tr>
                        <tr>
                            <td>Province: {myprofile[0].province}  </td> 
                            <td>District : {myprofile[0].district} </td>
                        </tr>
                        <tr>
                            <td>Sector: {myprofile[0].sector}  </td> 
                            <td>Cell : {myprofile[0].cell} </td>
                        </tr>
                        <tr>
                            <td>village: {myprofile[0].village}  </td> 
                            <td> </td>
                        </tr>
                        <tr>
                            <td colSpan={2} Style="text-align:center;font-weight: bold; border-bottom: 1px solid black" >Security and privacy</td> 
                           
                        </tr>
                        <tr>
                            <td>Your Email: {myprofile[0].email}  </td> 
                            <td> </td>
                        </tr>
                        <tr>{console.log(myprofile[0].password.length)}
                            <td>Password: ****
                            
                             </td> 
                            <td> </td>
                        </tr>
                    </table>: <div Style="height: 100%;width: 100%; display:flex;flex-direction:column;align-items:center; justify-content:start;"><img src={loader}alt="" width="100px" height="100px"></img><span Style="color:green;font-size:20px">Loading..</span></div>}
                </div>
            </div>
        
    );
}

export default Profile;
