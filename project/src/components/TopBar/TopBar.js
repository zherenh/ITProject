import React from 'react'
import classes from './TopBar.module.css'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className={classes.TopBar}>
            <div>Login</div>
            <div>Register</div>
            <div className={classes.Space}></div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>Search</div>
            <div>Self</div>
            <div>Post</div>
            <div>About us</div>
        </div>
    )
}

export default TopBar
