// The ColorPicker changes colors of things.
import React, { Component } from 'react'

class ColorPicker extends Component {
  render() {
    return (
      <div className="settingWrapper">
        <label 
          htmlFor={ this.props.id } 
          style={{ "color": this.propsTextColor }}>
          { this.props.label }
        </label>
        <input 
          type="color"
          value={ this.props.color } 
          id={ this.props.id }
          onChange={ 
            (e) => {
              this.props.handleChange(e.target.value)
            }} 
          />
      </div>
    )
  }
}

export default ColorPicker