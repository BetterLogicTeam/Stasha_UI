import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import footer_logo from "../Assets/footer_logo.png"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export default function Header() {
  return (
    <div className='main_bg'>

<Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
        <div className="d-flex align-items-center gap-2">
        <img src={footer_logo} alt="" />
        <h6 className='header_text'>Stasha</h6>
        </div>
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links_center">
            <Nav.Link  className='header_links_clr' >Home</Nav.Link>
          
            <NavDropdown title={<span className='header_links_clr'>Ecosystem</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
        About
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           
            </NavDropdown>
            <Nav.Link className='header_links_clr' >Community</Nav.Link>
          </Nav>









          <Nav className='ms-auto'>


          <div className="d-flex mt-3 mt-md-0 justify-content-center gap-4">
              <div className="social_icons_main">
                <FaTelegramPlane className="icon_size"></FaTelegramPlane>
              </div>
              <div className="social_icons_main">
                <AiOutlineTwitter className="icon_size"></AiOutlineTwitter>
              </div>
              <div className="social_icons_main">
                <FaFacebookF className="icon_size"></FaFacebookF>
              </div>
              <div className="social_icons_main">
                <AiFillInstagram className="icon_size"></AiFillInstagram>
              </div>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
