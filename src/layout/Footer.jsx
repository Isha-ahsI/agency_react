import React from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Data from "../data/data.json"
import { footerButton } from "../data/data";

const Footer = () => {
  return (
    <>
      <footer>
        <section className='footer-section bg-primary text-light pt-5 pb-3 '>
          <Container>
            <Row>
              <Col xs={12} className='mb-4'>
                <div className='d-sm-flex justify-content-sm-between align-items-sm-center'>
                  <h4 className='mb-0'>Strivo</h4>
                  <div>
                    <p className="mb-1">See our new update</p>
                    <Form>
                      <InputGroup className="mb-0">
                        <Form.Control
                          placeholder="Email here..."
                          aria-label="Recipient's Email"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">
                          <i className="ri-arrow-right-line input-icon"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Form>
                  </div>
                </div>
              </Col>
              <hr />
              {Data.footerData.map((items, index) => (
                <Col sm={6} xs={12} key={index} className={`${items.class} mb-4`}>
                  <h5 className='mb-2'>{items.title}</h5>
                  <ul className='list-group list-unstyled lh-lg'>
                    {items.links.map((link, index) => (
                      <li className='item-list' key={index}><a href={link.href} className="footer-nav-link">{link.text}</a></li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col lg={4} sm={6} xs={12} className='mb-4'>
                {Data.footerContact.map((items, index) => (
                  <div key={index}>
                    <div className="d-flex align-items-center mb-1">
                      <i className={`${items.icon} fs-5`}></i>
                      <h5 className="ms-2 mb-0">{items.title}</h5>
                    </div>
                    {
                      items.type === "phone" && (
                        <p>{items.content}</p>
                      )
                    }
                    {
                      items.type === "location" && (
                        <address>{items.content}</address>
                      )
                    }
                    {
                      items.type === "email" && (
                        <p>{items.content}</p>
                      )
                    }
                  </div>
                ))}
              </Col>

              <Col xs={12}>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {footerButton.map((items, index) => (
                    <Button key={index} href={items.href} className="d-inline-flex gap-2 align-items-center bg-white text-dark text-decoration-none p-2" target="_blank" rel="noreferrer">
                      <img src={items.src} alt="..."></img>
                      <div>
                        <small className="text-secondary">Install now</small>
                        <h5 className="fw-bold lh-1 mb-0">{items.text}</h5>
                      </div>
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='footer-tagline text-light text-center py-4'>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
                  <p className="mb-0">Copyright © 2023 All rights reserved | Block is made with by
                    <span className="text-success fw-bold"> strivo</span>
                  </p>
                  <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    {Data.socialIconData.map((items, index) => (
                      <a href={items.href} target="_blank" rel="noreferrer" key={index} className={`socialContainer ${items.class} m-2`}>
                        <div className="icon">
                          <i className={`${items.icon} fs-4`}></i>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  )
}

export default Footer
