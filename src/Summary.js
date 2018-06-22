import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Summary extends Component {
  render() {
    const { ingredients, steps, title } = this.props
    return (
      <div className="summary">
        <h1>{ title }</h1>
        <p>
          <span>{ ingredients } ingredients | </span>
          <span>{ steps } steps |</span>
        </p>
      </div>
     )
  }
}
Summary.propTypes = {
  ingredients:  PropTypes.number.isRequired,
  steps:  PropTypes.number.isRequired,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error('A title must be string') :
        (props[propName].length > 20) ?
          new Error('title is over 20 characters') :
           null
}

 Summary.defaultProps = {
   ingredients: 0,
   steps: 0,
   title: '[recipe]'
 }

 export default Summary