import React from 'react'
import Headerdata from "../data/headerdata.json";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Header = () => {
  const expand = 'md';
  return (
    <>
      <Navbar key={expand} expand={expand} fixed="top" className="bg-transparent mb-3" id="mainNavbar">
        <Container className='flex-md-column justify-content-center align-items-center'>
          <div className="d-flex justify-content-between align-items-center w-100 mb-md-2">
            <span className="d-md-block d-none mail-id text-primary"><i className="ri-mail-fill"></i>info@boowebsite.com</span>
            <div className="nav-logo">
              <Navbar.Brand href="#" className='d-flex justify-content-md-center justify-content-start align-items-center text-center m-0'>
                <h4 className="m-0 text-primary">Strivo</h4>
              </Navbar.Brand>
            </div>
            <div className="ms-auto">
              <Button variant="primary">Get started</Button>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="shadow-none ms-2" />
          </div>

          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end" scroll={true}>
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
            <div className="offcanvas-footer d-md-none p-3">
              <span className="text-primary"><i className="ri-mail-fill fs-5 me-1"></i>info@boowebsite.com</span>
            </div>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
