import React from 'react'
import Card from 'react-bootstrap/Card'

const ProjectCard =(props)=>{
    const {text, title, src } =props

    return (
        <div className='card'>
             <Card>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard