import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const Hero = () => {
  return (
    <div className='hero'>

        <Container>
        <Row className=''>
        <Col sm={12} className=''>
            <div className="hero-text">
                <h1 className='herohead-text'>PeakPro Property Managers</h1>
                <h5>Welcome to PeakPro Property Managers  <br />
                your trusted partner in property management services.</h5>
                 <div className="btnn mt-4">

                <button className='hero-btn'>Owners</button>
                <button className='hero-btn'>Tenants</button>
                 </div>
            </div>
        </Col>
        </Row>
        
        </Container>
      
    </div>
  )
}

export default Hero
