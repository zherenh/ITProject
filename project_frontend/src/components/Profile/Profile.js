import React, {Component} from 'react'
import TopBar from '../TopBar/TopBar'
import classes from './Profile.module.css'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkList: [],
            labelList: [],
            keyword:''
        };
    }
    componentDidMount() {
        this.getData(this.state.keyword);
    }

    getData = (keywords) => {
        console.log(this.state.keyword=='')
        console.log(this.state.keyword)
        axios.get('http://81.68.222.89:8080/research',{
        // axios.get('http://127.0.0.1:8080/research',{
            params:{
                keywords:keywords
            }
        }).then(
            res => {
                this.setState({linkList:res.data[0].links});
                this.setState({labelList:res.data[1].labels});
                console.log(this.state.linkList)
                console.log(this.state.labelList)
                },
            error => {
                console.log('Failed', error);
            }
        )
    }
    change=(ev)=>{
        this.getData(ev.target.value)
    }
    render() {
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
                        <input type="text"   onChange={this.change}  placeholder='Search the label or link'/>
                    </div>
                    <div className={classes.lebal_box}>
                        <div className={classes.left_box}>
                            <div className={classes.title}>
                                Labels
                            </div>
                            {this.state.labelList&&this.state.labelList.map((item,index) => <div key={index} className={classes.item_one}>{item}</div>)}
                            <div className={classes.clearFloat}></div>
                        </div>
                        <div className={classes.right_box}>
                            <div className={classes.title}>
                                Links
                            </div>
                            {this.state.linkList&&this.state.linkList.splice(0,6).map((item,index) => <div key={index} className={classes.item_one2}><a className={classes.link} href={item}>{item}</a></div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }}