import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className={classes.Home}>
            <p className={classes.Title}>Labels<p>House</p></p>
            <div className={classes.Describe}>This Website is used to store the labels of link whatever legal or not, and opened to anyone.</div>
            <button className={classes.Start}>
                <Link to='starter'>Start</Link>
            </button>
            <div className={classes.Auth}>
                <button>Login</button>
                <button>Register</button>
            </div>
            <div className={classes.Background}></div>
        </div>
    )
}

export default Home
