import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'


const CompaniesLogo = () => {
  return (
    <div className='companieslogo'>
     <Container>
     <Row className=''>
     <Col className='mt-3' sm={12} >
        <div className="comlogo d-flex "style={{justifyContent:'space-around'}}>

        <h1>logo</h1>
        <h1>logo</h1>
        <h1>logo</h1>
        <h1>logo</h1>
        
        </div>
     </Col>
     </Row>
     </Container>
      
    </div>
  )
}

export default CompaniesLogo
