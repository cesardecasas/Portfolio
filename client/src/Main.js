import React from 'react'
import Footer from './components/Footer'
import Landing from './components/Landing'
import PresentationCard from './components/PresentationCard'
import TextAnimated from './components/TextAnimated'
import technologies from './technologies.json'
import Grid from './components/Grid'

const Main =()=>{



    return (
        <main>
            <br/>
            <Landing/>
            <PresentationCard/>
            <TextAnimated/>
            <div className='technologies'>
                <Grid name='Languages' arr={technologies.Languages}/>
                <Grid name='Frameworks' arr={technologies.FrameWorks} />
                <Grid name='Tools' arr={technologies.Tools} />
            </div>
            <Footer/>
        </main>
    )
}

export default Main