import React from 'react'
import TopBar from '../TopBar/TopBar'
import classes from './Profile.module.css'

const Profile = () => {
    let labelList = [];
    let  linkList = [];
    for(let i=0;i<10;i++){
        labelList.push('label')
        linkList.push('link')
    }
    return (
        <div className={classes.Profile}>
            <TopBar></TopBar>
            <div className={classes.BottomStone}></div>
            <div className={classes.RightStone}></div>
            <div className={classes.LeftStone}></div>
            <div className={classes.mybox}>
                <div className={classes.title}>
                    Profile
                </div>
                <div className={classes.ipt_box}>
                    <input type="text" placeholder='Search the label or link' />
                </div>
                <div className={classes.lebal_box}>
                    <div className={classes.left_box}>
                        <div className={classes.title}>
                            Labels
                        </div>
                        {labelList.map((item,index) => <div key={index} className={classes.item_one}>{item}</div>)}
                        <div className={classes.clearFloat}></div>
                    </div>
                    <div className={classes.right_box}>
                        <div className={classes.title}>
                            Links
                        </div>
                        {linkList.splice(0,6).map((item,index) => <div key={index} className={classes.item_one2}><span>{item}</span></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile