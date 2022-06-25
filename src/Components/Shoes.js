import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShoesCard from './ShoesCard';
const Shoes =({shoes})=>{
   
    return(
        <div style={{ backgroundColor: "#FFF0F5", border: "#F08080", padding: "100px",
        margin: "10px", borderRadius: "3px", color:"#F08080"  ,display: "flex", gap: "25px"}} >
            <Container >
            <h1 style={{color:"#F08080"}}>Shoes</h1>
            <Row>
              {
                  shoes.map((shoes)=>(
                      <Col key={shoes._id} sm={12} md={6} lg={4}>
                      <ShoesCard shoes={shoes}/>
                      </Col>
                  ))
              }
            </Row>
            </Container>
           
        </div>
    )
}
export default Shoes;