import '../App.css';
import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ["MAIN PAGE", "GALLARY PAGE", "COMMENT PAGE"],
            content: ["HI GUYS this is the main page", "HI GUYS this is the gallary page", "HI GUYS this is the comment page"]
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
            _content=this.state.content[1]
        }
        else if (this.props.mode === "comment") {
            _title=this.state.title[2]
            _content=this.state.content[2]
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