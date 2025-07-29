import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Data from '../../data/data.json';

const ContactUs = () => {
    return (
        <>
            <section className='section-lg contactus-bg' id="contactus">
                <div className="overlay"></div>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={{ span: 11, offset: 1 }} xs={12} className='mb-4'>
                            <div className="position-relative z-1 text-lg-start text-center">
                                <h1 className='display-2 fw-normal text-light'>Contact Us</h1>
                                <p className='text-light'>Have a question, project, or idea? We're here to help.</p>
                            </div>
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }} xs={12}>
                            <Form className='contactus-form position-relative z-1 mb-lg-0 mb-4'>
                                <Form.Text>
                                    <h2 className="text-center text-light mb-4">Get in touch</h2>
                                </Form.Text>
                                <Form.Group as={Row}>
                                    <Col sm={6} xs={12} className="mb-4 shadow-none">
                                        <Form.Control size="lg" type="text" placeholder="Company Name" />
                                    </Col>
                                    <Col sm={6} xs={12} className="mb-4">
                                        <Form.Control size="lg" type="email" placeholder="Email Address" />
                                    </Col>
                                    <Col sm={6} xs={12} className="mb-4">
                                        <Form.Control size="lg" type="text" placeholder="Phone No" />
                                    </Col>
                                    <Col sm={6} xs={12} className="mb-4">
                                        <Form.Select size="lg">
                                            <option>Select Interested Services</option>
                                            <option value="1">Growth Strategy</option>
                                            <option value="2">Market Research</option>
                                            <option value="3">Brand Positioning</option>
                                            <option value="4">Digital Marketing</option>
                                            <option value="5">Creative Business Solutions</option>
                                            <option value="6">Financial Planning</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Control as="textarea" rows="3" placeholder='Message' size="lg" className="mb-4" />
                                    </Col>
                                </Form.Group>
                                <div className="text-lg-end text-center">
                                    <a href="./index.html" className="btn btn-gradient rounded-5" type="button">
                                        <i className="ri-send-plane-line"></i>
                                        <span className='ms-1'>Send</span>
                                    </a>
                                </div>
                            </Form>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className="position-relative z-1 ms-lg-4 ms-0 mb-lg-0 mb-4 text-lg-start text-center">
                                {Data.contactData.map((items, index) => (
                                    <div key={index} className='mb-4'>
                                        <div className="d-flex justify-content-lg-start justify-content-center align-items-center">
                                            <i className={`${items.icon} fs-4`}></i>
                                            <h4 className="ms-2 mb-0">{items.title}</h4>
                                        </div>
                                        {items.type === "contactinfo" && Array.isArray(items.details) && (
                                            <>
                                                {items.details.map((contactinfo, i) => (
                                                    <p className="mb-0" key={i}>{contactinfo}</p>
                                                ))}
                                            </>
                                        )}
                                        {items.type === "address" && (
                                            <>
                                                <address>{items.details}</address>
                                            </>
                                        )}
                                        {items.type === "hours" && Array.isArray(items.details) && (
                                            <>
                                                {items.details.map((hours, i) => (
                                                    <p className="mb-0" key={i}>{hours}</p>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                ))}

                                <div className="d-flex justify-content-lg-start justify-content-center align-items-center overflow-hidden">
                                    {Data.socialIconData.map((items, index) => (
                                        <a href={items.href} target="_blank" key={index} className={`socialContainer ${items.class} m-2`}>
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
        </>
    )
}

export default ContactUs
