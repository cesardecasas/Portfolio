import React from 'react'
import useClock from '../hooks/useClock'
import useActiveSection from '../hooks/useActiveSection'
import '../css/Sidebar.css'

const links = [
    { id: 'about', label: 'about' },
    { id: 'stack', label: 'stack' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
]

const sectionIds = links.map((link) => link.id)

const Sidebar = () => {
    const clock = useClock()
    const active = useActiveSection(sectionIds)

    return (
        <aside className="sidebar">
            <div className="identity">
                <div>
                    <div className="identity-name">Cesar De Casas</div>
                    <div className="identity-role">Full-Stack Developer</div>
                </div>
            </div>

            <div className="status">
                <div className="status-row"><span className="dot" aria-hidden="true" />SYSTEM ONLINE</div>
                <div className="status-row">local_time <span className="clock">{clock}</span></div>
                <div className="status-row">based_in&nbsp;&nbsp;<span className="status-value">USA</span></div>
            </div>

            <nav className="filetree">
                {links.map((link) => (
                    <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'active' : undefined}>
                        <span className="tag">#</span>{link.label}
                    </a>
                ))}
            </nav>

            <div className="sidebar-foot">
                <a href="https://github.com/cesardecasas">github</a>
                <a href="https://www.linkedin.com/in/cesardecasas/">linkedin</a>
                <a href="mailto:cesar.decasasgarcia@gmail.com">email</a>
            </div>
        </aside>
    )
}

export default Sidebar
