import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const Howitworks = () => {
  return (
    <div className='howitworks'>

      <Container>
      <Row>
       <Col md={5} className='m-auto text-center mt-5'>
        <div className="how-text mt-5">

        <h3 className='mt-4'>How it works?</h3>
        <p>Everything you need to know from where to buy, sell or rent. All in one place.</p>
        </div>
       </Col>

      </Row>
      </Container>
    </div>
  )
}

export default Howitworks
