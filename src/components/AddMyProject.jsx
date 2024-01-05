import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function AddMyProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                <i class="fa-solid fa-circle-plus"></i> {' '}Add New Project
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className='row'>
                            <div className='col-lg-5 d-flex align-items-center'>
                                <label htmlFor="project-img" className='text-center '>
                                    <input type="file" style={{display:"none"}}/>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png" alt="project-img" className='img-fluid'/>
                                    Add Image
                                </label>
                            </div>
                            <div className='col-lg-7'>
                                <input type="text "  placeholder='Project Title' className='form-control mb-3 rounded'/>
                                <input type="text "  placeholder='Project OverView' className='form-control mb-3 rounded'/>
                                <input type="text "  placeholder='Languages Used' className='form-control mb-3 rounded'/>
                                <input type="text "  placeholder='GitHub URL' className='form-control mb-3 rounded'/>
                                <input type="text "  placeholder='Demo URL' className='form-control mb-3 rounded'/>
                            </div>
                        </div>
                    </form>

  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMyProject