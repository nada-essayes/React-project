import React from "react";
import {Modal, Button} from 'react-bootstrap';
import {Form } from 'react-bootstrap';
import {useState} from 'react';
const SignUp =({handleClose , show})=> {
  const[init,setInit]=useState(
   
    {
      YourName:"",
        Email:"",
        ConfEmail:"",
        Password:""

    }
);

const handleChange=(event)=>{
    setInit({...init,[event.target.name]:event.target.value})
};
const handleSubmit=(e)=> {
e.preventDefault();
};
    return (
      <div >
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title><center><h1 style={{color:"#F08080"}}>Sign Up</h1></center></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className="p-3 mb-2  " style={{textAlign:"left"}} onSubmit={handleSubmit} >
          <Form.Group controlId="form.name" className="text-left">
            <Form.Label ><b>Your Name</b></Form.Label>
            <Form.Control name="YourName" type="text" onChange={handleChange}  required/>
          </Form.Group >
          <br/>
          <Form.Group controlId="form.email">
            <Form.Label ><b>Your email</b></Form.Label>
            <Form.Control name="Email" type="email" onChange={handleChange}  required/>
          </Form.Group>
          <br/>
          <Form.Group controlId="form.Confemail">
            <Form.Label ><b>Confirm your email</b></Form.Label>
            <Form.Control name="confEmail" type="email" onChange={handleChange} required />
          </Form.Group>
          <br/>
          <Form.Group controlId="form.password">
            <Form.Label ><b>Your password</b></Form.Label>
            <Form.Control name="Your password" type="password"  onChange={handleChange}  required/>
          </Form.Group>
          <br/>
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="btn btn-danger" onClick={handleClose}>Sign Up</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
export default SignUp; 