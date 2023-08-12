import React, { useState } from 'react'
import { useEffect } from 'react'
import Login from './Components/Login'
import Home from './Components/Home'
import About from './Components/About'
import Register from './Components/Register'
import Navbar from './Components/Navbar'
import Popup from './Components/Popup'
import { Route, Routes } from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={postRouter: ""};
  }

render() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div> 
  )
}
}

export default App
