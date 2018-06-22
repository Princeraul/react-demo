import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Star from './Star'
class StartRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starSelected: 0
    }
    this.change = this.change.bind(this)
  }
  static propTypes = {
    totalStars: PropTypes.number
  }
  static defaultProps = {
    totalStars: 5
  }
  change(starSelected) {
    this.setState({starSelected})
  }
  render() {
    const {totalStars} = this.props
    const {starSelected} = this.state
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((m, i) =>
          <Star key={i} selected={i<starSelected} onClick={() => this.change(i+1)}  />
        )}
        <p>{starSelected} of {totalStars} stars</p>
      </div>

    )
  }
}

export default StartRating
