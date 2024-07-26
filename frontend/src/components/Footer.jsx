import React from 'react';
import "./otherComponent/Footer.css";
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook-logo.png';
import telephone from '../assets/telephone.png';
import email from '../assets/communication.png';

const Footer = () => {
    const date = new Date().getFullYear().toString();
    return (
        <>
       <section className="footerallfooter">
        <section className="footerfooter"> 
          <section className="footerleft">
            <span className='footerhcomp'>About Company</span>
            <hr />
            <span><a href="">About</a></span>
            <span><a href="">Contact us</a></span>
            <span><a href="">Help</a></span>
            <span><a href="">FAQs</a></span>
            

          </section>
          <section className="footermiddle">

          </section>
          <section className="footerright">
          <span className='footerhcomp'>Social Media</span>
            <hr />
            <span className="footersocial"><img className='footerexlinks' src={instagram} alt="" /><a href="">instagram</a></span>
            <span className="footersocial"><img className='footerexlinks' src={email} alt="" /><a href="">linkedintern@gmail.com</a></span>
            <span className="footersocial"><img className='footerexlinks' src={facebook} alt="" /><a href="">facebook</a></span>
            <span className="footersocial"><img className='footerexlinks' src={telephone} alt="" /><a href="">0780803306</a></span>
          </section>
        </section>
        <div className="footercopyright">
         <hr className="footercopyr" />
         <span className='footerrights'>&copy; LinkedIntern All rights reserved. ({date})</span>
        </div>
        
       
        </section>
        </>
    );
}

export default Footer;
