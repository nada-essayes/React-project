import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccessoriesCard from './AccessoriesCard';
const Accessories =({accessories})=>{
   
    return(
        <div style={{ backgroundColor: "#FFF0F5", border: "#F08080", padding: "100px",
        margin: "10px", borderRadius: "3px", color:"#F08080"  ,display: "flex", gap: "25px"}} >
            <Container >
            <h1 style={{color:"#F08080"}}>Accessories</h1>
            <Row>
              {
                  accessories.map((accessories)=>(
                      <Col key={accessories._id} sm={12} md={6} lg={4}>
                      <AccessoriesCard accessories={accessories}/>
                      </Col>
                  ))
              }
            </Row>
            </Container>
           
        </div>
    )
}
export default Accessories;