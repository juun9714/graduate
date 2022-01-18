import '../App.css';
import "../public/style_pict.css";

import React, { Component } from 'react';

class Pict extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pic_title: ["pict1", "pict2", "pict3"],
            pic_path: ["../public/images/gal1.jpg", "../public/images/gal2.jpg", "../public/images/gal3.jpg"],
        }
    }

    render() {
        var pict=null
        var pict_tit=null
        if(this.props.index===1){
            pict_tit=<div id="pic_tit">{this.state.pic_title[0]}</div>
            pict=<a href="#"><img id="picts" alt="" src={require("../public/images/gal1.jpg")}></img></a>
        }else if (this.props.index===2){
            pict_tit=<div id="pic_tit">{this.state.pic_title[1]}</div>
            pict=<a href="#"><img id="picts" alt="" src={require("../public/images/gal2.jpg")}></img></a>
        }else if (this.props.index===3){
            pict_tit=<div id="pic_tit">{this.state.pic_title[2]}</div>
            pict=<a href="#"><img id="picts" alt="" src={require("../public/images/gal3.jpg")}></img></a>
        }

        return (
            <div>
                {pict_tit}
                {pict}
            </div>
        );
    }
}

export default Pict;