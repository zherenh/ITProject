import React from 'react'
import classes from './TopBar.module.css'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className={classes.TopBar}>
            <div className={classes.botton}>
                <Link to='/'>Home</Link>
            </div>
            <div className={classes.Space}></div>
            <div>
                <Link to='/Profile'>Profile</Link>
            </div>
            <div>
                <Link to='/search'>Search</Link>
            </div>
            <div>
                <Link to='/add'>Add</Link>
            </div>
            <div>
                <Link to='/modify'>Modify</Link>
            </div>
        </div>
    )
}

export default TopBar
