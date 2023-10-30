import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'

const Guides = () => {
  return (
    <div className='guides mt-5'>
     <Container>
     <Row className=''>


     <Col lg={4} md={4} sm={12} className='text-center '>
       <div className="icons-card mb-3 mt-4">
            <div className="icon-logo">
                icons here
            </div>
           <div className="tittle">
             <h3>Buying guides</h3>
           </div>
           <div className="link">

        <Link className='icon-cardslink' style={{color:"red"}}>How to buy </Link>
           </div>

    
  
       </div>

     </Col>
     
    {/*  */}
    <Col lg={4} md={4} sm={12} className='text-center'>
    <div className="icons-card mb-3 mt-4">
            <div className="icon-logo">
                icons here
            </div>
           <div className="tittle">
             <h3>Renting guides</h3>
           </div>
           <div className="link">

        <Link className='icon-cardslink' style={{color:"red"}}>How to rent </Link>
           </div>
        </div>

    </Col>
     
    {/*  */}
    <Col lg={4} md={4} sm={12} className='text-center '> 
    <div className="icons-card mt-4">
            <div className="icon-logo ">
                icons here
            </div>
           <div className="tittle">
             <h3>Selling guides</h3>
           </div>
           <div className="link">

        <Link className='icon-cardslink' style={{color:"red"}}>How to sell </Link>
           
           </div>
          
        </div>
    </Col>
      
       {/* <Col md={6} className='m-auto '> */}
       <div className=" text-center mt-4">
             <button className='icon-buttons'>See full guides </button>
           </div>
       {/* </Col> */}
    
  
    {/*  */}
   
     </Row>
     </Container>
      
    </div>
  )
}

export default Guides
