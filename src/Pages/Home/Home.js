import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './Home.css';
import profilePic from '../../images/profile-pic.JPG';

export default function Home() {
  return (
    <Container>
    <h1 className="m-3">About Me</h1>
    <Row>
    <p id='main-paragraph' className="m-3 col-8 col-xs-6 col-md-6">
      Hi!! My name is Wasim Mohammd, I have been living in Colorado for more than 12 years and i am enjoying it. I recieved my masters degree in
      Information technology in 2012 from Colorado Technical University -
      Aurora, CO. I like to create web pages from scratch and after seven years of not practicing any programming languages, i finally managed to successfully complete a coding bootcamp from the University of Denver and i got skilled in many cutting edge technologies like HTML, CSS, JAVASCRIPT, EXPRESS.JS, NODE.JS, MYSQL, MONGODB and much more.
      Therefore, i have some cool projects in my portfolio.
      </p>
      <img
        id="profile"
        src={profilePic}
        className="m-3 col-6 col-xs-5 col-md-4"
        alt="profile picture"
      ></img> 
    </Row>
    </Container>

    
    // <div className="containerA">
    //   <h1 className="m-3">About Me</h1>
    //   <div className="container pic_bio">
    //   <p className="m-3 col-8 col-xs-6 col-md-6">
    //     Hi!! My name is Wasim Mohammd, I have been living in Colorado for more than 12 years and i am enjoying it. I recieved my masters degree in
    //     Information technology in 2012 from Colorado Technical University -
    //     Aurora, CO. I like to create web pages from scratch and after seven years of not practicing any programming languages, i finally managed to successfully complete a coding bootcamp from the University of Denver and i got skilled in many cutting edge technologies like HTML, CSS, JAVASCRIPT, EXPRESS.JS, NODE.JS, MYSQL, MONGODB and much more.
    //     Therefore, i have some cool projects in my portfolio.
    //     </p>
    //     <img
    //       id="profile"
    //       src={Me}
    //       className="m-3 col-6 col-xs-5 col-md-4"
    //       alt="profile picture"
    //     ></img> 
      
    //   </div>
    // </div>









    // <div className='container d-flex flex-column min vh-100'>
    // <div>
    //   <p>Hi!! My name is Wasim Mohammd, i recieved my masters degree in
    // Information technology in 2012 from Colorado Technical University -
    // Aurora, CO. I like to create web pages from scratch. I just finished a cooding bootcamp from the University of Denver and i got skilled in many cutting edge technologies like HTML, CSS, JAVASCRIPT, EXPRESS.JS, NODE.JS, MYSQL, MONGODB and much more.
    // Therefore, i have some cool projects in my portfolio.</p>
    // </div>
    // </div>
  )
}
