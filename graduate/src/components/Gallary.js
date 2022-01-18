import '../App.css';
import "../public/style_gall.css";
import Pict from './Pict';
import React, { Component } from 'react';

class Gallary extends Component {
    constructor(props){
        super(props);
        this.state={
            index:[1,2,3]
        }
    }

    render() {

        return (
            <div className="body">
                
                {
                    this.state.index.map(function(a,id){
                        console.log(a)
                        return(<Pict key={id} className="item" index={a}></Pict>)
                    })
                }

                {
                    this.state.index.map(function(a,id){
                        console.log(a)
                        return(<Pict key={id} className="item" index={a}></Pict>)
                    })
                }
            </div>
        );
    }
}

export default Gallary;