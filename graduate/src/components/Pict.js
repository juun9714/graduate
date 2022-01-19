import '../App.css';
import axios from 'axios'
import "../public/style_pict.css";
import React, { Component } from 'react';

class Pict extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleShow: false,
            pic_title: ["pict1", "pict2", "pict3"],
            pic_path: ["../public/images/gal1.jpg", "../public/images/gal2.jpg", "../public/images/gal3.jpg"],
        }
    }

    render() {

        function getPost(){
            axios.get("localhost:8000").then(response=>{
                console.log(response)
            })
        }
        getPost()
        var pict = null
        var pict_tit = null
        if (this.props.index === 1) {
            pict_tit = <div id="pic_tit">{this.state.pic_title[0]}</div>
            pict = <a href="#"><img id="picts" onMouseOver={() => {
                this.setState({
                    titleShow: true
                })
            }} onMouseLeave={() => {
                this.setState({
                    titleShow: false
                })
            }} alt="" src={require("../public/images/gal1.jpg")}></img></a>
        } else if (this.props.index === 2) {
            pict_tit = <div id="pic_tit">{this.state.pic_title[1]}</div>
            pict = <a href="#"><img id="picts" onMouseOver={() => {
                this.setState({
                    titleShow: true
                })
            }} onMouseLeave={() => {
                this.setState({
                    titleShow: false
                })
            }} alt="" src={require("../public/images/gal2.jpg")}></img></a>
        } else if (this.props.index === 3) {
            pict_tit = <div id="pic_tit">{this.state.pic_title[2]}</div>
            pict = <a href="#"><img id="picts" onMouseOver={() => {
                this.setState({
                    titleShow: true
                })
            }} onMouseLeave={() => {
                this.setState({
                    titleShow: false
                })
            }} alt="" src={require("../public/images/gal3.jpg")}></img></a>
        }

        return (
            <div>
                {this.state.titleShow ? pict_tit : null}
                {pict}
            </div>
        );
    }
}

export default Pict;