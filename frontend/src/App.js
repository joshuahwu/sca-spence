import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import SplitPane from 'react-split-pane'
import Plots from './components/Plots'
import Miscellaneous from './components/Miscellaneous'

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="header">
          <h1> Single Cell Analysis Web Application </h1>
        </div>
        <div className="content">
          <SplitPane split="vertical" minSize={205} defaultSize={300} >
            <Form/>
            <Plots/>
          </SplitPane>
        </div>
        <div className="footer">
          <footer><p>By Joshua Wu with the Jason Spence Lab</p></footer>
        </div>
      </div>
    )
  }
}

export default App;