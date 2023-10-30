import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Image1 from "../assets/jorge-ramirez-nEwLb1onsDo-unsplash.jpg"
import Image2 from "../assets/ferdinand-asakome-iaazZ7g07VQ-unsplash.jpg"


const Featuresproperty = () => {
  return (
    <div className='featureproperty '>

      <Container>
        <Row className=''>
            <h3 className='mt-4'>Featured properties</h3>
            <p>Everything you need to know when looking for a new home!</p>
          

        <Col className='text-center my-3' lg={4} md={4} sm={12} >
          <div className="card">
          <Card >
      
      <img src={Image1} alt=""  className=''  height={"220px"}/>
      <Card.Body>
        <div className="card-price">
            $960,000
        </div>
       <div className="card-tittle">

           <p>Beautiful 5 Bedroom duplex </p>
       </div>

       
        <Button id='btn-buy'>Learn More</Button>
      </Card.Body>
    </Card>
          </div>
        </Col  >
        {/*  */}
        <Col className='text-center my-3' lg={4} md={4} sm={12} >
        <div className="card">
          <Card >
      
      <img src={Image1} alt=""  className='' height={"220px"} />
      <Card.Body>
        <div className="card-price">
            $960,000
        </div>
       <div className="card-tittle">

           <p>Beautiful 5 Bedroom duplex </p>
       </div>

       
        <Button id='btn-buy'>Learn More</Button>
      </Card.Body>
    </Card>
          </div>
        </Col  >
        {/*  */}
        <Col className='text-center my-3' lg={4} md={4} sm={12} >
        <div className="card">
          <Card >
      
      <img src={Image2} alt=""  className='' height={"220px"} />
      <Card.Body>
        <div className="card-price">
            $960,000
        </div>
       <div className="card-tittle">

           <p>Beautiful 5 Bedroom duplex </p>
       </div>

       
        <Button id='btn-buy'>Learn More</Button>
      </Card.Body>
    </Card>
          </div>
        </Col  >
         

        </Row>
      </Container>
    </div>
  )
}

export default Featuresproperty
