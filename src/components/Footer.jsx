import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='' style={{width:"100%", height:"100%", backgroundColor:"#bcacac", color:"#000"}}>
            <Row className='p-5'>
                <Col md='4' className='mb-4'>
                    <h4><img src="https://cdn-icons-png.flaticon.com/512/3286/3286792.png" width={30} className='me-3' alt="" />{' '}{' '}Project Manager</h4>
                    <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non minima repellendus sapiente voluptatem. Reprehenderit voluptates blanditiis iusto error ratione. Ullam, officiis sapiente. Magni corrupti laborum ut atque libero labore.</p>
                </Col>
                <Col md='4'  sm='6' className='d-flex justify-content-center  mb-4' >
                    <div className='d-flex flex-column'>
                        <h4>LINKS</h4>
                        <Link to={'/'} style={{textDecoration:"none", color:"black"}}>
                            Landing Page
                        </Link>
                        <Link to={'/dashboard'} style={{textDecoration:"none", color:"black"}}>
                            Dashboard Page
                        </Link>
                        <Link to={'/login'} style={{textDecoration:"none", color:"black"}}>
                            Login Page
                        </Link>
                        <Link to={'/register'} style={{textDecoration:"none", color:"black"}}>
                            Register Page
                        </Link>
                        <Link to={'/project'} style={{textDecoration:"none", color:"black"}}>
                            Project Page
                        </Link>
                    </div>
                </Col>
                <Col md='4' sm='6' className='d-flex justify-content-center mb-4'>
                    <div className='d-flex flex-column'>
                        <h4>Guides</h4>
                        <Link to={'https://react.dev/'} style={{textDecoration:"none", color:"black"}}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none", color:"black"}}>React Bootstrap</Link>
                        <Link to={'https://fontawesome.com/'} style={{textDecoration:"none" ,color:"black"}}>Font Awsome</Link>
                        <Link to={'https://fonts.google.com/'} style={{textDecoration:"none" ,color:"black"}}>Google font</Link>
                    </div>
                </Col>

            </Row>
            <p className='text-center py-3' style={{}}>Copyright © 2023 Spotify. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer