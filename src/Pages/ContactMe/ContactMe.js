import React from 'react'
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('service_rjf3qb9', 'template_fs1yvly', e.target, 'CE1ETEn5lJ4is29tv')
      .then((result) => {
  window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
}, (error) => {
    console.log(error.text);
});
}

return (
  <Container>
    <h1 className='m-3'>Contact Me</h1>
  <div className='container d-flex flex-column min vh-100'>
  <form className="contact-form" onSubmit={sendEmail}>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Name</Form.Label>
<Form.Control type="input" name="from_name" placeholder="Ex: John Smith" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
<Form.Label>Email</Form.Label>
<Form.Control type="email" name="reply_to" placeholder="name@example.com" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
<Form.Label>Subject</Form.Label>
<Form.Control input type="text" name="subject" placeholder="Subject"/>
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>Message</Form.Label>
<Form.Control as="textarea" name="message"  rows={3} />
</Form.Group>

<Button variant="primary" type="submit" value="send">
      Submit
</Button>
</form> 
</div>
</Container>
);
}

//   export default function ContactMe() {
//     return (
  // <Form>
  //    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  //     <Form.Label>Name</Form.Label>
  //     <Form.Control type="input" placeholder="Ex: John Smith" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="name@example.com" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  //     <Form.Label>Message</Form.Label>
  //     <Form.Control as="textarea" rows={3} />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //       Submit
  //     </Button>
  // </Form>
//    )
// }
