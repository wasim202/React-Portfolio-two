import React from 'react'
import resume from './Wasim-resume.pdf';


const style = {
  object: {
    height: "700px",
  },
};

export default function Resume() {
  return (
    <div className='mt-3 d-flex flex-column min vh-100'>
      <h1 className=" text-center">Resume</h1>
      <div className='container'>
    <div className='text-center list-group'>
     {/* <a href={resume} download="Wasim Mohammad resume"> Download Resume </a> */}

     <object className='list-group-item bg-dark' style={style.object} data={resume}></object>
    </div>
  </div>
 </div>
  );
}
