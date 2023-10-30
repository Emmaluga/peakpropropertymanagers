import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const Peakproad = () => {
  return (
    <div className='peakproad mt-5 text-center'>
        <Container>
        <Row className=''>
            
        <Col lg={4} md={4} sm={12}  className='mb-3 '>
        <div className="ad1">
                <h1 className='peakad-text'> 800+ </h1>
                <p>Homes for sale</p>
            </div>
        </Col>
        <Col lg={4} md={4} sm={12}  className='mb-3 '>
        <div className="ad2">
                <h1 className='peakad-text'> 1400+ </h1>
                <p>Properties rented </p>
            </div>
        </Col>
        <Col lg={4} md={4} sm={12} className='mb-3'>
        <div className="ad3">
                <h1 className='peakad-text'> 1100+ </h1>
                <p>properties sold </p>
            </div>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Peakproad
