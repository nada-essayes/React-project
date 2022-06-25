import React from "react";
import {Navbar, Container, Nav  } from 'react-bootstrap';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import AlarmOnRoundedIcon from '@mui/icons-material/AlarmOnRounded';
function Footer(){
    return(
        <div >
            <Navbar style={{backgroundColor: "rgb(178,34,34)", display: "flex"}} variant="dark"  >
                <Container className="justify-content-center">
                    <Nav className="nav flex">
                        <Navbar.Brand ><HomeRoundedIcon fontSize="medium"/>Home Delivery</Navbar.Brand>
                     
                        <Navbar.Brand ><AlarmOnRoundedIcon  fontSize="medium"/>Quick Delivery</Navbar.Brand>
                  
                        <Navbar.Brand> < GppGoodRoundedIcon fontSize="medium" />Payment</Navbar.Brand>
                    
                        <Navbar.Brand  >< SyncRoundedIcon fontSize="medium"/>Exchange</Navbar.Brand>
                    </Nav>
                   
                </Container>
            </Navbar>
            </div>
           
    )
}
export default Footer;