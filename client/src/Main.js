import React from 'react'
import Footer from './components/Footer'
import Landing from './components/Landing'
import PresentationCard from './components/PresentationCard'
import TextAnimated from './components/TextAnimated'
import technologies from './technologies.json'
import Grid from './components/Grid'
import Projects from './projects.json'
import ProjectCard from './components/ProjectCard'
import experience from './experience.json'
import ExperienceCard from './components/ExperienceCard'

const Main =()=>{



    return (
        <main>
            <Landing/>
            <PresentationCard/>
            <TextAnimated/>
            <div className='technologies'>
                <Grid name='Languages' arr={technologies.Languages}/>
                <Grid name='Frameworks' arr={technologies.FrameWorks} />
                <Grid name='Tools' arr={technologies.Tools} />
            </div>
            <h2 style={{margin:'3%', fontSize:'280%', color:'white'}}>My Projects</h2>
            <section className='projects' style={{width:'80%', marginLeft:'13%'}}>
                {Projects.arr.map((project, index)=><ProjectCard key={index} title={project.tittle} text={project.description} link={project.link}/>)}
            </section>
            <h2 style={{margin:'4%', fontSize:'280%', color:'white'}}>Experience</h2>
            <section className='grid' style={{width:'80%', marginLeft:'13%'}}>
                {experience.arr.map((exp, i)=><ExperienceCard exp={exp} key={i} />)}
            </section>
            <Footer/>
        </main>
    )
}

export default Main