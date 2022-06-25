import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
const NewArrivals =({products})=>{
   
    return(
        <div style={{ backgroundColor: "#FFF0F5", border: "#F08080", padding: "100px",
        margin: "10px", borderRadius: "3px", color:"#F08080"  ,display: "flex", gap: "25px"}} >
            <Container >
            <h1 style={{color:"#F08080"}}>NewArrivals</h1>
            <Row>
              {
                  products.map((products)=>(
                      <Col key={products._id} sm={12} md={6} lg={4}>
                      <Product products={products}/>
                      </Col>
                  ))
              }
            </Row>
            </Container>
           
        </div>
    )
}
export default NewArrivals;