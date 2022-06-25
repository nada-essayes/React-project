import React from "react";
import {Form,Container,Button} from 'react-bootstrap';
import { Link} from "react-router-dom";
import SignUp from "./SignUp";
import {useState} from 'react';

function Connection () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[init,setInit]=useState(
   
    {
        Email:"",
        Password:""

    }
);

const handleChange=(event)=>{
    setInit({...init,[event.target.name]:event.target.value})
};
const handleSubmit=(e)=> {
e.preventDefault();
};
    
return(
    <div style={{ backgroundColor: "#FFF0F5", border: "#F08080", padding: "65px",
    margin: "10px", borderRadius: "3px", color:"#F08080"  ,display: "flex"}}> 
   <Container>
        <h1 style={{color:"#F08080"}}>Sign In</h1> 
        <Form className="p-3 mb-2  " style={{textAlign:"left"}}  onSubmit={handleSubmit}>
          <Form.Group controlId="form.Email" className="text-left">
            <Form.Label ><b>Your Email</b></Form.Label>
            <Form.Control name="Email" type="email" placeholder="Enter your email" onChange={handleChange} required/>
          </Form.Group >
          <br/>
          <Form.Group controlId="form.Password">
            <Form.Label ><b>Your password</b></Form.Label>
            <Form.Control name="Password" type="password" placeholder="password"  onChange={handleChange} required/>
          </Form.Group>
          <br/>
          <Form.Text >
            <b>Not a member ? 
            <a className="text-danger" onClick={handleShow} >Sign Up</a> 
            <SignUp handleClose={handleClose}  show={show}/>
            </b>
            </Form.Text >
            <div className="col-md-1 offset-md-5">
            <Link to='/' >
              <Button className="btn btn-danger ">Login</Button>
            </Link>
          </div> 
        </Form>
      </Container>
    </div>
    );
}
export default Connection; 