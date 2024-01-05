import React from 'react'

function Profile() {
  return (
    <div className='card shadow px-3 py-4'>
        <div>
            <h3 className='text-center'>My Profile</h3>
        </div>
        <div className='row justify-content-center'>
            <label htmlFor="profile" className='text-center'>
                <input type="file" id='profile' style={{display:"none"}}/>
                <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png" alt="profile img"  width={"50px"} height={"50px"}/>
            </label>
            <div className='mt-3'>
                <input type="text" className='form-control'  placeholder='Enter Your Username'/>
            </div>
            <div className='mt-3'>
                <input type="text" className='form-control'  placeholder='Enter Your LinkdIn ID'/>
            </div>
            <div className='mt-3'>
                <input type="text" className='form-control'  placeholder='Enter Your GitHub ID'/>
            </div>
        </div>
    </div>
  )
}

export default Profile