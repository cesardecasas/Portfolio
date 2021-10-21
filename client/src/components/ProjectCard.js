import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import ModalFrame from './Modal'


const ProjectCard =(props)=>{
    const {text, title, link, deploy } =props
    const [modalShow, setModalShow] = useState(false);


    return (    
             <Card style={{ width: '95%', height:'98%', marginTop:'4%', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)'  }} className='projectCard' >
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text style={{textAlign:'left', fontSize:'110%'}} >{text}</Card.Text>
                </Card.Body>
                <Card.Footer >             
                    <Button variant="dark" style={{ width:'40%', marginRight:'4%', marginLeft:'-2%' }} href={link}>Git</Button>
                    {deploy ? <Button onClick={() => setModalShow(true)} variant='dark' style={{width:'40%'}}> Demo</Button> : <></>}
                </Card.Footer>
                <ModalFrame title={title} deploy={deploy} show={modalShow} onHide={() => setModalShow(false)}/>
            </Card>
    )
}

export default ProjectCard