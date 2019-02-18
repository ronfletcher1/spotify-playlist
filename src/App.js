import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const defaultStyle = {
  color: 'black'
};
const fakeServerData = {
  user: {
    name: 'Ron',
    playlists: [
      {
        name: 'Old School Fun',
        songs: [
          {name: 'Still Not A Player', duration: 1345},
          {name: 'I Get Around', duration: 1236},
          {name: 'Back That Azz Up', duration: 1860}
        ]},
      {
        name: 'Undergroung',
        songs: [
          {name: 'FootFungus', duration: 1590}, 
          {name: 'Jurassic', duration: 1876},
          {name: 'Sexy Can I', duration: 1238}
        ]},
      {
        name: 'Slow Jams',
        songs: [
          {name: 'Fallen', duration: 2222},
          {name: 'Foolish', duration: 1678},
          {name: 'If You Love Me', duration: 1344}
        ]},
      {
        name: 'Other',
        songs: [
          {name:  'Leave Me Alone', duration: 1921},
          {name:  'Sorry Not Sorry', duration: 1677},
          {name:  'Push It', duration: 1298}
        ]}
    ]
  }
};
class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
        
      </div>
    )
  }
}
class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist)=> {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
        
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type='text'/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>  
          <li>{song.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({serverData: fakeServerData});
  }, 1000);
    setTimeout(()=>{
      this.setState({filterString: 'Jams'});
  }, 2000);
  }
  render() {

    return (
      <div className="App">
        {this.state.serverData.user ?
        <div> 
          <h1 style={{...defaultStyle, 'fontSize': '60px'}}>
            {this.state.serverData.user.name}'s Playlists
        </h1> 
        <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HoursCounter playlists={this.state.serverData.user.playlists}/> 
        <Filter />
        {this.state.serverData.user.playlists.filter(playlist =>
          playlist.name.includes(this.state.filterString)
        ).map(playlist => 
         <Playlist playlist={playlist}/>
        )}
  
      </div> : <h1>Loading...</h1>
      }
    </div>
    );
  }
}

export default App;
