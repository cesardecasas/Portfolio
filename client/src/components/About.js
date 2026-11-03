import React from 'react'
import '../css/About.css'

const About = () => {
    return (
        <section id="about" className="pane">
            <p className="prompt"><span className="sigil">$</span> whoami</p>
            <h1>Hi, I'm Cesar<span className="cursor" aria-hidden="true" /></h1>
            <p className="tagline">&gt; full-stack developer, based in the United States</p>
            <p className="bio">Passionate web developer who is always eager to learn new things. I believe analyzing and comprehending problems is key to creating more efficient and reliable code, as well as innovating the world as we know it.</p>
            <div className="cta-row">
                <a className="btn-fill" href="mailto:cesar.decasasgarcia@gmail.com">Contact me</a>
                <a className="btn-ghost" href="#projects">View projects</a>
            </div>
        </section>
    )
}

export default About
