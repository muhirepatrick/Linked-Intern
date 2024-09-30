import React from 'react';
import { useEffect, useState } from 'react';
import "./historycomp.css";
import axios from 'axios';
import companyimage from "../dashassets/company.png";

const History = () => {
    const [historyData,setHistoryData] = useState([]);
    const [historyController,setHistoryController] = useState(false)
    useEffect(() => {
        gettinghistory()
    },[])
    const gettinghistory= async ()=> {
        await axios.get("/gettingApplicant").then((response) => {
            console.log(response);
            if(response.data.length>1){
                
            }
            setHistoryData(response.data)
        })
    }

    return (
        <div className="comphisthand">
            {historyController? 
             <div className="compdata">
                <div className="compdatainfo">
                    <div className="compcompanyName">Company name</div>
                    <div className="compdate">00/00/0000</div>
                </div>
                <div className="compdatadesc">
                    <div className = "compimg">
                        <img src={companyimage} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam temporibus vel autem quaerat placeat delectus cupiditate accusamus consequuntur est, culpa itaque officia ducimus hic possimus eveniet deserunt consequatur esse.</p>
                    <div className="">
                        Date
                    <div className="compresult">ACCEPTED/REJECTED</div>
                    </div>

                </div>
            </div>: "no data"}
        </div>
    );
}

export default History;
