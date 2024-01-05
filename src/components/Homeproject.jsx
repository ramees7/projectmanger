import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Projectcard from './Projectcard'
import { Link } from 'react-router-dom'

function Homeproject() {
  return (
    <div>
        <Row className=''>
        <h2 className='text-center my-5'>Projects</h2>
            <Col sm={12} md={6} lg={4} className='d-flex justify-content-center'>
                <Projectcard/>
            </Col>
            <Col sm={12} md={6} lg={4} className='d-flex justify-content-center'>
                <Projectcard/>
            </Col>
            <Col sm={12} md={6} lg={4} className='d-flex justify-content-center'>
                <Projectcard/>
            </Col>
            <div className='d-flex justify-content-center my-4 '>
            <Link to={'/project'}><button className='py-1 px-3'>See More<i className="fa-solid fa-arrow-turn-down  ms-2"></i></button></Link>
            </div>
        </Row>
    </div>
  )
}

export default Homeproject