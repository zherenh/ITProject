import React, { Component } from 'react'
import TopBar from '../TopBar/TopBar'
import classes from './Modify.module.css'
import axios from "axios";
import swal from 'sweetalert';


export default class Modify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Files: [],
            keyword: '',
            showElem1: "block",
            showElem2: "none",
            id: 1,
            linkName: '',
            link: '',
            desc: "",
            labels: ""
        };
    }

    getAllFiles = () => {
        axios.get('http://81.68.222.89:8080/file/getAllFile'
        ).then(
            res => {
                this.setState({ Files: res.data })

            },
            error => {
                console.log('Failed', error);
            }
        )
    }

    getFileById = (id) => {
        axios.get('http://81.68.222.89:8080/file/searchFileId', {
            params: {
                id: id
            }
        }
        ).then(
            res => {
                setTimeout(() => {
                    var item = "";
                    res.data.labels.forEach((label) => {
                        item += label.labelName + ";"
                    })
                    this.setState({
                        linkName: res.data.linkName,
                        link: res.data.link,
                        desc: res.data.desc,
                        labels: item
                    })
                }, 0);
            },
            error => {
                console.log('Failed', error);
            }
        )
    }

    componentDidMount() {
        console.log("调用了componentDidMount")
        this.getAllFiles()
    }

    deleteFileById = (ev) => {
        axios.get('http://81.68.222.89:8080/file/deleteFileById', {
            params: {
                id: ev.target.value
            }
        }).then(
            res => {
                if (res.data != 0) {
                    // alert("删除成功")
                    swal("Delete Successfully", "", "success");
                    this.getAllFiles()
                } else {
                    // alert("删除失败")
                    swal("Failed", "", "error");
                }
            },
            error => {
                console.log('Failed', error);
            }
        )

    }
    toUpdate = (ev) => {
        this.setState({ showElem1: "none" })
        this.setState({ showElem2: "block" })
        this.setState({ id: ev.target.value })
        this.getFileById(ev.target.value)



    }
    toBack = () => {
        this.setState({ showElem1: "block" })
        this.setState({ showElem2: "none" })
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
    toSumbitUpdate = () => {
        axios.get('http://81.68.222.89:8080/file/updateFile', {
            params: {
                linkName: this.state.linkName,
                link: this.state.link,
                desc: this.state.desc,
                label: this.state.labels,
                id: this.state.id
            }
        }).then(
            res => {
                if (res.data == 1) {
                    // alert("修改成功")
                    swal("Modify Successfully", "", "success");

                    this.setState({ showElem1: "block" })
                    this.setState({ showElem2: "none" })
                    this.getAllFiles()
                } else if (res.data == 0) {
                    // alert("修改失败")
                    swal("Failed", "", "success");
                }

            },
            error => {
                console.log('Failed', error);
            }
        )
    }

    render() {
        return (
            <div className={classes.Modify}>
                <TopBar></TopBar>
                <div className={classes.Stone1}></div>
                <div className={classes.Stone2}></div>
                <div className={classes.Stone3}></div>
                <div className={classes.linkContainer} style={{ display: this.state.showElem1 }}>
                    {this.state.Files && this.state.Files.map((file, index) => <div key={index} className={classes.linkBox}>
                        <div className={classes.link}>
                            <div className={classes.text}>
                                {file.link}
                            </div>
                            <div className={classes.labelContainer}>
                                {file.labels && file.labels.map((label, index) => <div key={index}
                                    className={classes.label}>{label.labelName}</div>)}
                            </div>
                        </div>
                        <div className={classes.buttonBar}>
                            <button value={file.id} className={classes.deleteButton} onClick={this.deleteFileById}>-
                            </button>
                            <button value={file.id} className={classes.editButton} onClick={this.toUpdate}>Edit</button>
                        </div>
                    </div>)}
                </div>

                <div className={classes.mybox} style={{ display: this.state.showElem2, marginTop: "10%" }}>
                    <div className={classes.ipt_box}>
                        <input type="text" name={"linkName"} value={this.state.linkName} onChange={this.changeLinkName}
                            placeholder=' Customized Name' />
                    </div>
                    <div className={classes.ipt_box}>
                        <input type="text" name={"link"} value={this.state.link} onChange={this.changeLink}
                            placeholder=' Link' />
                    </div>
                    <div className={classes.ipt_box}>
                        <input type="text" name={"desc"} value={this.state.desc} onChange={this.changeDesc}
                            placeholder=' Description' />
                    </div>
                    <div className={classes.ipt_box}>
                        <input type="text" name={"labels"} value={this.state.labels} onChange={this.changeLabels}
                            placeholder=' Label' />
                    </div>
                    <button className={classes.back} onClick={this.toBack}>
                        Back
                    </button>
                    <button className={classes.update} onClick={this.toSumbitUpdate}>
                        Update
                    </button>
                </div>
            </div>
        )
    }

}


