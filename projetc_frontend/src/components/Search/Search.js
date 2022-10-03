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
		console.log("调用了componentDidMount")
		this.getLabels(this.state.keyword);
	}
	getLinks = (labelName) => {
		axios.get('http://127.0.0.1:8080/file/searchLinkByLabels',{
		params:{
				labelName:labelName
			}
		}).then(
			res => {
				this.setState({links:res.data});
				console.log('成功了', this.state.links);
			},
			error => {
				console.log('失败了', error);
			}
		)
	}
	getLabels = (keywords) => {
		console.log(this.state.keyword=='')
		console.log(this.state.keyword)
		axios.get('http://127.0.0.1:8080/research',{
			params:{
				keywords:keywords
			}
		}).then(
			res => {
				this.setState({linkList:res.data[0].links});
				this.setState({labelList:res.data[1].labels});
			},
			error => {
				console.log('失败了', error);
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
				<div  style={{width:"35%",height:"66%",background:"white",position:"absolute",
				left:"59%",top:"17%",overflow:"hidden",zIndex:"999",display:this.state.showElem}} >
					{this.state.links&&this.state.links.map((item,index) => <div key={index}  className={classes.item_one} >
                        <a href={item}>{item}</a>

                    </div>)}
				</div>
			</div>
		)
	}

}

