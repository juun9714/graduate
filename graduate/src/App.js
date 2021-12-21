import './App.css';
import React, { Component } from 'react';
import Title from './components/Title'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "main"
    }
  }


  render() {
    return (
      <div className="App">
        Hello React!
        <div>
          <h4><a href="/" onClick={function(e){
            console.log("Onclick even of MAIN")
            e.preventDefault();
            this.setState({
              mode:"main"
            })
          }.bind(this)}>MAIN</a></h4>
          <h4><a href="/" onClick={function(e){
            console.log("Onclick even of GALLARY")
            e.preventDefault();
            this.setState({
              mode:"gallary"
            })
          }.bind(this)}>GALLARY</a></h4>
          <h4><a href="/" onClick={function(e){
            console.log("Onclick even of COMMENT")
            e.preventDefault();
            this.setState({
              mode:"comment"
            })
          }.bind(this)}>COMMENT</a></h4>
        </div>
        <Title mode={this.state.mode}></Title>
      </div>
    );
  }
}

export default App;
