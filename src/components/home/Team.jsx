import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import UserImageGrid from './UserImageGrid';

const Team = () => {
    return (
        <>
            <section className='team-section wave-bg-2 position-relative section-lg'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <UserImageGrid />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Team
