import React from 'react'
import Badges from './Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Grid.css'

const Grid =(props)=>{

    return(
        <section className="tech-panel">
            <details className="tech-details" open>
                <summary className="tech-summary">{props.name}</summary>
                <div className="tech-body">
                    <Row xs={2} sm={2} md={2} lg={2}>
                        {props.arr.map((text, index)=><Col key={index}><Badges text={text} /></Col>)}
                    </Row>
                </div>
            </details>
        </section>
    )
}

export default Grid
