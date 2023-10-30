import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Image4 from "../assets/jorge-ramirez-nEwLb1onsDo-unsplash.jpg"

const Featureblogs = () => {
  return (
    <div className='featureblogs mt-5'>
       <Container>
        <Row className='' >
          <Col   md={10} className='m-auto d-flex blogsfeature ' style={{backgroundColor: "", justifyContent: 'space-around'}}> 
           <Row>

          
           <Col lg={6} md={6} sm= {12}>
             <div className="blogstext  py-5 ">
                <h3>Featured property blogs</h3>
                <p>Everything you need to know about Peackproperty homes!</p>
                   <button className='btn-blogs mb-3'> Start reading now </button>
            </div>
           </Col>
           {/*  */}

           <Col lg={6} md={6} sm= {12}>
           <div className="blogimgs">
            <img src={Image4} alt="" className='img-fluid' />
           </div>
           </Col>

            {/*  */}
        </Row>
        </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Featureblogs
