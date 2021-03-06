import React from 'react'
import './star.css'
const Star = ({selected, onClick=f=>f}) =>
  <div className={(selected) ? 'star selected' : 'star'} onClick={onClick}></div>

export default Star
