import React from 'react'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import ModalFrame from './Modal'
import '../css/Card.css'

const ProjectCard =(props)=>{
    const {text, title, link, deploy } =props
    const [modalShow, setModalShow] = useState(false);


    return (
             <Card style={{ width: '95%', height:'98%', marginTop:'4%' }} className='cyber-card' >
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text style={{textAlign:'left', fontSize:'110%'}} >{text}</Card.Text>
                </Card.Body>
                <Card.Footer >
                    <a className="btn-neon" style={{ width:'40%', marginRight:'4%', marginLeft:'-2%', textAlign:'center' }} href={link}>Git</a>
                    {deploy ? <button onClick={() => setModalShow(true)} className='btn-ghost' style={{width:'40%'}}> Demo</button> : <></>}
                </Card.Footer>
                <ModalFrame title={title} deploy={deploy} show={modalShow} onHide={() => setModalShow(false)}/>
            </Card>
    )
}

export default ProjectCard
