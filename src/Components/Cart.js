import React from "react";
import { Button , Dropdown} from "react-bootstrap";
import {useState} from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Form,Container} from 'react-bootstrap';
import { Link} from "react-router-dom";
import Checkout from "./Checkout";


function Cart({products, cartItems, handleAdd, handleRemove}){
    let [qte, setQte] = useState(0);
    const handleIncrement = () => {
        setQte(qte + 1)
    };
    const handleDecrease = () => {
    if(qte>0){
        setQte(qte - 1)
    }else {qte = 0}; 
    };
    const total =()=>{
    let ttl=0
    return ttl+=products.price * qte;

    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[init,setInit]=useState(
     
      {
          Email:"",
          Password:""
  
      }
  );

    return(
        <div className='row mt-2' style={{margin:'10px  auto'   , backgroundColor: "#FFF0F5", border: "#F08080",  
        padding: "11px", display: 'flex' ,  borderRadius: "3px" , height:'490px'}}>
            
      
        <h1 style={{color:"#F08080"}}><center>Shopping</center></h1>
            <br/>

            <table className="table text-center bordred">
                <thead>
                <tr>
                    <th></th>
                    <th scope="col"><b>Product</b></th>
                    <th scope="col"><b>Color</b></th>
                    <th scope="col"><b>Size</b></th>
                    <th scope="col"><b>Unit Price</b></th>
                    <th scope="col"><b>Quantity</b></th>
                    <th scope="col"><b>Remove</b></th>
                   
                </tr>
                </thead>
                <tbody>
                {
                       cartItems.map((cartItems) => (
                            <tr key={cartItems.id}>
                                <td scope="row"><img src={cartItems.image} style={{width:'4rem'}} /></td>
                                <td  scope="row">{cartItems.name}</td>
                                <td  scope="row">
           {cartItems.color}
                                </td>
                                <td  scope="row">{cartItems.sizes}</td>
                                <td  scope="row">{cartItems.price}</td>
                                <td  scope="row" className="quantity"> 
                                    <button className="btn btn-danger btn-sm" onClick={handleIncrement}> + </button>
                                    {qte}
                                    <button className="btn btn-danger btn-sm" onClick={handleDecrease}> - </button>
                                </td>
                               
                                <td>
                               
                                    <button  className="btn btn-danger btn-sm" onClick={() => handleRemove()}>Remove </button>
                             
                                </td>
                                <td/>
                            </tr>
                        ))
                    }
                  
                </tbody>
            </table>
            <div className="row">
                <div className="col text-left">
                       <h6>Total {total()}</h6>
                </div>
            </div>   

            <div className="offset-md-5">
            <Button className="btn btn-danger " onClick={handleShow} >Checkout</Button> 
            <Checkout handleClose={handleClose}  show={show}/>
            </div>
            </div>
      
    )
}
export default Cart; 