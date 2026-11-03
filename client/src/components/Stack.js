import React from 'react'
import technologies from '../technologies.json'
import '../css/Stack.css'

const groups = [
    { label: 'languages', items: technologies.Languages },
    { label: 'frameworks', items: technologies.FrameWorks },
    { label: 'tools', items: technologies.Tools },
]

const Stack = () => {
    return (
        <section id="stack" className="pane">
            <div className="pane-head">
                <span className="path"><span className="seg-dim">~/</span>stack</span>
                <span className="rule" />
            </div>
            <div className="stack-grid">
                {groups.map((group) => (
                    <div className="stack-group" key={group.label}>
                        <div className="group-label">{group.label}</div>
                        <ul className="stack-list">
                            {group.items.map((item) => (
                                <li key={item.name}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stack
