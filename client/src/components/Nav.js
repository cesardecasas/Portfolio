import { IoMdMoon } from 'react-icons/io'
import { BsSun } from 'react-icons/bs'
import '../css/Nav.css'

const links = [
    { href: '#presentation', label: 'About' },
    { href: '#tech', label: 'Technologies' },
    { href: '#projects', label: 'Projects' },
]

const Navigation =({set, mode})=>{

    return(
        <nav className="cyber-nav">
            <div className="cyber-nav-inner">
                <a href="#presentation" className="cyber-nav-brand">CDC_</a>
                <div className="cyber-nav-links">
                    {links.map((link)=>(
                        <a key={link.href} href={link.href} className="cyber-nav-link">{link.label}</a>
                    ))}
                </div>
                <button className="cyber-theme-toggle" onClick={()=>set(!mode)} aria-label="Toggle theme">
                    {mode ? <BsSun/> : <IoMdMoon/>}
                </button>
            </div>
        </nav>
    )
}

export default Navigation
