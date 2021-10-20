import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { IoMdMoon} from 'react-icons/io'
import {BsSun} from 'react-icons/bs' 
import { useEffect, useState } from 'react'

const Navigation =({set, mode})=>{

    const [bg, setBg] = useState('light')
    const [color, setColor] = useState('black')

    useEffect(()=>{
        if(mode === false){
            setBg('light')
            setColor('black')
        }else if(mode === true){
            setBg('dark')
            setColor('white')
        }
    },[mode])

    return(
        <Navbar bg={bg} sticky='top'>
            <Container>
            <Nav className="me-auto">
            <Nav.Link href="#presentation" style={{color:color}}>About</Nav.Link>
            <Nav.Link href="#tech" style={{color:color}}>Technologies</Nav.Link>
            <Nav.Link href="#projects" style={{color:color}}>Projects</Nav.Link>
            {mode ? <BsSun style={{width:'30px', height:'40px', color:'white'}} onClick={()=>set(!mode)}/> :  <IoMdMoon style={{width:'30px', height:'40px'}} onClick={()=>set(!mode)}/>}
            </Nav>
            </Container>
        </Navbar>
 
    )
}

export default Navigation