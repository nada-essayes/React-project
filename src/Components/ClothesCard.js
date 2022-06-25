import React from "react";
import {Card, Button, CardGroup} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const ClothesCard =({clothes})=>{
   
    return(
        <div>
            <CardGroup>
            <Card className="m-2  " style={{ display:'flex',width:'22rem',height:'30rem'}}>
            <Card.Img   variant=" top waves " src={clothes.image} style={{ height:'40%',widht:'160' }}
            />
                <Card.Body className="text-center">
                   
                    <Card.Title style={{textDecoration:'none'}}><strong>{clothes.name}</strong></Card.Title>
                        <span variant="body2 center" color="text.secondary" >
                       
                            <ReactStars
                                count={5}
                                size={25}
                                value={clothes.rating}
                                activeColor="#ffd700"
                                edit={false}
                                precision={1}
                                
                            />
                           
                        </span>
                    <Card.Text>
                        <span style={{color:"#C2185B"}}><b> Sizes </b><br/> {clothes.sizes} <br/>
                        </span>
                        <span style={{color:"#C2185B"}} ><b>Colors </b><br/> {clothes.colors}<br/>
                        </span>
                    </Card.Text>
                    <Card.Footer>
                        <span  style={{color:"#F50057"}} className="float-left">{clothes.price}
                        </span>
                        <span className="float-right" color="danger">
                            
                                <Button className="btn btn-danger">
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
export default ClothesCard;