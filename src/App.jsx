import './App.css'

import { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <News />
      </>
    )
  }
}
