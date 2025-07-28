import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { serviceData } from "../../data/data";

const Services = () => {
    return (
        <>
            <section className="section-lg">
                <Container>
                    <Row>
                        <Col xs={12} className='mb-5'>
                            <h6 className="underline-after position-relative text-center z-0">
                                <span className="position-relative z-1 bg-white text-primary px-3">Our Best Services</span>
                            </h6>
                            <h1 className="d-block text-gradiant text-center fw-semibold">What we can Offer?</h1>
                        </Col>
                    </Row>
                    <Row>
                        {serviceData.map((items, index) => (
                            <Col xl={4} md={6} xs={12} key={index}>
                                <Card className="service-card service-card-soft-success rounded-bottom-0 mb-4 overflow-hidden">
                                    <Card.Body className="text-primary text-center z-2">
                                        <Card.Img src={items.src} alt="Growth Strategy" className="my-4" />
                                        <Card.Title className="position-relative mb-4">{items.title}</Card.Title>
                                        <Card.Subtitle className="mb-4 text-secondary fw-normal">{items.subtitle}</Card.Subtitle>
                                        <ul className="list-group list-unstyled lh-lg">
                                            {items.features.map((feature, index) => (
                                                <li className="item-list" key={index}><i className="ri-checkbox-circle-fill"></i>{feature}</li>
                                            ))}
                                        </ul>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2 className="mb-0 opacity-25">{items.number}</h2>
                                            <Card.Link href="#" className="text-decoration-none text-primary fw-medium">
                                                <span>Read More</span>
                                                <i className="ri-arrow-right-double-line fs-5"></i>
                                            </Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services
