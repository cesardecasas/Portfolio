import React from 'react'
import Badges from './Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'

const Grid =(props)=>{

    const {color, fontColor} = props


    return(
        <section>
            <Accordion style={{backgroundColor:color}}>
                <Accordion.Item eventKey='0' style={{backgroundColor:color}}>
                    <Accordion.Header style={{fontSize:'280%', backgroundColor:color, color:fontColor}}>{props.name}</Accordion.Header>
                        <Accordion.Body style={{backgroundColor:color}}>
                            <Row xs={2} sm={2} md={3} lg={4}>
                                {props.arr.map((text, index)=><Col key={index}><Badges color={color} text={text} /></Col>)}
                            </Row>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}

export default Grid