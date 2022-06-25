import React from "react";
import {Navbar, Container, Nav , Form, Button, FormControl,NavDropdown } from 'react-bootstrap';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Header({products,searchProduct,setSearchProduct}) {

  const handleSearch = (event)=>{
    let valeur=event.target.value;
    setSearchProduct(valeur);
  }
  return (
    <div >
      
      <Navbar className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(178,34,34)"}} variant="dark"  collapseOnSelect >
    
      <Container className=".d-sm-block .d-none" >
      
       
          <Nav className="justify-content-center " >
            <Navbar.Brand href="#Tendency"><b>TENDANCY</b></Navbar.Brand>
          </Nav>
         
          
          <Nav className="justify-content-center " >
             
          <Nav.Link  href="/Connection"  >   
          <PersonRoundedIcon/>
          <b>CONNECTION</b>
          </Nav.Link>
      
         

           <Nav.Link  href="Cart">
            <ShoppingCartRoundedIcon/>
             <b>CART</b>
            </Nav.Link>
          
          </Nav>
         
          </Container>
    
      
        </Navbar>
       
      <Navbar style={{backgroundColor: "rgb(233,150,122)", display: "flex"}} variant="dark" className=" justify-content-left " >
        <Container fluid >
          
          <Nav>
            <Nav.Link  href="home">Home</Nav.Link>
            <Nav.Link  href="Newarrivals">New Arrivals</Nav.Link>
            <Nav>
              <NavDropdown
                 href=" #Products"
                 title="Products"
              >
                <NavDropdown.Item  href="/Products/Clothes"><b>Clothes</b></NavDropdown.Item>
                <NavDropdown.Item href="/Products/Shoes"><b>Shoes</b></NavDropdown.Item>
                <NavDropdown.Item href="/Products/Accessories"><b>Accessories</b></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link  href="ContactUs">Contact Us</Nav.Link>
          </Nav>  
         
          </Container>
         
         
          <Container >
          <Navbar.Collapse className="justify-content-end">
          <Nav>
         
         
         <Form className="d-flex" >
           
           <FormControl
            type="search"
            placeholder="Search a product"
            color='white'
            aria-label="Search"
            onChange={handleSearch}
            >
           
          </FormControl>
          
         </Form>
         </Nav>
         </Navbar.Collapse>
         </Container>
      </Navbar>
    
    
    </div>
  );
}

export default Header;