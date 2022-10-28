import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import './Footer.css';



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