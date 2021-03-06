import "../public/style_main.css";
import '../App.css';
import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ["Welcome to my Graduation Exhibition :)", "GALLARY PAGE", "COMMENT PAGE"],
            content: ["Gallery for pictures and please leave the messages on Comment tab!", "", ""]
        }
    }


    render() {
        var _title, _content= null;
        if (this.props.mode === "main") {
            _title=this.state.title[0]
            _content=this.state.content[0]
        }
        else if (this.props.mode === "gallary") {
            _title=this.state.title[1]
            // _content=this.state.content[1]
            _content=null
        }
        else if (this.props.mode === "comment") {
            _title=this.state.title[2]
            // _content=this.state.content[2]
            _content=null
        }

        return (
            <div>
                <h2>{_title}</h2>
                <h4>{_content}</h4>
            </div>
        );
    }
}

export default Title;