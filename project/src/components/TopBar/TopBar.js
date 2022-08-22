import React from 'react'
import classes from './TopBar.module.css'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className={classes.TopBar}>
            <div>Login</div>
            <div>Register</div>

            <div>Search</div>
            <div>Self</div>
            <div>Post</div>
        </div>
    )
}

export default TopBar
