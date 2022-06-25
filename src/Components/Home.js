import React from "react";
import {Carousel, Button,Container,Card,CardGroup} from 'react-bootstrap';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Home({products}) {
    return (
      <div >
       
        <Carousel className=".d-sm-block .d-none"
        style={{ backgroundColor: "rgb(255,228,196)", border: "rgb(255,228,196)", 
        margin: "10px", borderRadius: "3px", display: "flex"}}
        >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require('../Components/Images/image8.png') }
              width="500px"  
              height="600px;"
              alt="image8"
            />
            <Carousel.Caption>
              
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../Components/Images/image7.png') }
              width="500px"  
              height="600px;"
              alt="image7"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             className="d-block w-100"
             src={require('../Components/Images/image6.png') }
             width="500px"  
             height="600px;"
             alt="image6"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      <Container >
        <ImageList  cols={3} >
          {products.map((products) => (
             <CardGroup style={{margin:'3px', display:'flex' }} key={products.image}>
         <Card style={{display:'flex'}}>
              <img
               /* src={`${products.image}?w=164&h=164&fit=crop&auto=format`}*/
                srcSet={`${products.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                /*alt={products.name}*/
                loading="lazy"
                style={{height:'99%'}}
                /*style={{ objectFit: 'none', Margin: '1px',maxHeight:'40%', width: 'calc(80% / 5px)' }}*/
               
              />
          <Button variant='link' style={{color:"#F50057"}} href="/Details" > More Details</Button>
          </Card>
          </CardGroup>
          ))}
        </ImageList>
        </Container>
       
      </div>
    );
}
export default Home;