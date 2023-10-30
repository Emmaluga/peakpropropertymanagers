import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Image3 from "../assets/ferdinand-asakome-iaazZ7g07VQ-unsplash.jpg"

const Neighbourhood = () => {
  return (
    <div className='naighbourhood mt-5'>
       <Container>
        <Row className='d-flex' style={{justifyContent: 'space-around'}}>
        <Col lg={6} md={6} sm={12}>
           <div className="neihbourhood-img">
              <img src={Image3} alt="" className='img-fluid'  />
           </div>
        </Col>

        <Col lg={6} md={6} sm={12}>
           <div className="neighbourhood-text mt-3">

             <h3 className=''> You have found the neighbourhood you love </h3>
             <p className=''>At this times, security is crucial when it comes to deciding where to live.
             Not just that, one must factor in  accessibility and location when choosing a place to stay.
             At Peakpro, we provide a security veted and serene environment that is peaceful and secure giving you a memorable experience each passing day.
             </p>

           </div>
        </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Neighbourhood
