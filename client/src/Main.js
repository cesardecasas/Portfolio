import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import PresentationCard from './components/PresentationCard'
 import technologies from './technologies.json'
import Grid from './components/Grid'
import Projects from './projects.json'
import ProjectCard from './components/ProjectCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from './components/Nav'

const Main =()=>{



    const [darkMode, setDarkMode] = useState(false)
    const [color, setColor] = useState('white')
    const [fontColor, setFontColor] = useState('rgb(29, 29, 29)')


    useEffect(()=>{
        if(darkMode === false){
            setColor('white')
            setFontColor('rgb(29, 29, 29)')
        }else if(darkMode === true){
            setColor('rgb(29, 29, 29)')
            setFontColor('white')
        }
    },[darkMode])



    return (
        <main style={{backgroundColor:color}}  >
            {/* 
            <h2 style={{margin:'4%', fontSize:'280%', color:'white'}}>Experience</h2>
            <section className='grid' style={{width:'80%', marginLeft:'13%'}}>
                {experience.arr.map((exp, i)=><ExperienceCard exp={exp} key={i} />)}
            </section> */}
            <Navigation  set={setDarkMode} mode={darkMode}/>
            <PresentationCard color={fontColor}/>
                <Row id='tech' style={{width:'98%', marginLeft:'1%', marginTop:'4%'}} xs={1} sm={1} md={2} lg={3}>
                    <Col style={{padding:'0px'}}>
                        <Grid color={color} fontColor={fontColor} name='Languages' arr={technologies.Languages}/>
                    </Col>
                    <Col style={{padding:'0px'}}>
                        <Grid color={color} fontColor={fontColor}  name='Frameworks' arr={technologies.FrameWorks} />
                    </Col>
                    <Col style={{padding:'0px'}}>
                        <Grid color={color} fontColor={fontColor}  name='Tools' arr={technologies.Tools} />
                    </Col>
                </Row>
            <Row id='projects' xs={1} sm={2} md={3} lg={3} xl={4} style={{width:'80%', marginLeft:'10%'}}>
                {Projects.arr.map((project, index)=><Col key={index}><ProjectCard deploy={project?.deploy}  title={project.tittle} text={project.description} link={project.link}/></Col>)}
            </Row>
            <Footer color={fontColor}/>
        </main>
    )
}

export default Main