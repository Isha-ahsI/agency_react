import React, { useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Headerdata from "../data/headerdata.json";
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo-dark.png';
import logo_sm from '../assets/logo-sm.png';
import { Image } from 'react-bootstrap';


const Header = () => {
  const expand = 'md';
  const navbarRef = useRef(0);
  const location = useLocation();
  let navbarClass = "navbar1";

  if (location.pathname === '/home1') {
    navbarClass = "navbar1";
  } else if (location.pathname === '/home2') {
    navbarClass = "navbar2";
  } else if (location.pathname === '/home3') {
    navbarClass = "navbar3";
  } else if (location.pathname === '/home4') {
    navbarClass = "navbar4";
  }


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          navbarRef.current.classList.add("nav-scroll");
        }
        else {
          navbarRef.current.classList.remove("nav-scroll");
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
      <>
        <Navbar key={expand} expand={expand} ref={navbarRef} fixed="top" className={navbarClass} id="mainNavbar">
          <Container className='flex-md-column justify-content-center align-items-center'>
            <div className="d-flex justify-content-between align-items-center w-100">
              <span className="d-md-block d-none mail-id text-primary"><i className="ri-mail-fill"></i>sivociagency@gmail.com</span>
              <div className="nav-logo">
                <Navbar.Brand href="#" className='d-flex justify-content-md-center justify-content-start align-items-center text-center m-0'>
                  <Image height={20} src={logo} alt="..." className='d-sm-block d-none'  />
                  <Image height={30} src={logo_sm} alt="..." className='d-sm-none d-block'  />
                </Navbar.Brand>
              </div>
              <div className="ms-auto">
                <Button variant="primary">Get started</Button>
              </div>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="shadow-none ms-2" />
            </div>

            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" scroll={true} className="my-md-1">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-primary'>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant="underline" className="justify-content-end flex-grow-1">
                  {Headerdata.navItems.slice(0, -2).map((link, idx) => (
                    <Nav.Item key={idx}>
                      <Nav.Link href={link.href}>
                        <i className={`${link.icon} fs-5 d-md-none me-1`}></i>
                        <span>{link.label}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Offcanvas.Body>
              <div className="offcanvas-bottom-nav d-md-none p-3">
                <Nav className="justify-content-end flex-grow-1">
                  {Headerdata.navItems.slice(-2).map((link, idx) => (
                    <Nav.Item key={idx}>
                      <Nav.Link href={link.href}>
                        <i className={`${link.icon} fs-5 me-1`}></i>
                        <span>{link.label}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
              <div className="offcanvas-footer d-md-none p-3 text-primary">
                <i className="ri-mail-fill fs-5 me-1"></i> <span>sivociagency@gmail.com</span>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    )
  }

  export default Header
