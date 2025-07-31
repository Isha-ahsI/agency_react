import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import arrow_right from "../../assets/arrow_right.svg";
import { heroSection2 } from '../../data/data';

const HeroSection2 = () => {
    return (
        <>
            <section className="hero-section-primary2 overflow-hidden min-vh-100 d-flex justify-content-center align-items-center">
                <Container>
                    <Row>
                        <Col xs={12} className='my-5'>
                            <div className="text-center">
                                <h1 className="text-light  display-2 ms-5"><span className="fw-normal">Accelerate </span> Your</h1>
                                <h1 className="display-2 me-5">
                                    <span className="fw-semibold text-primary bg-light me-3 px-3 rounded-3">Business</span>
                                    <span className="text-success fw-semibold text-decoration-underline">Growth</span>
                                </h1>
                                <h1 className="text-light  display-2 ms-5 fw-normal">Today</h1>
                                <p className="text-light">Unlock the full potential of your business with targeted strategies, smart
                                    technology, and results-driven marketing.</p>
                                <div className="position-relative d-flex justify-content-center align-item-center">
                                    <Button variant="light" className='me-3'>Explore More</Button>
                                    <Button variant='success'>Book demo</Button>
                                    <div className="position-absolute arrow-icon d-md-block d-none">
                                        <img src={arrow_right} alt="arrow_right" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} className='mb-5'>
                            <div className="d-flex justify-content-center align-items-center">
                                {heroSection2.map((items, index) => (
                                    <div key={index} className={`card hero-card-wrapper ${items.class} d-sm-block d-none ${index === 1 ? "mx-5" : ""}`}>
                                        <div className="card-body">
                                            <h6 className="text-light">{items.title}</h6>
                                            <img src={items.src} alt={items.title} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HeroSection2
