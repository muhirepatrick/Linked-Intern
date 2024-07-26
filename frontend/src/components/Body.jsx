import React from 'react';
import "./Body.css";
import happy from '../assets/happy.webp';
import company from '../assets/leadership.png';


const Body = () => {
    return (
        <>

        <div className="bodybody">
            <section className='bodycircle'> 
     {/* <img src={happy} alt="happy" className="happy" /> */}

            <section className='bodycircle1'>

            </section>
            </section>
            <div className="bodyanotherside">
            <span className="bodymyweb">
                <legend>L</legend>inked <legend>I</legend>ntern</span>
            <br />
            <p className="bodymydesc">Our website provide many product that are needed to more different people
we are generally welcoming you on this platform its pleasure to work with 
more people including you just sign in and access all website features and 
functionality..</p>
<br />
<a className="bodycontinue" href="/login">CONTINUE..</a>
</div>
</div>

    <div  className="bodycompanies">
        <div className="bodycompdesc">
    
        <div className="bodyfirstcomp">
        <img src={company} alt="company" className='bodycompany' />
        <span>PUBLIC COMPANIES</span>
        <a href="/login" className='bodyaccess'>ACCESS</a>

        </div>
    <div className="bodyfirstcomp">
    <img src={company} alt="company" className='bodycompany' />
    <span>PRIVATE COMPANIES</span>
    <a href="/login" className='bodyaccess'>ACCESS</a>
    
    </div>
    <div className="bodyfirstcomp">
    <img src={company} alt="company" className='bodycompany' />
    <span >
     FOREIGN COMPANIES 
    </span>
    <a href="/login" className='bodyaccess'>ACCESS</a>
    </div>
    </div>

    </div> 
   

<p className="bodymyparag">
    Access any company that is available near you at any location in country
don't lose this opportunity to access any company in Rwanda through 
this program welcome.
    </p>
 <div className="bodyabout">
    <span>ABOUT US</span>
    <hr className="bodyhr" />
    <div className="bodyabparag">
    The internship portal provides internship  for students and connect them
to the companies to collaborate with them. For students, it is an invaluable 
resource to gain hands-on experience in their chosen fields and unlock their
 potential. They can discover and apply to a wide range of internship programs 
from top companies and industry leaders, building their professional network and 
finding the perfect match for their skills and interests. For employers, the portal offers
access to a pool of highly skilled and motivated interns, streamlining the recruitment 
process and providing fresh perspectives and innovative ideas to strengthen their teams. 
    </div>
    <div className="bodymoreabout">
        <p className="bodyp">FOR MORE INFORMATION.. </p> 
        <a className='bodymore' href="">MORE...</a>
    </div>
    
 

</div>

        
        </>
    );
}

export default Body;
