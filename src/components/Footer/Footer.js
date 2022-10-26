import React, { useState } from 'react';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
//<div className="footer navbar navbar-expand-lg mt-auto navbar-dark bg-dark">
<div className="col-sm-12 d-flex justify-content-center pt-4">
      {/* <div className="container-fluid"> */}
        <a
          //className="navbar-brand"
          href="https://github.com/wasim202"
          target="_blank"
        >
          <a href='https://github.com/wasim202'>
          <img src={github} alt='GitHub profile'></img>
        </a>
        </a>
        <a
          //className="navbar-brand"
          href="https://www.linkedin.com/in/wasim-mohammad-22a53590/"
          target="_blank"
        >
          <a href='https://www.linkedin.com/in/wasim-mohammad-22a53590/'>
             <img src={linkedin} alt='LinkedIn profile'></img>
         </a>
        </a>
    
      </div>
    //</div>
    );
}

export default Footer;