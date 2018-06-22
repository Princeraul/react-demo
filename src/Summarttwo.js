import React from 'react'
import PropTypes from 'prop-types'

const SummaryTwo = ({ regredients, title }) => {
  return (
    <div>
      <h1> { title }</h1>
      <p> { regredients } | regredients</p>
    </div>
  )
}

SummaryTwo.propTypes = {
  regredients: (props, propName) => console.log(typeof props[propName]),
  title: PropTypes.string.isRequired
}

export default SummaryTwo
