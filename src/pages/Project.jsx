import React from 'react'
import Header from '../components/Header'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Projectcard from '../components/Projectcard'

function Project() {
  return (
    <div>
      <Header />
      <div >
        <div className='text-center mx-2 mb-3 border rounded'>
          <h1 className='mt-3'>All Projects</h1>
          <div className='d-flex mt-5 justify-content-center w-100 '>
            <div className='d-flex align-items-center  rounded w-50'>
                <input type="text" placeholder='Enter Technology To Search' className='form-control' />
                <div className='ms-2 px-2'>
                  <i class="fa fa-search"></i>
                </div>
            </div>

          </div>
          <div className='my-5 d-flex justify-content-center'>
            <Projectcard/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project