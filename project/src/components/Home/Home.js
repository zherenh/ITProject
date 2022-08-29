import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'

const Home = () => {
    return (
        <div className={classes.Home}>
            <TopBar></TopBar>
            <div className={classes.Stone1}></div>
            <div className={classes.Stone2}></div>
            <p className={classes.Title}>Labels<p>House</p></p>
            <div className={classes.Describe}>This Website is used to store the labels of link whatever legal or not, and opened to anyone.</div>
            <button className={classes.Start}>
                <Link to='search'>Start</Link>
            </button>
            <div className={classes.Background}></div>
        </div>
    )
}

export default Home
