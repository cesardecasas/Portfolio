import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Badges =(props)=>{
     
    return(
        <div>
            <h4>
                <Badge bg='info' style={{fontSize:'100%'}} >{props.text.name}</Badge>
            </h4>
        </div>
    )
}

export default Badges