import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

// components
import { Admin, LifeComponent, GridComponent } from './pages'

class App extends Component {
  render() {
    return (
      <GridComponent />
    )
    // return (
    //   <Admin />
    // )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <LifeComponent />
    //   </div>
    // )
  }
}

export default App
