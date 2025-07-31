import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import img3 from '../../assets/hero-img3.png'
import Data from '../../data/data.json'

const HeroSection3 = () => {
  return (
    <>
      <section className="hero-section-primary3 overflow-hidden min-vh-100  d-flex align-items-center">
        <Container>
          <Row className='align-items-center'>
            <Col xl={5} xs={12} className='my-5 my-xl-0'>
              <img src={img3} alt="girl-with-tablet-that-display-growth-chart-and-progress-result" className='img-fluid' />
            </Col>
            <Col xl={{ span: 6, offset: 1 }} xs={12} >
              <div className="text-center">
                <h1 className="display-4 fw-normal text-primary mb-0">Smart
                  <span className="display-2 fw-medium text-success z-2 text-decoration-underline ms-2">Solutions</span>
                  <span className="display-6 ms-2">for</span>
                </h1>
                <h1 className="display-4 fw-normal text-success mb-4"><span className="display-5 me-2">Real</span>
                  Business <span className="display-2 fw-medium text-primary text-decoration-underline ms-2">Growth</span> </h1>
                <p className="text-secondary mb-4">Empower your business with innovative strategies, intelligent
                  automation, and performance-driven marketing. We deliver scalable solutions that turn your
                  growth goals into measurable success.</p>
                <div className="d-flex justify-content-between  align-items-center rounded-pill bg-light shadow-sm mb-4 p-sm-1">
                  <div>
                    <Form.Control size="lg" type="email" placeholder="example@gmail.com" className="bg-transparent border-0 shadow-none mx-2" />
                  </div>
                  {Data.heroSection3Btn.map((items, index) => (
                    <Button variant='primary' key={index} className={items.class}>
                      {items.icon ? <i className={`${items.icon} fs-5`}></i> : items.lable}
                    </Button>
                  ))}
                </div>
                <div className="d-flex justify-content-center align-items-center mb-1">
                  <div className="me-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <i key={index} className="ri-star-fill fs-5 text-warning"></i>
                    ))}
                    <i className="ri-star-half-line fs-5 text-warning"></i>
                  </div>
                  <p className="text-primary mb-0">4.5 out of 5</p>
                </div>
                <p className="text-primary mb-0">Trusted by over <span className='fw-semibold text-decoration-underline'>20 thousand</span> users</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection3
