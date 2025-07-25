import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { logoImages } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'


const TrustedBrands = () => {
    return (
        <>
            <section className='section-lg'>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <h5 className="text-center text-success text-decoration-underline mb-5">Trusted By</h5>
                        </Col>
                        <Col xs={12}>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={50}
                                loop={true}
                                speed={3000}
                                autoplay={{
                                    delay: 0,
                                    reverseDirection: false,
                                    disableOnInteraction: false,
                                }}
                                allowTouchMove={false}
                                breakpoints={{
                                    0: { slidesPerView: 3 },
                                    576: { slidesPerView: 4 },
                                    768: { slidesPerView: 6 },
                                    992: { slidesPerView: 8 },
                                    1400: { slidesPerView: 10 }
                                }}
                                className="mb-5"
                            >
                                {logoImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item.src} alt={item.Name} className="img-fluid" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={40}
                                loop={true}
                                speed={3000}
                                autoplay={{
                                    delay: 0,
                                    reverseDirection: true,
                                    disableOnInteraction: false,
                                }}
                                allowTouchMove={false}
                                breakpoints={{
                                    0: { slidesPerView: 3 },
                                    576: { slidesPerView: 4 },
                                    768: { slidesPerView: 6 },
                                    992: { slidesPerView: 8 },
                                    1400: { slidesPerView: 10 }
                                }}
                                className="mb-5"
                            >
                                {logoImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item.src} alt={item.Name} className='img-fluid' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TrustedBrands
