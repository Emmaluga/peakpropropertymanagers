import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const Footer = () => {
  return (
    <div className='footer mt-5'>
       <Container>
        <Row>
        <Col lg={3} md={3} sm={12}>
            <div className="contacts">
                <h1>contact</h1>
            </div>
        </Col>
        <Col lg={3} md={3} sm={12}>
            <div className="">
                <h1>contact</h1>
            </div>
        </Col>
        <Col lg={3} md={3} sm={12}>
            <div className="contacts">
                <h1>contact</h1>
            </div>
        </Col>

        <Col lg={3} md={3} sm={12}>
            <div className="newsletter">
                <h1>newsletter</h1>
            </div>
        </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Footer
