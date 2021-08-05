import React from 'react'
import Footer from './components/Footer'
import Landing from './components/Landing'
import PresentationCard from './components/PresentationCard'
import TextAnimated from './components/TextAnimated'
import technologies from './technologies.json'
import Grid from './components/Grid'
import Projects from './projects.json'
import ProjectCard from './components/ProjectCard'

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
            <h2 style={{margin:'3%'}}>My Projects</h2>
            <section className='projects'>
                {Projects.arr.map((project, index)=><ProjectCard key={index} title={project.tittle} text={project.description} link={project.link}/>)}
            </section>
            <Footer/>
        </main>
    )
}

export default Main