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
            <div>
                <Link to='search'>Search</Link>
            </div>
            <div>
                <Link to='profile'>Profile</Link>
            </div>
            <div>
                <Link to='update'>Update</Link>
            </div>
            <div>About us</div>
        </div>
    )
}

export default TopBar
