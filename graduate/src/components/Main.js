import '../App.css';
import "../static/style_main.css";
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <img alt="" id="grad_img" src={require("../public/images/main_image.jpg")}></img>
            </div>
        );
    }
}

export default Main;