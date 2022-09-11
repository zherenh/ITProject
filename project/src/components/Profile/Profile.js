import React from 'react'
import TopBar from '../TopBar/TopBar'
import classes from './Profile.module.css'

const Profile = () => {
    let lebalList = [];
    let  linkList = [];
    for(let i=0;i<10;i++){
        lebalList.push('lebal')
        linkList.push('link')
    }
    return (
        <div className={classes.Home}>
            <TopBar></TopBar>
            <div className={classes.Describe}></div>
            {/* <div className={classes.Background}></div> */}
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
                            Lebals
                        </div>
                        {lebalList.map((item,index) => <div key={index} className={classes.item_one}>{item}</div>)}
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