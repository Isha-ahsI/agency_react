import React, {useState} from 'react'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import Data from "../../data/data.json"
import AccordionImg from "../../assets/faqs_img.jpg"

const FAQs = () => {
     const [selectedType, setSelectedType] = useState("General"); //set types of data

     const types=[...new Set(Data.accordionItemData.map(faqs=>faqs.type))]; //get all unique types

     const filteredQuestion=Data.accordionItemData.filter(faqs=>faqs.type === selectedType); // Filter questions by selected type

    return (
        <>
            <section className="section-lg faqs-section overflow-hidden">
                <Container>
                    <Row>
                        <Col xs={12} className='mb-4'>
                            <h1 className="display-5 text-primary text-center fw-medium">Frequently Asked Questions</h1>
                            <p className="text-secondary text-center mb-0">Have questions about our services, process, or pricing?</p>
                            <p className="text-secondary text-center">We’ve compiled a list of commonly asked questions to help you
                                better understand how we support your business growth.</p>
                        </Col>
                        <Col xs={12} className='mb-5'>
                            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4"
                                id="faq-categories">
                                {types.map(type => (
                                    <Button className='btn-glow' key={type} onClick={()=>setSelectedType(type)}>{type}</Button>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Row className='align-items-center'>
                                <Col lg={7} xs={12}>
                                    <Accordion flush defaultActiveKey="0">
                                        {filteredQuestion.map((items,index) => (
                                            <Accordion.Item key={index} eventKey={items.evenkey}>
                                                <Accordion.Header>
                                                    <div className="d-flex justify-content-between align-items-center w-100">
                                                        <span>{items.question}</span>
                                                        <div className="toggle-icon">
                                                            <i className="ri-add-large-fill"></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>{items.answer}</Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Col>
                                <Col lg={{ span: 4, offset: 1 }} xs={12}>
                                    <div className="d-lg-block d-none">
                                        <img src={AccordionImg} alt="man_searching" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FAQs
