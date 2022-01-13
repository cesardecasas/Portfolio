import React from 'react'
import Card from 'react-bootstrap/Card'

const ExperienceCard =(props)=>{
    
    const {exp}= props

    return(
        <Card style={{ width: '95%', height:'98%', marginTop:'4%', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)'  }} className='projectCard' >
                <Card.Body>
                    <Card.Title >{exp.title}</Card.Title>
                    <Card.Subtitle>{exp.company}</Card.Subtitle>
                    <Card.Text style={{textAlign:'left', fontSize:'110%'}} >{exp.description}</Card.Text>
                </Card.Body>
                <Card.Footer >             
                    <Card.Text>{exp.start} to {exp.end} </Card.Text>
                </Card.Footer>
            </Card>
            // <Card border="primary" style={{width: '80%', height:'98%', marginTop:'2%', marginLeft:'2%'}}>
            //     <Card.Header style={{fontSize:'150%'}}>{exp.company}</Card.Header>
            //         <Card.Body>
            //         <Card.Title style={{fontSize:'150%'}}>{exp.title}</Card.Title>
            //         <Card.Text className='text' style={{ height:"180px",fontSize:'120%', overflow:'scroll', textAlign:'left'}}>
            //             {exp.description}
            //         </Card.Text>
            //         <Card.Text>{exp.start} to {exp.end} </Card.Text>
            //     </Card.Body>
            // </Card>
    )
}

export default ExperienceCard