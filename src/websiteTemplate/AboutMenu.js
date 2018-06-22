import React from 'react'
import {NavLink} from 'react-router-dom'
import './about-menu.css'

const selectStyle = {
  backgroundColor: 'white',
  color: 'slategray'
}

export const Company = () => <section className='company box'>
  <h2>my company website</h2>
  <p>this is company</p>
</section>

export const History = () => <section className="history box">
  <h2>my company history</h2>
  <p>this is history</p>
</section>

export const Services = () => <section className="Services box">
  <h2>my company Services</h2>
  <p>this is Services</p>
</section>

export const Location = () => <section className="Location box">
  <h2>my company Location</h2>
  <p>this is Location</p>
</section>

export const AboutMenu = ({match}) => <ul className="about-menu">
  <li>
    <NavLink to='/about' style={match.isExact && selectStyle}>Company</NavLink>
  </li>
  <li>
    <NavLink to='/about/history' activeStyle={selectStyle}>History </NavLink>
  </li>
  <li>
    <NavLink to='/about/services' activeStyle={selectStyle}>Services</NavLink>
  </li>
  <li>
    <NavLink to='/about/location' activeStyle={selectStyle}>Location</NavLink>
  </li>
</ul>
