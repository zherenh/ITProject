import React from 'react'
import classes from './Search.module.css'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import axios from "axios";


export const Search = () => {
	let keywords="";
	let labelList=[];

	function getLabels(keywords){
		axios.get('http://124.221.193.16:8080/label/getLabelByLike',{
			params:{
				keywords:keywords
			}
		}).then(
			res => {
				labelList=res.data;
				console.log('成功了', labelList);
			},
			error => {
				console.log('失败了', error);
			}
		)
	}
	function change(ev){
		getLabels(ev.target.value)
	}
	return (
		<div className={classes.Search}>
			<TopBar></TopBar>
			<div className={classes.Img}></div>
			<div className={classes.Stone1}></div>
			<div className={classes.Stone2}></div>
			<div className={classes.SearchingPart}>
				<input className={classes.Bar} type="text"  onChange={change} placeholder=' Search the labels' />
			</div>
			<div className={classes.Lables}>
				{labelList&&labelList.map((item,index) => <div key={index} className={classes.item_one}>{item}</div>)}
			</div>
		</div>
	)
}


// export const Search = () => {
// 	return (
// 		<div className={classes.Search}>
// 			<TopBar></TopBar>
// 			<div className={classes.Img}></div>
// 			<div className={classes.Stone1}></div>
// 			<div className={classes.Stone2}></div>
// 			<div className={classes.SearchingPart}>
// 				<input className={classes.Bar} type="text" placeholder=' Search the labels' />
// 			</div>
// 			<div className={classes.Lables}>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 				<div>Label</div>
// 			</div>
// 		</div>
// 	)
// }
