import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import projectImg from '../Assets/Screenshot 2023-12-29 101625.png'
import './projectcard.css'

function Projectcard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='card1 my-4 ' style={{ width: "350px"}}>
                <Card style={{ width: '100%' ,height:"265px"}} className='shadow card2' onClick={handleShow}>
                    <Card.Img variant="top" src={projectImg} height={200} />
                    <Card.Body>
                        <Card.Title className='text-center' style={{color:"#fff"}}>Spotify Project</Card.Title>
                    </Card.Body>
                </Card>
            </div>



            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title className='w-100 text-center'>Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12} md={6}>
                            <img src={projectImg} alt="img"  className='img-fluid h-100 py-4 ' />
                        </Col>
                        <Col sm={12} md={6}>
                            <h5 className='text-center'>Spotify </h5>
                            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt fugit corporis eveniet, maxime quas perferendis. Obcaecati architecto ex consequuntur. Dicta consequatur in aspernatur nam expedita assumenda, labore perferendis eum.</p>
                            <div>
                                <a target='_blank' className='mx-3' href="https://github.com/ramees7/mediaplayer.git">
                                    <i class="fa-brands fa-github fa-xl"></i>
                                </a>
                                <a target='_blank'  href="https://mediaplayer7.netlify.app/">
                                <i class="fa-solid fa-link fa-xl"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Projectcard