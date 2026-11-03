import React from 'react'
import Footer from './components/Footer'
import PresentationCard from './components/PresentationCard'
import technologies from './technologies.json'
import Grid from './components/Grid'
import Projects from './projects.json'
import ProjectCard from './components/ProjectCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from './components/Nav'
import experience from './experience.json'
import ExperienceCard from './components/ExperienceCard'
import useTheme from './hooks/useTheme'

const Main =()=>{

    const [theme, toggleTheme] = useTheme()

    return (
        <main>
            <Navigation set={toggleTheme} mode={theme === 'terminal'}/>
            <PresentationCard/>
                <Row id='tech' style={{width:'98%', marginLeft:'1%', marginTop:'4%'}} xs={1} sm={1} md={2} lg={3}>
                    <Col style={{padding:'0px'}}>
                        <Grid name='Languages' arr={technologies.Languages}/>
                    </Col>
                    <Col style={{padding:'0px'}}>
                        <Grid name='Frameworks' arr={technologies.FrameWorks} />
                    </Col>
                    <Col style={{padding:'0px'}}>
                        <Grid name='Tools' arr={technologies.Tools} />
                    </Col>
                </Row>

            <h2 style={{margin:'4%', fontSize:'280%'}}>Experience</h2>
            <Row id='experience' xs={1} sm={2} md={3} lg={3} xl={4} style={{width:'80%', marginLeft:'10%'}}>
                {experience.arr.reverse().map((exp, i)=><Col><ExperienceCard exp={exp} key={i} /></Col>)}
            </Row>
            <h2 style={{margin:'4%', fontSize:'280%'}}>Projects</h2>
            <Row id='projects' xs={1} sm={2} md={3} lg={3} xl={4} style={{width:'80%', marginLeft:'10%'}}>
                {Projects.arr.map((project, index)=><Col key={index}><ProjectCard deploy={project?.deploy}  title={project.title} text={project.description} link={project.link}/></Col>)}
            </Row>
            <Footer/>
        </main>
    )
}

export default Main