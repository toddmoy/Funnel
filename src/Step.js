// A step contains the container div, a bar whose height changes, and a label. 

import React, { Component } from 'react'
import './Step.css'

class Step extends Component {
  render() {
    return (
      <div className="step">
        <span className="stepLabel">
          { this.props.title }
        </span>
        <div 
          className="stepBar" 
          style={{ 
            "height": this.props.percentage + "%",
            "backgroundColor": this.props.backgroundColor, 
            "color": this.props.textColor }}>
          { this.props.percentage + "%" }
        </div>
      </div>
    )
  }
}

export default Step