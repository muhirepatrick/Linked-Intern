import React from 'react';
import menuImage from '../assets/menu.png';
import close from '../assets/close.png';
import logo from '../assets/lastlog.png';
import "./otherComponent/Header.css";
import { useState } from 'react';

const Header = () => {
    const [menu,setMenu] = useState(false);
    function handleMenu(){
        setMenu(!menu);
    }

    return (
        <>
        <div className={menu? "hiders acthiders" : "hiders"} onclick={handleMenu}></div>
        <div className="homeheaderall">
            <div className="homethesider">
                <img className="homeourlogo" src={logo} alt="menu icon" 
                height="34px" />
                &nbsp;
                <span>LinkedIntern</span>
            </div>

            <div className={menu ? "homelink" : "homelink homeactive"}>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="#">GUIDELINE</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="/signin">SIGNIN</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </div>
            
            <img className = "homeimge" src={menu ? close : menuImage} alt="menu icon" height="50px" width="50px" onClick={handleMenu} />
            
        </div>
        </>
    );
}

export default Header;
