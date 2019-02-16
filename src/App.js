import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render() {
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2 style={{color: 'gold'}}>Number Text</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img />
        <input type='text'/>
        Filter
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{width: "25%", display: 'inline-block'}}>
        <img />
        <h3>Playlist</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
