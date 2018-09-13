import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href = "http://www.nwmissouri.edu">
          <img src= "../northwest.png" className="App-logo" alt="logo" />
         </a>
          <h1 className="App-title">Hughes FieldHouse</h1>
        </header>
        <LinkTileBox/>
      </div>
      
    );
  }
}



//Link Tile Box is the box of links you see on hughes fieldhouse current site
//Could break down each component into smaller tiles but I think the LinkTileBox is only used on home anyways
class LinkTileBox extends Component {
  render() {
    return (
      <div class="grid-container">
        <div class="grid-item" >
          <a href="experience.htm" target="_self" title="Title">
          <img alt="Title" height="136px" src="images/Title.jpg" width="287px"/>
          <h3>Title</h3>
          </a>
        </div>  
        <div class="grid-item" >
          <a href="experience.htm" target="_self" title="Title">
          <img alt="Title" height="136px" src="images/Title.jpg" width="287px"/>
          <h3>Title</h3>
          </a>
        </div> 
        <div class="grid-item" >
          <a href="experience.htm" target="_self" title="Title">
          <img alt="Title" height="136px" src="images/Title.jpg" width="287px"/>
          <h3>Title</h3>
          </a>
        </div> 
        <div class="grid-item" >
          <a href="experience.htm" target="_self" title="Title">
          <img alt="Title" height="136px" src="images/Title.jpg" width="287px"/>
          <h3>Title</h3>
          </a>
        </div>  
        <div class="grid-item" >
          <a href="experience.htm" target="_self" title="Title">
          <img alt="Title" height="136px" src="images/Title.jpg" width="287px"/>
          <h3>Title</h3>
          </a>
        </div> 
        <div class="grid-item" >
          <a href="experience.htm" target="_self" title="Title">
          <img alt="Title" height="136px" src="images/Title.jpg" width="287px"/>
          <h3>Title</h3>
          </a>
        </div> 
        
        
      </div>

    );
  }
}








export default App;