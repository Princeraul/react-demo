import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddColorForm.css'

class AddColorForm extends Component {
  static propTypes = {
    onNewMenuColor: PropTypes.func
  }
  static defaultProps = {
    onNewMenuColor: f => f
  }
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit (e) {
    const { _title, _color } = this.refs
    e.preventDefault()
    // alert(`New color: ${ _title.value } ${ _color.value }`)
    this.props.onNewMenuColor(_title.value, _color.value)
    _title.value = ''
    _color.value = '#000'
    _title.focus()
  }
  render () {
    return (
      <form onSubmit = { this.submit }>
        <input type='text' placeholder='color title' ref='_title' required/>
        <input type='color' placeholder='select color' ref='_color' required />
        <button>AddColor</button>
      </form>
    )
  }
}

export default AddColorForm
