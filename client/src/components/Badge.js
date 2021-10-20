import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'

const Badges =(props)=>{

    const [bg, setBg] = useState('dark')

     useEffect(()=>{
         if(props.color === 'white'){
             setBg('dark')
         }else if(props.color === 'rgb(29, 29, 29)'){
             setBg('light')
         }
     },[props.color])
    return(
        <div>
            <Badge bg={bg} style={{fontSize:'20px', color:`${props.color}`,  marginTop:'4%',boxShadow: '8px 8px 2px 1px rgba(0, 0, 255, .2)'}} >{props.text.name}</Badge>
        </div>
    )
}

export default Badges