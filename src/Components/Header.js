import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import "../Styles/Header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [showNavRight, setShowNavRight] = useState(false);
  const navigate=useNavigate()
  return (
    <>
    <MDBNavbar expand='lg' className="Navbar" style={{ backgroundColor:"#E9E0D7"}}  >
      <MDBContainer fluid >
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas style={{padding:"20px"}} />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
        <a href="/" className='title' >Trinity<br/>Interiors & Designes</a>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' style={{color:"#b19777",fontSize:"20px"}} exact='true' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' style={{color:"#b19777",fontSize:"20px"}} href='/About'>
              About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' style={{color:"#b19777",fontSize:"20px"}} href='/Services'>
              Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' style={{color:"#b19777",fontSize:"20px"}} href='/Gallery'>
              Gallery
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' style={{color:"#b19777",fontSize:"20px"}} href='/Contact'>
              Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  </>);
}
