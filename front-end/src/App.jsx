import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={postRouter: ""};
  }
  callPosts(){
    fetch("http://localhost:8080/posts")
    .then(res => res.text())
    .then(res => this.setState({postRouter: res}));
  }

  componentWillMount(){
    this.callPosts();
  }


render() {
  return (
    <div className="App">
      <p>Hello {this.state.postRouter}</p>
    </div> 
  );
}
}

export default App
