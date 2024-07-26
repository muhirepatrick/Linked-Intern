import React from 'react';
import proImage from '../dashassets/user.png';
import logo from '../dashassets/lastlog.png';
import "./Headerdash.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [menu,setMenu] = useState(false);
    function handleMenu(){
        setMenu(!menu);
    }


    return (
        <>
        <div className={menu? "hider acthider" : "hider"} onclick={handleMenu}></div>
        <div className="header">
            <div className="theside">
                <img className="ourlogo" src={logo} alt="menu icon" 
                height="34px" />
                &nbsp;
                <span>LinkedIntern</span>
            </div>
            <div className="search">
                <form action="" method="get">
                    <input type="text" placeholder='Search Instituntion'  />\
                    <button>Search</button>
                </form>
                
            </div>
            
            
              <Link to="person" className="profile">  <span>User Name</span> &nbsp;
              <img id="dashprofileimg" src={proImage} alt="" srcset="" />
              </Link>
            

        </div>
        </>
    );
}

export default Header;
