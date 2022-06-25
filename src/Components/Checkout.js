import React from "react";
import {Modal, Button} from 'react-bootstrap';
import {Form } from 'react-bootstrap';
import {useState} from 'react';
import { Link} from "react-router-dom";

const Checkout =({handleClose , show})=>{
    const[init,setInit]=useState(
   
        {
            CardHolderName:"",
            CardNumber:"",
            ExpiryDate:"",
            CVCode:""
    
        }
    );
    
    const handleChange=(event)=>{
        setInit({...init,[event.target.name]:event.target.value})
    };
    const handleSubmit=(e)=> {
    e.preventDefault();
    };
    return(
        <div>
 <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title><center><h1 style={{color:"#F08080"}}>Payment Details</h1></center></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className="p-3 mb-2  " style={{textAlign:"left"}} onSubmit={handleSubmit} >
          <Form.Group controlId="form.CardHolderName" className="text-left">
            <Form.Label ><b>Card Holder Name</b></Form.Label>
            <Form.Control name="CardHolderName" type="text" onChange={handleChange}  required/>
          </Form.Group >
          <br/>
          <Form.Group controlId="form.CardNumber">
            <Form.Label ><b>Card Number</b></Form.Label>
            <Form.Control name="CardNumber" type="password" onChange={handleChange} required/>
          </Form.Group>
          <br/>
          <Form.Group controlId="form.ExpiryDate">
            <Form.Label ><b>Expiry Date</b></Form.Label>
            <Form.Control name="ExpiryDate" type="date" onChange={handleChange} required />
          </Form.Group>
          <br/>
          <Form.Group controlId="form.CVCode" >
            <Form.Label required ><b>CV Code</b></Form.Label>
            <Form.Control name="CVCode" type="password"  onChange={handleChange} />
          </Form.Group>
          <br/>
        </Form>
          </Modal.Body>
          <Modal.Footer>
             
                <Button variant="btn btn-danger" onClick={handleClose}>Back</Button>
            <a href="/">
            <Button variant="btn btn-success"   >Pay</Button>
           </a>
          </Modal.Footer>
        </Modal>
        </div>
    )
}
export default Checkout;