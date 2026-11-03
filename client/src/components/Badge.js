import React from 'react'
import '../css/Badge.css'

const Badges =({text})=>{

    return(
        <span className="cyber-badge">{text.name}</span>
    )
}

export default Badges
