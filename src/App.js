import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

// components
import { RouterPage } from './pages'

class App extends Component {
  render() {
    return (
      <RouterPage />
    )
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
