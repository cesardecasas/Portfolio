import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import {MdMail} from 'react-icons/md'

const Footer =({color})=>{


    return(
        <footer>
             
            <div className='social' style={{boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)', border:`solid 2px ${color}`}}>
                <a href='https://github.com/cesardecasas'><SiGithub style={{color:color}} className='icon'/> </a>
                <a href='https://www.linkedin.com/in/cesardecasas/'><SiLinkedin style={{color:color}} className='icon'/></a> 
                <a href="mailto:cesar.decasasgarcia@gmail.com?"><MdMail style={{color:color}} className='icon'/>  </a>
            <p className='register' style={{color:color}}>© Cesar De Casas. All rights reserved</p>
            </div>
            <br/>
        </footer>
    )
}


export default Footer