import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import designImg from '../Assets/project-management.png'
import { Link } from 'react-router-dom'
import Homeproject from '../components/Homeproject'
import './Pmhome.css'

function Pmhome() {

    const [isLogged,setISLogged]=useState(true)
  return (
    <>
        <div className='container-fluid ' style={{width:"100%", height:"100%", backgroundColor:"#b09292"}}>
        
            <Row>
            <Col className='d-flex align-items-center p-5 justify-content-center '>
                    <img src={designImg} alt="" />
                </Col>
                <Col sm='12' md='6' className='d-flex align-items-center p-5 justify-content-center flex-column'>
                    <h1 className='text-center pt-5'>
                        {/* <i class="fas fa-project-diagram" style={{color: "#ffffff"}}></i> */}
                        <img src="https://cdn-icons-png.flaticon.com/512/3286/3286792.png" width={35} className='me-3' alt="" />
                        Project Manager
                    </h1>
                    <p style={{textAlign:"justify"}} className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem odio, velit quia nobis tenetur cupiditate natus dignissimos atque, et odit placeat nesciunt officiis, suscipit quae incidunt totam molestiae officia.</p>
                    {
                        isLogged?
                        <Link to={'/dashboard'} className='btn btn-success'>Manage Your Project<i className="fa-solid fa-forward ms-2"></i></Link>
                        :
                        <Link to={'/login'} className='btn btn-primary'>Start To Explore<i className="fa-solid fa-forward ms-2"></i></Link>
                    }
                </Col>
               
            </Row>
        </div>
        <div >
            {/* <marquee behavior="scroll" direction="" scrollamount="20" > */}


                <Homeproject/>
            {/* </marquee> */}
        </div>
    </>
  )
}

export default Pmhome