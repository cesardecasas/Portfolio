import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import pp from '../resources/pp.jpg'
import '../css/PresentationCard.css'

const PresentationCard =()=>{

    return(
        <div id='presentation' className="hero">
            <div className="hero-scanlines" aria-hidden="true" />
            <br/>
            <br/>
            <Row xs={1} sm={1} md={2} className="hero-row" style={{marginLeft:'10%', width:'80%'}}>
                <Col style={{display:'flex', justifyContent:'center'}}>
                    <div className="hero-avatar-col-inner">
                        <div className="hero-avatar-frame">
                            <img className="hero-avatar" src={pp} alt="Cesar De Casas" />
                        </div>
                        <span className="hud-corner hud-tl" aria-hidden="true" />
                        <span className="hud-corner hud-tr" aria-hidden="true" />
                        <span className="hud-corner hud-bl" aria-hidden="true" />
                        <span className="hud-corner hud-br" aria-hidden="true" />
                    </div>
                </Col>
                <Col>
                    <h2 className="hero-name" data-text="Hi, I'm Cesar" style={{fontSize:'280%'}}>Hi, I'm Cesar</h2>
                    <p className="hero-tagline">&gt; Full-Stack Developer<span className="hero-blink">_</span></p>
                    <p className="hero-bio">Passionate web developer who is always eager to learn new things. I believe analyzing
                    and comprehending problems is key to create more efficient and
                    reliable code, as well as innovating the world as we know it.</p>
                    <a className="btn-neon" href="mailto:cesar.decasasgarcia@gmail.com?">Contact Me</a>
                </Col>

            </Row>
        </div>
    )
}

export default PresentationCard
