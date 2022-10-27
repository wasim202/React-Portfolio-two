import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
      <div className="footer" id="footer">
      <h3 className="footerH3">Find me at...</h3>
      <div className="footerIconDiv">
        {/* GitHub icon link */}
        <a
          title="GitHub Profile"
          target="_blank"
          href="https://github.com/wasim202"
          className="iconAnchor"
        >
          <FaGithub className="footer-icon" />
        </a>
         {/* LinkedIn icon link */}
         <a
          title="LinkedIn Profile"
          target="_blank"
          href="https://www.linkedin.com/in/wasim-mohammad-22a53590/"
          className="iconAnchor"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        </div>
      </div>
    );
}

export default Footer;