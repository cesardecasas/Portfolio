import React, { useState } from 'react'
import projects from '../projects.json'
import ModalFrame from './Modal'
import { glyphFor, cardArtStyle } from '../utils/cardArt'
import '../css/Projects.css'

const ProjectCard = ({ project }) => {
    const [modalShow, setModalShow] = useState(false)
    const { title, description, link, deploy, tags = [], featured, building } = project

    return (
        <div className={featured ? 'project-card featured' : 'project-card'}>
            <div className="card-art" style={cardArtStyle(title)} data-glyph={glyphFor(title)} />
            <div className="card-body">
                <div className="card-title-row">
                    <div className="card-title">{title}</div>
                    {building && <span className="building-pill">building now</span>}
                </div>
                <p className="card-desc">{description}</p>
                <div className="card-tags">
                    {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="card-links">
                    <a className="card-link" href={link} target="_blank" rel="noreferrer">git &rarr;</a>
                    {deploy && (
                        <button type="button" className="card-link" onClick={() => setModalShow(true)}>demo &rarr;</button>
                    )}
                </div>
            </div>
            <ModalFrame title={title} deploy={deploy} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pane">
            <div className="pane-head">
                <span className="path"><span className="seg-dim">~/</span>projects</span>
                <span className="rule" />
            </div>
            <div className="project-grid">
                {projects.arr.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
        </section>
    )
}

export default Projects
