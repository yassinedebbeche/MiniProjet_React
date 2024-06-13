import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Service/Service';
import Contact from '../Contact/Contact';

function Navbar(){
    return(
    <div>
        
    <header id="header" class="fixed-top d-flex justify-content-center align-items-center header-transparent">

    <nav id="navbar" class="navbar">
      <ul>
              <li><a href='#' className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href='#about' className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href='#resume' className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href='#portfolio' className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href='#services' className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href='#contact' className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>

       </header>
            <Home  />
            <main id="main">
                <About />
                <Resume />
                <Portfolio />
                <Services />
                <Contact />
            </main> 
          
        </div>
 
    )

}

export default Navbar;