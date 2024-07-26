import React from 'react';
import "./Lectureprofile.css"
import userprofile from '../dashassets/user.png'
const Profile = () => {
    return (
       
            <div className="profileall">
                <div className="proimage">
                <img src={userprofile}    />
                <button>Edit</button>
                </div>
                <div className="proinformation">
                <h1>this is lecture one</h1>
                    
                </div>
            </div>
        
    );
}

export default Profile;
