import React from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Main = () => {
    return (
        <div className="shell">
            <Sidebar />
            <main>
                <About />
                <Stack />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}

export default Main
