import React from 'react'
import TopBar from '../TopBar/TopBar'
import classes from './Update.module.css'

const Update = () => {
    return (
        <div className={classes.Update}>
            <TopBar></TopBar>
            <div className={classes.Stone}></div>
            <div className={classes.linkContainer}>
                {/*link1*/}
                <div className={classes.linkBox}>
                    <div className={classes.link}> 
                        www.link1.com.au
                    </div>
                    <div className={classes.label}> 
                        label1
                    </div>
                    <div className={classes.label}> 
                        label2
                    </div>
                    <div className={classes.label}> 
                        label3
                    </div>
                </div>
                {/*link2*/}
                <div className={classes.linkBox}>
                    <div className={classes.link}> 
                        www.link2.com.au
                    </div>
                    <div className={classes.label}> 
                        label1
                    </div>
                    <div className={classes.label}> 
                        label2
                    </div>
                    <div className={classes.label}> 
                        label3
                    </div>
                </div>
                {/*link3*/}
                <div className={classes.linkBox}>
                    <div className={classes.link}> 
                        www.link3.com.au
                    </div>
                    <div className={classes.label}> 
                        label1
                    </div>
                    <div className={classes.label}> 
                        label2
                    </div>
                    <div className={classes.label}> 
                        label3
                    </div>
                </div>
                {/*link4*/}
                <div className={classes.linkBox}>
                    <div className={classes.link}> 
                        www.link4.com.au
                    </div>
                    <div className={classes.label}> 
                        label1
                    </div>
                    <div className={classes.label}> 
                        label2
                    </div>
                    <div className={classes.label}> 
                        label3
                    </div>
                </div>

                {/* buttons bar*/}
                <div className={classes.buttonContainer}>
                    <button className={classes.addButton}> 
                        Add
                    </button>
                    <button className={classes.editButton}> 
                        Edit
                    </button>
                    <button className={classes.doneButton}> 
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Update
