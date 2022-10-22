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
            keyword: '',
            labels: '',
            isShow: "none",
            labelId: 1,
            labelList: [],
            currentId: "",
            isShowLabelLike: "none"
        }
    }

    toAdd = (ev) => {
        this.confirm()
        setTimeout(() => {
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
                        swal("Add Successfully", "", "success")

                    } else if (res.data == 2) {
                        // alert("链接已存在")
                        swal("Link Already Existed", "", "error")
                    } else if (res.data == 0) {
                        // alert("添加失败")
                        swal("Failed", "", "error")

                    }
                    this.setState({linkName: '', link: '', desc: '', labels: ''})
                    this.clearLabel();
                },
                error => {
                    console.log('Failed', error);
                }
            )
        }, 0)

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

    addLabels = () => {
        var labelBox = document.getElementById('labelBox');
        if (labelBox.childNodes.length > 7) {
            swal("Label Is Maximum", "", "error")
        } else {
            let labelInput = document.createElement('input');
            labelInput.placeholder = "Label"
            labelInput.id = "label" + this.state.labelId;
            labelInput.value = ""
            labelBox.appendChild(labelInput);
            labelInput.oninput = (ev) => {
                   setTimeout(()=>{
                       this.getLabelByLike(ev)
                   },500)
            }
            labelInput.onfocus = (ev) => {
                this.setState({isShow: "block"})
                this.setState({isShowLabelLike: "block"})
                this.setState({currentId: ev.target.id})
                this.getLabelByLike("")
            }

            labelInput.focus();
            this.setState({labelId: this.state.labelId + 1})
            this.setState({isShow: "block"})
        }
    }
    labelInputGetOnFocus = (ev) => {
        this.setState({isShowLabelLike: "block"})
        this.setState({isShow: "block"})
        this.setState({currentId: ev.target.id})
        this.getLabelByLike("")
    }

    clearLabel = () => {
        var labelBox = document.getElementById('labelBox');
        var allLabelNode = document.querySelectorAll("#labelBox input")
        allLabelNode[0].value = ""
        for (let index = 1; index < allLabelNode.length; index++) {
            labelBox.removeChild(allLabelNode[index])
        }
    }
    cancel = () => {
        var labelBox = document.getElementById('labelBox');  /*取得某个元素*/
        labelBox.removeChild(document.getElementById(this.state.currentId))
    }
    confirm = () => {
        this.setState({isShow: "none"})
        this.setState({isShowLabelLike: "none"})
        var allLabelNode = document.querySelectorAll("#labelBox input")
        var files = "";
        for (let index = 0; index < allLabelNode.length; index++) {
            files += allLabelNode[index].value + ";";
        }
        this.setState({labels: files})
    }

    getLabelByLike = (ev) => {
let keyword;
if (ev==""){
    keyword=""
}else {
    keyword=ev.target.value
}
        axios.get('http://81.68.222.89:8080/label/getLabelByLike',{
        // axios.get('http://127.0.0.1:8080/label/getLabelByLike', {
            params: {
                keywords: keyword
            }
        }).then(
            res => {
                this.setState({labelList: res.data});
                console.log(res.data)
            },
            error => {
                console.log('Failed', error);
            }
        )
    }
    optionLabel = (item) => {
        document.getElementById(this.state.currentId).value = item
        this.setState({isShowLabelLike: "none"})
    }
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
                    <div id={"labelBox"} className={classes.ipt_labels}>
                        <input id={"label0"} onChange={this.getLabelByLike} onFocus={this.labelInputGetOnFocus}
                               type="text" placeholder={"Label"}/>
                        <span className={classes.cancel} style={{display: this.state.isShow}}
                              onClick={this.cancel}>--</span>
                        <span className={classes.confirm} style={{display: this.state.isShow}}
                              onClick={this.confirm}>√</span>
                        <span onClick={this.addLabels} className={classes.addLabel}>+</span>
                        <div style={{display: this.state.isShowLabelLike}} className={classes.labelByLikeBox}>
                            {this.state.labelList && this.state.labelList.map((item, index) => <span key={index}
                                                                                                     id={item}
                                                                                                     onClick={(ev) => {
                                                                                                         this.optionLabel(item)
                                                                                                     }}
                                                                                                     className={classes.labelByLike}>{item}</span>)}

                        </div>
                    </div>

                    <button className={classes.submit} onClick={this.toAdd}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}
