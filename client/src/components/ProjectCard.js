import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard =(props)=>{
    const {text, title, link } =props

    return (    
             <Card style={{ width: '95%', height:'98%', marginTop:'4%', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)'  }} className='projectCard' >
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text style={{textAlign:'left', fontSize:'110%'}} >{text}</Card.Text>
                </Card.Body>
                <Card.Footer>             <Button variant="dark" style={{ marginRight:'60%', width:'35%' }} href={link}>Git</Button>
</Card.Footer>
            </Card>
    )
}

export default ProjectCard