import React from 'react'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.Home}>
            <p className={classes.Title}>LabelsHouse</p>
            <div className={classes.Describe}>This Website is used to store the labels of link whatever legal or not, and opened to anyone.</div>
            <button className={classes.Start}>Start</button>
            <div className={classes.Auth}>
                <button>Login</button>
                <button>Register</button>
            </div>
            <div className={classes.Background}></div>
        </div>
    )
}

export default Home
