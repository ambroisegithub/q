 import React from 'react'
 import "./nav.css"
 import { Link } from 'react-router-dom'
 function Nav() {
   return (
     <div>
        <header class="header">
        <div class="contain">
            <div class="row align-items-center justify-content-between">
               <div className='logo'>
              
               </div>
               <input type="checkbox" id="nav-check"/>
               <label for="nav-check" class="nav-toggler">
                  <span></span>
               </label>
               <nav class="nav">
                  <ul>
                     <li><a href="index.html" class="active">home</a></li>
                     <li><Link to="about">About</Link></li>
                     <li><a href="projects.html">Portfolio</a></li>
                     <li><a href="register.html">Login&Regiter</a></li>
                     <li><a href="portfolio.html">Blogs</a></li>
                     <li><a href="contact.html">Contact Us</a></li>
                  </ul>
               </nav>
            </div>
        </div>
      </header>
     </div>
   )
 }
 
 export default Nav
 