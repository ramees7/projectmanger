import React from 'react'
import AddMyProject from './AddMyProject'

function Myprojects() {
  return (
    <div className='card shadow p-3 m-3'>
      <div className='d-flex justify-content-between'>
        <h2>My Project</h2>
        <AddMyProject />
      </div>
      <div className=' m-3'>
        {/* user added project */}
        <div className='border rounded shadow '>
          <div className='d-flex justify-content-between p-3'>
            <h3>Project Title</h3>
            <div>
              <button className='btn'><i class="fa-brands fa-github fa-xl"></i></button>
              <button className='btn'><i class="fa-solid fa-pen fa-xl"></i></button>
              <button className='btn'><i class="fa-solid fa-trash fa-xl"></i></button>
            </div>
          </div>
        </div>
        <h3 className='text-danger p-3'>No Project Uploaded!!</h3>
      </div>
    </div>

  )
}

export default Myprojects