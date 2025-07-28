import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import Data from '../../data/data.json';
import { userImages } from '../../data/data';
import CountUp from 'react-countup';
import HeroImg from '../../assets/hero-img.png';


const HeroSection = () => {
  const orbitLevels = ["inner", "middle", "outer"];

  return (
    <>
      <section className="hero-section-primary min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col xl={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
              <div className="hero-content text-xl-start text-center mb-xl-0 mb-5">
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
                  <ul className="list-2 list-unstyled text-primary ps-sm-4 mb-4 lh-lg">
                    {Data.highlights.slice(-3).map((items, idx) => (
                      <li className="item-list" key={idx}>
                        <i className="ri-checkbox-circle-fill"></i>
                        <span>{items.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-gradient">Explore more</button>
              </div>
            </Col>
            <Col xl={{ span: 5, order: 2, offset: 1 }} xs={{ span: 12, order: 1 }}>
              <div className="position-relative d-sm-flex justify-content-sm-center my-5">
                <div className="orbit-container position-relative d-none d-sm-block">
                  {orbitLevels.map((orbit) => (
                    <div key={orbit} className={`orbit orbit-${orbit}`}>
                      {userImages
                        .filter((item) => item.orbit === orbit)
                        .map((item, index) =>
                          item.type === "dot" ? (
                            <div key={index} className={`orbit-dots ${item.className}`}></div>
                          ) : (
                            <div key={index} className={`orbit-img ${item.className}`}>
                              <img src={item.src} alt={`user-${index + 1}`} />
                            </div>
                          )
                        )}
                    </div>
                  ))}
                </div>
                <div className="d-sm-none d-block">
                  <img src={HeroImg} alt="..." className="img-fluid" />
                </div>
                <div className="metric position-absolute text-center">
                  <CountUp start={0} end={20000} delay={1} duration={5} separator="," formattingFn={(value) => {
                    if (value >= 20000) {
                      return (value / 1000).toFixed(0) + 'k';
                    }
                    return value;
                  }} >
                    {({ countUpRef }) => (
                      <div>
                        <h2 className="text-primary fw-semibold" ref={countUpRef}>0</h2>
                        <p className="text-secondary mb-0">Growth</p>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection

