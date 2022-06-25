import React from "react";
import {Form,Container} from 'react-bootstrap';
import { Link} from "react-router-dom";
import {useState} from 'react'; 
function ContactUs(){
const[init,setInit]=useState(
   
        {
            Name:"",
            Email:"",
            Comment:""

        }
    );
    
const handleChange=(event)=>{
        setInit({...init,[event.target.name]:event.target.value})
    };
const handleSubmit=(e)=> {
    e.preventDefault();
  };
    return(
        <div style={{ backgroundColor: "#FFF0F5", border: "#F08080", padding: "20px",
        margin: "10px", borderRadius: "3px", color:"#F08080"  ,display: "flex"}}>
          <Container>
           <h1 style={{color:"#F08080"}}>Write To Us</h1> 
    
           <Form className="p-3 mb-2  " style={{textAlign:"left"}} onSubmit={handleSubmit} >
                <Form.Group controlId="form.Name" className="text-left">
                    <Form.Label ><b>Name</b></Form.Label>
                    <Form.Control name ="Name" type="text" placeholder="Enter name" onChange={handleChange} required/>
                </Form.Group >
                <br/>
                <Form.Group controlId="form.Email">
                    <Form.Label ><b>Email Address</b></Form.Label>
                    <Form.Control name="Email" type="Email" placeholder="Enter email"  onChange={handleChange}  required/>
                </Form.Group>
                <br/>
                <Form.Group controlId="form.Comment">
                    <Form.Label ><b>Comment</b></Form.Label>
                    <Form.Control name="Comment" as="textarea" rows={3} onChange={handleChange}  required/>
                </Form.Group>
          
           <br/>
          
           <div className="col-md-1 offset-md-5">
           <Link to='/' >
                <button className="btn btn-danger"  >Envoyer</button>
            </Link>
            </div>
             
           
          </Form>
        
         </Container>
         
        </div>
    )
}
export default  ContactUs;