import React, { useState } from 'react';
import "./logbookcomp.css"
import stuImage from "../dashassets/OIP.png"
const Logobook = () => {
    const [interns,setInterns] = useState(null)
    return (
    <div className="compinternlogbok">
        {/* {interns!==null && interns.length > 0 ? <div></div>:
        <div className="compafteercomp">
            <img src={stuImage} alt="image of logbook"/>
            <span Style="font-weight: bold; font-size:17px;margin-top:-60px;">Your accepted interns will appear here! </span>
            </div>} */}
            logbookcomp
    </div>
    );
}
export default Logobook;