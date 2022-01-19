import './App.css';
import React, { Component, useState } from 'react';
import Title from './components/Title.js';
import Main from './components/Main.js';
import Gallary from './components/Gallary.js';
import Comment from './components/Comment.js';

class App extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      mode: "main"
    }
  }


  render() {
    console.log("rendered")
    var _content=null

    if(this.state.mode==="main"){
      _content=<Main></Main>
    }else if(this.state.mode==="gallary"){
      _content=<Gallary></Gallary>
    }else if(this.state.mode==="comment"){
      _content=<Comment></Comment>
    }

    return (
      <div className="App">
        <h1>2021 Graduation Exhibition</h1>
        <div>
          <h4 className='menu'><a href="/" onClick={function(e){
            console.log("Onclick event of MAIN")
            e.preventDefault();
            if(this.state.mode==="main"){
              this.setState({
                mode:"null"
              })
            }
            else{
              this.setState({
                mode:"main"
              })
            }
          }.bind(this)}>MAIN</a></h4>

          <h4 className='menu'><a href="/" onClick={function(e){
            console.log("Onclick event of GALLARY")
            e.preventDefault();
            if(this.state.mode==="gallary"){
              this.setState({
                mode:"null"
              })
            }
            else{
              this.setState({
                mode:"gallary"
              })
            }
          }.bind(this)}>GALLARY</a></h4>

          <h4 className='menu'><a href="/" onClick={function(e){
            console.log("Onclick event of COMMENT")
            e.preventDefault();
            if(this.state.mode==="comment"){
              this.setState({
                mode:"null"
              })
            }
            else{
              this.setState({
                mode:"comment"
              })
            }
          }.bind(this)}>COMMENT</a></h4>
        </div>
        <Title mode={this.state.mode}></Title>
        {_content}
      </div>
    );
  }
}

export default App;
