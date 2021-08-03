import React from 'react'
import Badges from './Badge'

const Grid =(props)=>{


    return(
        <section>
            <h3>{props.name}</h3>
                <div className='grid'>
                    {props.arr.map((text, index)=><Badges text={text} key={index}/>)}
                </div>
        </section>
    )
}

export default Grid