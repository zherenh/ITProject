import React from 'react'
import classes from './Search.module.css'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'

export const Search = () => {
  return (
    <div className={classes.Search}>
        <TopBar></TopBar>
        <div className={classes.Img}></div>
        <div className={classes.SearchingPart}>
        <input className={classes.Bar} type="text" placeholder=' Search the labels' />
        </div>
        <div className={classes.Lables}>

        </div>
    </div>
  )
}
