import React from 'react'
import Badges from './Badge'

const Grid =(props)=>{


    return(
        <section>
            <h3 style={{fontSize:'280%', marginBottom:'4%', marginTop:'2%'}}>{props.name}</h3>
                <div className='grid'>
                    {props.arr.map((text, index)=><Badges text={text} key={index}/>)}
                </div>
        </section>
    )
}

export default Grid