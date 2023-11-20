import './App.css'
import { Component } from 'react'
import Navbar from './components/Navbar'
// import News from './components/News'
import { Outlet } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }
}

