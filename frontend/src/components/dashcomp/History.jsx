import React from 'react';
import "./history.css";
import companyimage from "../dashassets/company.png";

const History = () => {
    return (
        <div className="pershisthandle">
            <div className="persdatas">
                <div className="persdatainf">
                </div>
                <div className="persdatadescri">
                    <div className="persimg">
                        <img src={companyimage} alt="" />
                    </div>
                    <div>
                    <div className="perscompanyName">Company name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam temporibus vel autem quaerat placeat delectus cupiditate accusamus consequuntur est.</p> </div>
                    <div className="" >
                        <span Style="margin-bottom: 10px;" >Date: 00/00/000</span> 
                    <div className="persresult">ACCEPTED/REJECTED</div>

                    </div>


                </div>
            </div>


        </div>
    );
}

export default History;
