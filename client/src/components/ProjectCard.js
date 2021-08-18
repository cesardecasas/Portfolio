import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard =(props)=>{
    const {text, title, link } =props

    return (    
             <Card style={{ width: '75%', height:'98%', marginTop:'2%', marginLeft:'2%' }} className='projectCard' >
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text style={{textAlign:'left', fontSize:'110%'}} >{text}</Card.Text>
                    <Button variant="success" style={{ marginRight:'60%', width:'35%' }} href={link}>Git</Button>
                </Card.Body>
            </Card>
    )
}

export default ProjectCard