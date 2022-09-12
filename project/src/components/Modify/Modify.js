import React from 'react'
import TopBar from '../TopBar/TopBar'
import classes from './Modify.module.css'

const Modify = () => {
    return (
        <div className={classes.Modify}>
            <TopBar></TopBar>
            <div className={classes.Stone1}></div>
            <div className={classes.Stone2}></div>
            <div className={classes.Stone3}></div>
            <div className={classes.linkContainer}>

                {/*link1*/}
                <div className={classes.linkBox}>
                    <div className={classes.link}>
                        
                        <div className={classes.text}> 
                        www.link1.com.au
                        </div>

                        <div className={classes.labelContainer}> 
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
                    </div>

                    <div className={classes.buttonBar}> 
                        <div className={classes.deleteButton}> 
                            -
                        </div>
                        <div className={classes.editButton}> 
                            Edit
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Modify
