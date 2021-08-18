import React from 'react'
import Card from 'react-bootstrap/Card'

const ExperienceCard =(props)=>{
    
    const {exp}= props

    return(
        <div className='expCard'>
            <Card border="primary" style={{width: '80%', height:'98%', marginTop:'2%', marginLeft:'2%'}}>
                <Card.Header style={{fontSize:'150%'}}>{exp.company}</Card.Header>
                    <Card.Body>
                    <Card.Title style={{fontSize:'150%'}}>{exp.title}</Card.Title>
                    <Card.Text className='text' style={{ height:"180px",fontSize:'120%', overflow:'scroll', textAlign:'left'}}>
                        {exp.description}
                    </Card.Text>
                    <Card.Text>{exp.start} to {exp.end} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceCard