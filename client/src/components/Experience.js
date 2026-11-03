import React from 'react'
import experience from '../experience.json'
import '../css/Experience.css'

const Experience = () => {
    return (
        <section id="experience" className="pane">
            <div className="pane-head">
                <span className="path"><span className="seg-dim">~/</span>experience</span>
                <span className="rule" />
            </div>
            <div className="timeline">
                {experience.arr.map((exp) => {
                    const current = exp.end === 'Present'
                    return (
                        <div className={current ? 'entry current' : 'entry'} key={`${exp.company}-${exp.title}-${exp.start}`}>
                            <div className="entry-head">
                                <span className="entry-role">{exp.title}</span>
                                <span className="entry-company">{exp.company}</span>
                                {current && <span className="current-pill">current</span>}
                                <span className="entry-dates">{exp.start} — {exp.end}</span>
                            </div>
                            <p className="entry-desc">{exp.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience
