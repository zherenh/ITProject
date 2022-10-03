import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import classes from './Add.module.css'

const Add = () => {
    return (
        <div className={classes.Add}>
            <TopBar></TopBar>
            <div className={classes.LeftStone}></div>
            <div className={classes.RightStone}></div>
            <div className={classes.ButtomStone}></div>
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

export default Add
