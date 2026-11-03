import React from 'react'
import Card from 'react-bootstrap/Card'
import '../css/Card.css'

const ExperienceCard =(props)=>{

    const {exp}= props

    return(
        <Card style={{ width: '95%', height:'98%', marginTop:'4%' }} className='cyber-card' >
                <Card.Body>
                    <Card.Title >{exp.title}</Card.Title>
                    <Card.Subtitle>{exp.company}</Card.Subtitle>
                    <Card.Text style={{textAlign:'left', fontSize:'110%'}} >{exp.description}</Card.Text>
                </Card.Body>
                <Card.Footer >
                    <Card.Text>{exp.start} to {exp.end} </Card.Text>
                </Card.Footer>
            </Card>
    )
}

export default ExperienceCard
