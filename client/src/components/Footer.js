import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import {MdMail} from 'react-icons/md'

const Footer =()=>{

    return(
        <footer>

            <div className='social' style={{boxShadow: '0 0 16px var(--glow)', border:'solid 2px var(--border)'}}>
                <a href='https://github.com/cesardecasas'><SiGithub style={{color:'var(--text)'}} className='icon'/> </a>
                <a href='https://www.linkedin.com/in/cesardecasas/'><SiLinkedin style={{color:'var(--text)'}} className='icon'/></a>
                <a href="mailto:cesar.decasasgarcia@gmail.com?"><MdMail style={{color:'var(--text)'}} className='icon'/>  </a>
            <p className='register' style={{color:'var(--text)'}}>© Cesar De Casas. All rights reserved</p>
            </div>
            <br/>
        </footer>
    )
}


export default Footer