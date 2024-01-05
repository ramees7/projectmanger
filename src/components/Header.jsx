import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({isDashboard}) {
  return (
    <div style={{marginBottom:"100px"}}>
      <Navbar className="position-fixed top-0 w-100 p-3" style={{ border:"none",borderRadius:"0" , backgroundColor:"#bcacac", color:"#000", zIndex:1}}>
        <Link to={'/'} style={{textDecoration:"none"}}>
          <Container>
            <Navbar.Brand>
            <img src="https://cdn-icons-png.flaticon.com/512/3286/3286792.png" width={35} className='me-3' alt="" />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Link>
        {
          isDashboard &&
          <div className='btn btn-danger ms-auto me-5'>
            Log Out
            <i className="fa-solid fa-forward ms-2"></i>
          </div>
        }
      </Navbar>
    </div>
  )
}

export default Header