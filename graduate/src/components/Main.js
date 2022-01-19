import '../App.css';
import "../public/style_main.css";
import React, { Component, useState } from 'react';

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