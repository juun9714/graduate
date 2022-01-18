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
        //var pic_title=null
        if(this.props.index===1)
            pict=<img id="picts" alt="" src={require("../public/images/gal1.jpg")}></img>
        else if (this.props.index===2)
            pict=<img id="picts" alt="" src={require("../public/images/gal2.jpg")}></img>
        else if (this.props.index===3)
            pict=<img id="picts" alt="" src={require("../public/images/gal3.jpg")}></img>


        return (
            <div>
                {pict}
            </div>
        );
    }
}

export default Pict;