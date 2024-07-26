import React,{ useState,useContext } from 'react';
import proImage from '../dashassets/user.png';
import logo from '../dashassets/lastlog.png';
import "./Headercompdash.css";
import { Link } from 'react-router-dom';
import {datacontext } from '../DashCompany';

const Header = () => {
    const [menu,setMenu] = useState(false);
    function handleMenu(){
        setMenu(!menu);
    }

    const users = useContext(datacontext)


    return (
        <>
        <div className={menu? "comphider compacthider" : "comphider"} onclick={handleMenu}></div>
        <div className="compheader">
            <div className="comptheside">
                <img className="compourlogo" src={logo} alt="menu icon" 
                height="34px" />
                &nbsp;
                <span>LinkedIntern</span>
            </div>
            <div className="compsearch">
                <form action="" method="get">
                    <input type="text" placeholder='Search Instituntion'  />\
                    <button>Search</button>
                </form>
                
            </div>
            
            
              <Link to="companyprofile" className="compprofile">  <span Style="text-transform: capitalize;">{users[0]}</span> &nbsp;
              <img id="compprofileimg" src={proImage} alt="" srcset="" />
              </Link>
            

        </div>

       
        </>
    );
}

export default Header;
