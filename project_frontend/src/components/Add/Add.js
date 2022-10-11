import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import classes from './Add.module.css'
import axios from "axios";
import swal from 'sweetalert';
export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkName: '',
            link: '',
            desc: '',
            labels: ''
        }
    }

    toAdd = (ev) => {
        axios.get('http://81.68.222.89:8080/file/addFile', {
        // axios.get('http://127.0.0.1:8080/file/addFile', {
            params: {
                linkName: this.state.linkName,
                link: this.state.link,
                desc: this.state.desc,
                label: this.state.labels,
            }
        }).then(
            res => {
                if (res.data == 1) {
                    // alert("添加成功")
                    swal("Add Successfully","","success")
                } else if (res.data == 2) {
                    // alert("链接已存在")
                    swal("Link Already Existed","","error")
                } else if (res.data == 0) {
                    // alert("添加失败")
                    swal("Failed","","error")

                }
                this.setState({linkName: '', link: '', desc: '', labels: ''})
            },
            error => {
                console.log('Failed', error);
            }
        )
        ev.preventDefault(false)
    }
    changeLinkName = (event) => {
        this.setState({
            linkName: event.target.value
        });
    };
    changeLink = (event) => {
        this.setState({
            link: event.target.value
        });
    };
    changeDesc = (event) => {
        this.setState({
            desc: event.target.value
        });
    };
    changeLabels = (event) => {
        this.setState({
            labels: event.target.value
        });
    };

    render() {
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
                        <input type="text" value={this.state.linkName} onChange={this.changeLinkName}
                               placeholder=' Customized Name'/>
                    </div>
                    <div className={classes.ipt_box}>
                        <input type="text" placeholder=' Link' onChange={this.changeLink} value={this.state.link}/>
                    </div>
                    <div className={classes.ipt_box}>
                        <input type="text" value={this.state.desc} onChange={this.changeDesc}
                               placeholder=' Description'/>
                    </div>
                    <div className={classes.ipt_box}>
                        <input type="text" value={this.state.labels} onChange={this.changeLabels} placeholder=' Label'/>
                    </div>

                    <button className={classes.submit} onClick={this.toAdd}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}
