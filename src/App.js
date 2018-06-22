import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './star.css'
import Summary from './Summary'
import SummaryTwo from './Summarttwo'
import AddColorForm from './AddColorForm'
import StartRating from './StartRating'
import color from './Color'
import Akus from './Pages/index'
import NavLinkRouter from './websiteTemplate/index'
const logColor = (title, color) => console.log(`todo: add new color ${title}: ${color}`)

const exisColor = {
  id: 'adfdf4456',
  title: 'big blue',
  color: '#ffff',
  rating: 0
}

const action = {
  type: 'RATE_COLOR',
  id: '65464fdsafd',
  rating: 4
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">-
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Summary ingredients={4}/>
        <SummaryTwo title="asdasd" regredients={5}/>
        <AddColorForm onNewMenuColor={logColor}/>
        <StartRating /> */}
        <NavLinkRouter />
      </div>
    )
  }
}
export default App
