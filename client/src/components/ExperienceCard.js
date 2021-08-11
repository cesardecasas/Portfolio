import React from 'react'
import Card from 'react-bootstrap/Card'

const ExperienceCard =(props)=>{
    
    const {exp}= props

    return(
        <div className='expCard'>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{exp.company}</Card.Header>
                    <Card.Body>
                    <Card.Title>{exp.title}</Card.Title>
                    <Card.Text className='text' style={{ height:"180px", overflow:'scroll', textAlign:'left'}}>
                        {exp.description}
                    </Card.Text>
                    <Card.Text>{exp.start} to {exp.end} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceCard