import './App.css';
import React, { Component } from 'react';
import Title from './components/Title';
import Main from './components/Main';
import Gallary from './components/Gallary';
import Comment from './components/Comment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "null"
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
    }else if(this.state.mode==="null"){
      _content=null
    }

    return (
      <div className="App">
        <h1>Welcome to My Graduation Exhibition :)</h1>
        <div>

          <h4><a href="/" onClick={function(e){
            console.log("Onclick even of MAIN")
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

          <h4><a href="/" onClick={function(e){
            console.log("Onclick even of GALLARY")
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


          <h4><a href="/" onClick={function(e){
            console.log("Onclick even of COMMENT")
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
