import React from 'react'
import classes from './Starter.module.css'
import { Link } from 'react-router-dom'

const Starter = () => {
    return (
        <div>
            Here is the starter
            <button className={classes.Back}>
                <Link to='/'>Back to HomePage</Link>
            </button>
        </div>
    )
}

export default Starter
