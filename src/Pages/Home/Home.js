import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './Home.css';
import profilePic from '../../images/profile-pic.JPG';
import {
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiHandlebarsdotjs,
  SiCss3,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiNpm,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="container d-flex flex-column min-vh-100">
    <h1 className="m-3">About Me</h1>
    <div className='m-3'>
    <div className='row g-0'>
     <div className="col-md-8">
      <div className="card-body">
    <p className="m-3"  id='main-paragraph'>
      Hi!! My name is Wasim Mohammd, I have been living in Colorado for more than 12 years and i am enjoying it. I recieved my masters degree in
      Information technology in 2012 from Colorado Technical University -
      Aurora, CO. I like to create web pages from scratch and after seven years of not practicing any programming languages, i finally managed to successfully complete a coding bootcamp from the University of Denver and i got skilled in many cutting edge technologies like HTML, CSS, JAVASCRIPT, EXPRESS.JS, NODE.JS, MYSQL, MONGODB and much more.
      Therefore, i have some cool projects in my portfolio.
      </p>
      </div>
      </div>
      <div className='col-md-4'>
      <img
        id="profile"
        src={profilePic}
        className="m-3"
        alt="profile picture"
      />
      </div>
      </div>

      <div className='skillsContainer'>
        <div className='icons'>
        <div className="singleIconDiv">
            <SiReact className="icon"></SiReact>
          </div>
          <div className="singleIconDiv">
            <SiNodedotjs className="icon"></SiNodedotjs>
          </div>
          <div className="singleIconDiv">
            <SiExpress className="icon"></SiExpress>
          </div>
          <div className="singleIconDiv">
            <SiNpm className="icon"></SiNpm>
          </div>
          <div className="singleIconDiv">
            <SiJavascript className="icon"></SiJavascript>
          </div>
          <div className="singleIconDiv">
            <SiHtml5 className="icon"></SiHtml5>
          </div>
          <div className="singleIconDiv">
            <SiCss3 className="icon"></SiCss3>
          </div>
          <div className="singleIconDiv">
            <SiBootstrap className="icon"></SiBootstrap>
          </div>
          <div className="singleIconDiv">
            <SiHandlebarsdotjs className="icon"></SiHandlebarsdotjs>
          </div>
          <div className="singleIconDiv">
            <SiMysql className="icon"></SiMysql>
          </div>
          <div className="singleIconDiv">
            <SiMongodb className="icon"></SiMongodb>
          </div>
        </div>
      </div>   
    </div>
    </div>
    //---------------------------------------------------------
    // <Container>
    // <h1 className="m-3">About Me</h1>
    // <Row g-0>
    // <p id='main-paragraph' className="m-3 col-8 col-xs-6 col-md-6">
    //   Hi!! My name is Wasim Mohammd, I have been living in Colorado for more than 12 years and i am enjoying it. I recieved my masters degree in
    //   Information technology in 2012 from Colorado Technical University -
    //   Aurora, CO. I like to create web pages from scratch and after seven years of not practicing any programming languages, i finally managed to successfully complete a coding bootcamp from the University of Denver and i got skilled in many cutting edge technologies like HTML, CSS, JAVASCRIPT, EXPRESS.JS, NODE.JS, MYSQL, MONGODB and much more.
    //   Therefore, i have some cool projects in my portfolio.
    //   </p>
    //   <div className='col-md-4'>
    //   <img
    //     id="profile"
    //     src={profilePic}
    //     className="m-3 col-6 col-xs-5 col-md-4"
    //     alt="profile picture"
    //   ></img> 
    //   </div>
    //   <div className='skillsContainer'>
    //     <div className='icons'>
    //     <div className="singleIconDiv">
    //         <SiReact className="icon"></SiReact>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiNodedotjs className="icon"></SiNodedotjs>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiExpress className="icon"></SiExpress>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiNpm className="icon"></SiNpm>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiJavascript className="icon"></SiJavascript>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiHtml5 className="icon"></SiHtml5>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiCss3 className="icon"></SiCss3>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiBootstrap className="icon"></SiBootstrap>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiHandlebarsdotjs className="icon"></SiHandlebarsdotjs>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiMysql className="icon"></SiMysql>
    //       </div>
    //       <div className="singleIconDiv">
    //         <SiMongodb className="icon"></SiMongodb>
    //       </div>
    //     </div>
    //   </div>   
    // </Row>
    // </Container>

    
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
