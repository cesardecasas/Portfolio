import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Badges =(props)=>{
     
    return(
        <div>
            <h4>
                <Badge bg='info'>{props.text.name}</Badge>
            </h4>
        </div>
    )
}

export default Badges