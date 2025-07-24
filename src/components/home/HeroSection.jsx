import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from '../../data/data.json';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section-primary overflow-hidden min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-item-center">
            <Col xl={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }} className='mb-5'>
              <div className="hero-content text-xl-start text-center">
                <div className="mb-4">
                  <h1 className="text-gradiant display-5 fw-medium">Smart <span className="display-4 fw-bold">Strategies</span> to</h1>
                  <h1 className="text-gradiant display-5 fw-medium">Fuel Business <span className="display-4 fw-bold">Growth</span></h1>
                </div>
                <p className="text-primary mb-4">We blend creative thinking with proven strategies to help your business
                grow smarter and faster — turning bold ideas into measurable results.</p>
                <div className="d-sm-flex justify-content-xl-start justify-content-sm-center align-items-sm-center text-sm-start">
                  <ul className="list-1 list-unstyled text-primary pe-sm-4 mb-sm-4 mb-0 lh-lg">
                    {Data.highlights.slice(0, -3).map((items, idx) => (
                        <li className="item-list" key={idx}>
                          <i className="ri-checkbox-circle-fill"></i>
                          <span>{items.text}</span> 
                        </li>
                    ))}
                  </ul>
                   <ul class="list-2 list-unstyled text-primary ps-sm-4 mb-sm-4 mb-0 lh-lg">
                      {Data.highlights.slice(-3).map((items, idx) => (
                        <li className="item-list" key={idx}>
                          <i className="ri-checkbox-circle-fill"></i>
                          <span>{items.text}</span> 
                        </li>
                    ))}
                   </ul>
                </div>
              </div>
            </Col>
            <Col xl={{ span: 5, order: 2, offset: 1 }} xs={{ span: 12, order: 1 }}>
              world
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection

