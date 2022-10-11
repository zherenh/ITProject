import React, {Component} from 'react'
import classes from './Search.module.css'
import { Link } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import axios from "axios";

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labelList: [],
			keyword:'',
			showElem:"none"
		};
	}
	componentDidMount() {
		console.log("invoke componentDidMount")
		this.getLabels(this.state.keyword);
	}
	getLinks = (labelName) => {
		axios.get('http://81.68.222.89:8080/file/searchLinkByLabels',{
		params:{
				labelName:labelName
			}
		}).then(
			res => {
				this.setState({links:res.data});
				console.log('Succeed', this.state.links);
			},
			error => {
				console.log('Failed', error);
			}
		)
	}
	getLabels = (keywords) => {
		console.log(this.state.keyword=='')
		console.log(this.state.keyword)
		axios.get('http://81.68.222.89:8080/research',{
			params:{
				keywords:keywords
			}
		}).then(
			res => {
				this.setState({linkList:res.data[0].links});
				this.setState({labelList:res.data[1].labels});
			},
			error => {
				console.log('Failed', error);
			}
		)
	}
	change=(ev)=>{
		this.getLabels(ev.target.value)
	}

	showLinksByLabel=(ev)=> {
		if (this.state.showElem != "block") {
			this.setState({showElem: "block"})
			this.getLinks(ev.target.id)
		}else {
			this.setState({showElem: "none"})
		}
	}
	render(){
		return (
			<div className={classes.Search}>
				<TopBar></TopBar>
				<div className={classes.Img}></div>
				<div className={classes.Stone1}></div>
				<div className={classes.Stone2}></div>
				<div className={classes.SearchingPart}>
					<input className={classes.Bar} type="text"  onChange={this.change} placeholder=' Search the labels' />
				</div>
				<div className={classes.Lables}>
					{this.state.labelList&&this.state.labelList.map((item,index) => <div key={index} id={item} onClick={this.showLinksByLabel} className={classes.item_one} >{item}</div>)}
				</div>
				<div className={classes.linkBox} style={{display:this.state.showElem}} >
					{this.state.links&&this.state.links.map((item,index) => <div key={index}  className={classes.item_one} >
                        <a className={classes.link} href={item}>{item}</a>

                    </div>)}
				</div>
			</div>
		)
	}

}

