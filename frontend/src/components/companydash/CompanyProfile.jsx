import React, { useEffect, useState } from 'react';
import "./companyprofile.css"
import loader from '../dashassets/giphy.gif' 
import axios from 'axios'
import userprofile from '../dashassets/user.png'
const CompProfile = () => {
    const [myprofile,setMyprofile] = useState(null)
    useEffect(() => {
         const getprofiles = async ()=>{
            console.log("doing something")
            await axios.get("/companyprofile").then((response) => {
               if(response){
                console.log(response); 
                setMyprofile(response.data)
               }
               else{
                console.log("none")
               }
             }).then((result)=>{
                if (result){
                    console.log(result)
                }
             }).catch((error) => {console.log(error)})
         }
         
         getprofiles();
    },[])
    return (
            <div className="compprofileall">
                <div className="compproimage">
                <img src={userprofile}    />
                <button>Edit</button>
                </div>
                <div className="compproinformation">
                {myprofile!==null? <table Style="width: 500px">
                    <tr>
                            <td colSpan={2} Style="text-align:center;font-weight: bold; border-bottom: 1px solid black" >Company {myprofile[0].company_name} profile </td> 
                           
                        </tr>
                        <tr>
                            <td>company Name: <span Style="text-transform: capitalize;"> {myprofile[0].company_name} { myprofile[0].last_name}</span> </td> 
                            <td>Abbreviation:{myprofile[0].abbreviation} </td>
                        </tr>
                        <tr>
                            <td>Company type: {myprofile[0].company_type} </td> 
                            <td>Telephone N<sup><u>0</u></sup>: {myprofile[0].company_phone} </td>
                        </tr>
                       
                       
                        <tr>
                            <td>Department: {myprofile[0].department} </td> 
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Company type: {myprofile[0].company_type} </td> 
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
                            <td>Your Email: {myprofile[0].company_email}  </td> 
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

export default CompProfile;
