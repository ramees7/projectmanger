import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Myprojects from '../components/Myprojects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div>
      <Header isDashboard={true}/>
      <Row className='m-3'>
        <Col md={9} sm={12} className='py-5 '>
          <h1 className='mx-3'>Welcome <span className='text-danger'>User</span></h1>
          <Myprojects/>
        </Col>
        <Col md={3} sm={12} className='py-5'>
          <Profile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard