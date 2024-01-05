import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'

function Auth({ register }) {
    const registerForm = register ? true : false
    return (
        <div>
            <Header />
            <div style={{ width: "100%" }} className='d-flex justify-content-center  my-5'>
                <div className='container w-75 my-5'>
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <i class="fa-solid fa-arrow-left"></i>
                        Back To Home
                    </Link>
                    <div style={{ backgroundColor: "#92b096" }} className='p-5 '>
                        {/* <div style={{backgroundImage:"url(https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=)" }} className='p-5 opacity-50'> */}

                        <div className='row align-items-center '>
                            <div className='col-lg-6 py-4'>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/authentication-code-4487189-3726252.png" alt="img" className='img-fluid'/>
                            </div>
                            <div className='col-lg-6 ' >
                                <div className='d-flex align-items-center flex-column'>
                                    <div className='d-flex align-items-center '>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3286/3286792.png" width={30} height={30} className='me-3 ' alt="" />
                                        <span className='h1 ' style={{marginBottom:"0"}}>Project Manager</span>
                                    </div>
                                    <h4 className='my-4 text-center'>
                                        {
                                            registerForm ? 'Sign Up For Project Manager' : 'Sign In For Project Manager'
                                        }
                                    </h4>
                                    <form >
                                        {
                                            registerForm &&
                                            <div>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter Email Address" style={{width:"300px"}}/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Name" />
                                                </Form.Group>
                                                
                                            </div>
                                        }
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password" />
                                        </Form.Group>

                                        {/* <Button>
                                            { registerForm?'Sign Up' :'Login'}
                                        </Button> */}
                                        {
                                            registerForm?
                                            <div>
                                                <Button  className='me-3'>Sign Up</Button>
                                                <Link to={'/login'} style={{textDecoration:"none"}}>Already a User? Sign In...</Link>
                                            </div>:
                                            <div>
                                                <Button className='me-3'>Sign In</Button>
                                                <Link to={'/register'} style={{textDecoration:"none"}}>New User? Sign Up...</Link>
                                            </div>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth