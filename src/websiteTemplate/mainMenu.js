import React from 'react'
import {NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import './mainMenu.css'

const selectStyle = {
  backgroundColor: 'white',
  color: 'slategray'
}

const MainMenu = () =>
  <nav className="main-menu">
    <NavLink to='/'><HomeIcon/></NavLink>
    <NavLink to='/about' activeStyle={selectStyle}>About</NavLink>
    <NavLink to='/events' activeStyle={selectStyle}>Events</NavLink>
    <NavLink to='/products' activeStyle={selectStyle}>products</NavLink>
    <NavLink to='/contact' activeStyle={selectStyle}>contact us</NavLink>
  </nav>
export default MainMenu
