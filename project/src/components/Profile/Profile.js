import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.Home}>
            <TopBar></TopBar>
            <div className={classes.Describe}></div>
            {/* <div className={classes.Background}></div> */}
            <div className={classes.mybox}>
                <div className={classes.title}>
                    Website Register
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder=' Customized Name'/>
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder=' Link'/>
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder=' Description'/>
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder=' Label'/>
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder=' Registered Time'/>
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder=' Imagination'/>
                </div>
                <button className={classes.submit}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default Profile
