import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, ListGroup } from 'react-bootstrap';
import Data from '../../data/data.json';


const Pricing = () => {

  const [activePlans, setActivePlans] = useState("monthly");

  const handleToggler = (plan) => {
    setActivePlans(plan);
  }


  return (
    <>
      <section className="section-lg" id="pricing">
        <Container>
          <Row>
            <Col xs={12} className='text-center mb-5'>
              <h6 className="underline-after position-relative z-0 mb-4">
                <span className="position-relative z-1 bg-white text-primary px-3">Our pricing</span>
              </h6>
              <h1 className='d-block text-gradiant text-center fw-semibold mb-4'>Plans That Grow With You</h1>
              <div className="billing-toggle d-inline-block position-relative mb-5">
                <div className={`toggle-overlay ${activePlans}`}></div>
                <button className={`position-relative billing-option ${activePlans === "monthly" ? "active" : ""}`} onClick={() => handleToggler("monthly")}>Monthly</button>
                <button className={`position-relative billing-option ${activePlans === "yearly" ? "active" : ""}`} onClick={() => handleToggler("yearly")}>Yearly</button>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            {Data.priceData.map((items, index) => (
              <Col xl={4} md={6} xs={12} key={index}>
                <Card className={`price-card position-relative mb-4 mx-xl-2 ${index === 1 ? "scale-large":"scale-small" }`}>
                  {
                    index === 1 && (
                      <div className="card-ribbon">
                        <h5 className='ribbon-content text-light'>Most Popular</h5>
                      </div>
                    )
                  }

                  <Card.Header>
                    <Card.Title className='mb-2'>
                      <div className="d-flex align-items-center">
                        <h2 className="text-primary">{items.title}</h2>
                        {
                          index !== 1 && (
                            <Badge pill bg="primary" className='ms-2'>{items.level}</Badge>
                          )
                        }
                      </div>

                    </Card.Title>
                    <Card.Text className="text-secondary">{items.content}</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className='d-flex align-items-end mb-4'>
                      <h1 className="text-primary amount"> ${activePlans === "yearly" ? items.yearlyPrice : items.monthlyPrice}</h1>
                      <h6 className="text-secondary"> / {activePlans === "yearly" ? "Year (Save 20%)" : "Month"}</h6>
                    </Card.Title>
                    <div>
                      <Button variant="outline-success" className="mb-2 w-100">Start Trial</Button>
                      <button className="btn btn-gradient mb-2 w-100">Subscribe</button>
                    </div>
                    <ListGroup variant="flush" className='lh-lg'>
                      {items.benefits.map((items, index) => (
                        <ListGroup.Item key={index}>
                          <i className="ri-checkbox-circle-fill"></i>
                          <span className='ms-1'>{items}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
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

export default Pricing
