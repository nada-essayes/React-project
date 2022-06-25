import React from "react";
import {Card, Button, CardGroup,Row,Col} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Dropdown} from "react-bootstrap";

const Product =({products, handleAdd,cartItems,p})=>{
   
    return(
        <div >
          
            <CardGroup style={{margin:'3px', display:'flex' }}>
            <Card className="m-2  " style={{ display:'flex',width:'22rem',height:'30rem'}}>
            <Card.Img   variant=" top waves " src={products.image} style={{ height:'40%',widht:'160' }}
            />
                <Card.Body  className="text-left" >
                   
                    <Card.Title style={{textDecoration:'none'}}><strong>{products.name}</strong></Card.Title>
                        <span variant="body2 " className="text-center" color="text.secondary" >
                       
                            <ReactStars
                                count={5}
                                size={25}
                                value={products.rating}
                                activeColor="#ffd700"
                                edit={false}
                                precision={1}
                                position='center'
                                
                            />
                           
                        </span>
                    <Card.Text>
                        <span style={{color:"#C2185B"}}><b> Sizes </b><br/>{products.sizes} <br/>
                        </span>
                        <span style={{color:"#C2185B"}}><b>Colors </b><br/>{products.colors}<br/>
                        </span>
                    </Card.Text>
                    <Card.Footer>
                        <span  style={{color:"#F50057"}} className="float-left">{products.price}
                        </span>
                        <span className="float-right" color="danger">
                            <Button className="btn btn-danger" onClick={()=>handleAdd(p)} >
                                <AddShoppingCartOutlinedIcon fontSize='small' />
                            </Button>
                        </span>
                    </Card.Footer>
                </Card.Body>
            </Card>
            </CardGroup>
           
        </div>
    )
}
export default Product;