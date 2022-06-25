import React from "react";
import Box from '@mui/material/Box';
/*import {Card, CardContent, Typography, CardMedia,Button, CardActions, CardFooter} from '@mui/material';*/
import ReactStars from "react-rating-stars-component";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Product from './Product';
import {Card, Button } from 'react-bootstrap';


const Details =({products})=>{
  
    return(
      <div style={{ display:'flex' }} >
        <Product products={products}/>
    </div>
    )
}
export default Details;