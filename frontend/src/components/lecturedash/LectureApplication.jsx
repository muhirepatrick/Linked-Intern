import React from 'react';
import "./Lectureapplication.css"
import appimage from '../dashassets/application.png'

const Application = () => {
    return (
        <div>
            <div className ="dashapp">
            <h1>this is lecture one</h1>
                <span>Application</span>
                <div className ="appcontent">
                   <div className="contwords">
                   <img src= {appimage} alt="" srcset="" />
                   <p>Make an application for internships.</p>
                   </div>
                   <form action="" method="post">
                    <div className="toname">
                    <label htmlFor="to">To:</label>
                    <input type="text" placeholder="Company Name" />
                    </div>

                   <div className="doc">
                   <label htmlFor="document"> Registration document</label>
                    <input type="file" name="" id="" />
                   </div>
                    <div className="text">

                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <input type="submit" value="APPLY" name="apply" id="apply" />

                   
                   
                   </form>

                </div>

            </div>
        </div>
    );
}

export default Application;
