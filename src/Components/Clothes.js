import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClothesCard from './ClothesCard';
const Clothes =({clothes})=>{
   
    return(
        <div style={{ backgroundColor: "#FFF0F5", border: "#F08080", padding: "100px",
        margin: "10px", borderRadius: "3px", color:"#F08080"  ,display: "flex", gap: "25px"}} >
            <Container >
            <h1 style={{color:"#F08080"}}>Clothes</h1>
            <Row>
              {
                  clothes.map((clothes)=>(
                      <Col key={clothes._id} sm={12} md={6} lg={4}>
                      <ClothesCard clothes={clothes}/>
                      </Col>
                  ))
              }
            </Row>
            </Container>
           
        </div>
    )
}
export default Clothes;