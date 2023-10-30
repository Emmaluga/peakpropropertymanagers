import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'



const Intro = () => {
  return (
    <div className='intro '>
       
       <Container >
        <Row className='d-flex text-center mt-4' style={{justifyContent: 'space-around'}}>
        <Col lg={5} md={6} sm={12} className=''>
            <div className="name ">
            <h5 className=''><span className='p-logo' style={{color: "red"}}>P</span>eakpro</h5>
            <p className=''>More than 50, 000 people trust PeakPro</p>

            </div>
        </Col>

        <Col lg={5} md={6} sm={12}>
            <h3> 5 stars icons here</h3>
            <p>5 stars ratings (20 + Reviews)</p>
        </Col>
        </Row>
       </Container>
        
    </div>
  )
}

export default Intro
