import React from 'react';
import proImage from '../dashassets/user.png';
import logo from '../dashassets/lastlog.png';
import { studentData } from '../Dashclients';
import "./Headerdash.css";
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';

const Header = () => {
    const [menu,setMenu] = useState(false);
    const students = useContext(studentData)
    function handleMenu(){
        setMenu(!menu);
    }


    return (
        <>
        <div className={menu? "pershider persacthider" : "pershider"} onclick={handleMenu}></div>
        <div className="persheader">
            <div className="perstheside">
                <img className="persourlogo" src={logo} alt="menu icon" 
                height="34px" />
                &nbsp;
                <span>LinkedIntern</span>
            </div>
            <div className="perssearch">
                <form action="" method="get">
                    <input type="text" placeholder='Search Instituntion'  />
                    <button>Search</button>
                </form>
                
            </div>
            
            
              <Link to="person" className="persprofile">  <span Style="text-transform: capitalize;">{students[1]}</span> &nbsp;
              <img id="persdashprofileimg" src={proImage} alt="" srcset="" />
              </Link>

        </div>
        </>
    );
}

export default Header;
