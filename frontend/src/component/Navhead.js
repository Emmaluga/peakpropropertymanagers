import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Nav from "react-bootstrap/esm/Nav"
import Navbar from "react-bootstrap/esm/Navbar"
import NavDropdown from "react-bootstrap/esm/NavDropdown"
import  { NavLink } from "react-router-dom"


function Navhead() {
  const [navcolor, setNavColor] = useState(true)
   const navfunc = ()=> {
    if(window.scrollY > 100 ){
        setNavColor(false)
    }else{
      setNavColor(true)
    }

   }

   window.addEventListener("scroll", navfunc )
  return (
    <Navbar expand="lg" className={navcolor ? "fixed-top" : "fixed-top navC"} >
      <Container>
        <Navbar.Brand id='logo'><span className='p-logo' style={{color:"red"}}>P</span>eakPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavLink to={"/"} className={"navlink"}>Home</NavLink>
            <NavLink to={"/about"} className={"navlink"}>About</NavLink>
             <NavLink to={"/services"} className={"navlink"}>Services</NavLink>


            </Nav>

             {/*  */}
             <Nav className='me-auto'>

            <NavDropdown title="Owner" className="" id='navid'>
            <NavLink to={"/owner"} className={"navlink"}>Owner</NavLink>
             </NavDropdown>


            <NavDropdown title="Tenant" className="" id='navid'>
             <NavLink to={"/tenant"} className={"navlink"}>Tenant</NavLink>
             </NavDropdown>

             </Nav>

             {/*  */}
            <Nav className='ms-auto'>
            <NavLink to={"/contact"} className={"navlink"} >ContactUs</NavLink>
            <NavLink to={"/login"}  > <button className='mx-3 btn-login' >Login</button> </NavLink>

            </Nav>

           
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navhead

