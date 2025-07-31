import React from 'react'
import { Container, Row, Col, Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import left_arrow from "../../assets/arrow_left.svg";
import { userAvatars } from "../../data/data";

const HeroSection4 = () => {

  return (
    <>
      <section className="hero-section-primary4 min-vh-100  d-flex align-items-center overflow-hidden  position-relative">
        <div className="overlay1"></div>
        <div className="overlay2"></div>
        <Container>
          <Row>
            <Col lg={6} xs={12} className='z-2'>
              <div className="text-lg-start text-center">
                <h1 className="text-success mb-0"> <span className="text-light display-3">Innovation</span> for a better</h1>
                <h1 className="mb-4">
                  <span className="bg-success p-2 rounded-3 text-primary">Bussiness</span>
                  <span className="text-light display-2 ms-2">future</span>
                </h1>
                <p className="text-light mb-4">Empower your business with smart, innovative solutions designed to boost
                  growth and keep you ahead in a fast-changing digital world.</p>
                <div className="position-relative d-flex justify-content-lg-start justify-content-center align-item-center">
                  <Button variant="success" className='mb-4'>
                    <span>Explore More</span>
                    <i className="ri-arrow-right-line"></i>
                  </Button>
                  <div className="position-absolute arrow-icon2 d-lg-block d-none">
                    <Image src={left_arrow} alt="arrow_left" className="img-fluid" />
                  </div>
                </div>
                <div className="d-flex flex-sm-row flex-column justify-content-lg-start justify-content-center align-items-center">
                  <div className="user-avatars d-flex mb-sm-0 mb-3">
                    {userAvatars.map((items, index) => (
                      <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip id={`tooltip-${index}`}>{items.tooltip.map((items,index)=>(
                        <div key={index}>
                          <h6 className='mb-1'>{items.Name}</h6>
                          <p className='mb-0'>{items.content}</p>
                        </div>
                      ))}</Tooltip>}>
                        {items.type === "image" ?
                          (<Image src={items.src} alt="..." key={index} className="user-image"></Image>) :
                          (<div className="user-image d-flex justify-content-center align-items-center fs-4 bg-light text-success" key={index}>
                            <i className="ri-add-line"></i>
                          </div>)}
                      </OverlayTrigger>
                    ))}
                  </div>
                  <div className="ms-2 text-white">
                    <h5>+20K</h5>
                    <p className="m-0 text-white">Trusted by over <strong>20,000</strong> users</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection4
