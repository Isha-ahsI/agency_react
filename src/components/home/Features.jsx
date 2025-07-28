import React from 'react'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import img1 from '../../assets/growth_strategy1.jpg'
import { featureData } from "../../data/data";

const Features = () => {
    return (
        <>
            <section className="section-lg bg-primary" id="features">
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12}>
                            <div className="text-xl-start text-center">
                                <Badge pill bg='success' className='px-3 py-2 mb-4'>
                                    <h6 className='mb-0'>Our Key Features</h6>
                                </Badge>
                            </div>
                        </Col>
                        <Col xl={6} xs={12}>
                            <h1 className='text-success text-xl-start text-center mb-4'>Powerful tools for Bussinesss Growth</h1>
                        </Col>
                        <Col xl={{ span: 5, offset: 1 }} offset={1} xs={12}>
                            <p className='text-light text-xl-start text-center mb-4'>Strivo offers smart,scalable tools that help your business grow faster. From marketing to analytics, we give you everything you need to succeed—right at your fingertips.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center aligb-items-center'>
                        <Col xl={8} xs={12}>
                            <Row>
                                {featureData.slice(0, -1).map((items, index) => (
                                    <Col md={6} xs={12} key={index}>
                                        <Card className="features-card position-relative overflow-hidden mb-4">
                                            <Card.Img src={items.src} alt={items.alt} className="img-fluid" />
                                            <Card.ImgOverlay className='d-flex justify-content-center align-items-center rounded-top'>
                                                <span className="border-1 rounded-2 bg-primary text-light fs-1 lh-1 p-2 me-3">
                                                    <i className={items.icon}></i>
                                                </span>
                                                <h5 className='text-primary mb-0'>{items.content}</h5>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xl={4} md={6} xs={12}>
                            {featureData.slice(-1).map((items, index) => (
                                <Card className="features-card position-relative overflow-hidden mb-4" key={index}>
                                    <Card.Img src={items.src} alt={items.alt} className="img-fluid" />
                                    <Card.ImgOverlay className='d-flex justify-content-center align-items-center rounded-top'>
                                        <span className="border-1 rounded-2 bg-primary text-light fs-1 lh-1 p-2 me-3">
                                            <i className={items.icon}></i>
                                        </span>
                                        <h5 className='text-primary mb-0'>{items.content}</h5>
                                    </Card.ImgOverlay>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features
