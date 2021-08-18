import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const PresentationCard =()=>{

    return(
        <div>
            <h2 style={{fontSize:'280%'}}>About Me </h2>
            <Col xs={6} md={4}>
                <Image src="" roundedCircle />
            </Col>
            <div className='description'>
                <p>
                    Passionate web developer who is always eager to learn new things. I believe analyzing 
                    and comprehending problems is key to create more efficient and 
                    reliable code, as well as innovating the world as we know it.
                </p>
            </div>
        </div>
    )
}

export default PresentationCard