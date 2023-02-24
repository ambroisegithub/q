import React from 'react'
import "./Homepage.css"
import {Link} from "react-router-dom"
function Homepage() {
  return (
    <div className='homepage'>
      <div className="image1">
      
      <h1 className='title'>AMBROISE SENIOR DEVELOPER</h1>
     <p className='self'>I am a software developer with 10 years of experience in building software applications.
I have worked on various technologies and have a solid understanding of programming languages, software architecture, and development methodologies.
I am passionate about learning new technologies, problem-solving, and collaborating with cross-functional teams to deliver high-quality software solutions.</p>
      <Link to="/about" className='read'>Read Me</Link>   
      </div>
      <div className='services'>
        <h3 className='h3'>Servces Offers</h3>
        <div className='services-offers'>
          <p>
          I offer software development services for building scalable and robust applications to meet business requirements
.I specialize in full-stack development, using various technologies to develop responsive and user-friendly software solutions.
          </p>
        </div>
      {/* section services offers */}
        <section>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-hammer"></i>
            </div>
            <h3> Developing custom software applications</h3>
            <p>
            Developing custom software applications dear with create custom software applications that are tailored to meet specific business needs.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-brush"></i>
            </div>
            <h3>Web development</h3>
            <p> 
            Web development dears with build web applications, including front-end and back-end development, using a range of web technologies.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-wrench"></i>
            </div>
            <h3> Mobile app development</h3>
            <p>
            Mobile app development dears with how to create mobile applications for iOS and Android platforms using various programming languages and frameworks.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-truck-pickup"></i>
            </div>
            <h3> API development</h3>
            <p>
            API development belong with how to design and develop APIs (Application Programming Interfaces) that enable communication between different software applications.
            </p>
          </div>
        </div>
      
         <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-truck-pickup"></i>
            </div>
            <h3> E-commerce development</h3>
            <p>
            E-commerce development deals with create e-commerce websites and applications that enable online transactions and secure payment gateways.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-broom"></i>
            </div>
            <h3>Cloud computing</h3>
            <p>
            Cloud computing deals with to design and develop cloud-based software applications that can be accessed and used from anywhere with an internet connection.
            </p>
          </div>
        </div>
    
      </div>
    </section>
      </div>

      {/* contact us page */}

  <div className="contact-us">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,176C640,192,800,224,960,240C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
  <h1>Contact Us</h1>
  <div className="contactTitle">
    <p> I have several way that helps people  to get the services that every one needs around the world, If you want any services contact us, we are able and ready to help you</p>
  </div>
  
    <div  className="column1">
      <div className="row1">
<div className="card1">
  <div className="">
  <div class="mapouter"><div class="gmap_canvas"><iframe width="636" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Rwanda,northern%20provence,%20gicumbi,byumba&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
  </div>
</div>
<div className="card1">
  <input type={"text"} placeholder="Full Name"></input>
  <br></br>
  <input type={"text"} placeholder="Email"></input>
  <br></br>
  <input type={"text"} placeholder="Phone Number"></input>
  <br></br>
  <textarea type="text" cols="67" rows="7"  placeholder='Add your discription here'></textarea>
  <br></br>
  <button className='send'>Send</button>
</div>
      </div>
    </div>
 
  </div>
      
  <div className='footer_container'>
        <div className='footer'>
 <div className='cardFooter'>
<label>
  AMBROISE
</label>
 </div>
 <div className='cardFooter'>

</div>
<div className='cardFooter'>

</div>
<div className='cardFooter'>

</div>
        </div>
      
    </div>

    </div>
  
  )
}

export default Homepage
