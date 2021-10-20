import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import pp from '../resources/pp.jpg'
import Button from 'react-bootstrap/Button'

const PresentationCard =({color})=>{

    return(
        <div id='presentation'>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row xs={1} sm={1} md={2} style={{marginLeft:'10%', width:'80%'}}>
                <Col style={{display:'flex', justifyContent:'center'}}>
                    <Image width='200px' style={{alignItems:'center', marginBottom:'4%'}}  src={pp} roundedCircle />
                </Col>
                <Col>
                    <h2 className="flyIn lineOne" style={{fontSize:'280%', color:color}}>Hi, I'm Cesar</h2>
                    <p className="flyIn lineTwo" style={{color:color}}>Full-Stack Developer</p>
                    <p style={{ color:color}}>Passionate web developer who is always eager to learn new things. I believe analyzing 
                    and comprehending problems is key to create more efficient and 
                    reliable code, as well as innovating the world as we know it.</p>
                    <Button variant="dark" href="mailto:cesar.decasasgarcia@gmail.com?">Contact Me</Button>
                </Col>
                
            </Row>
            {/* <p>
                    Passionate web developer who is always eager to learn new things. I believe analyzing 
                    and comprehending problems is key to create more efficient and 
                    reliable code, as well as innovating the world as we know it.
                </p> */}
        </div>
    )
}

export default PresentationCard