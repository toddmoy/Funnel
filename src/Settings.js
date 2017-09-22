// Settings contains controls that affect the Funnel aesthetics and content.
// It'd be cool to store this in Local for return visits. 

import React, { Component } from 'react'
import DataForm from './DataForm'
import ColorPicker from './ColorPicker'
import './Settings.css'

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <h2 className="title">Settings</h2>
        <h3 className="subtitle">Steps</h3>
        <DataForm 
          steps={ this.props.steps } 
          handleTitleChange={ this.props.handleTitleChange }
          handlePercentageChange={ this.props.handlePercentageChange }
          handleStepRemoval={ this.props.handleStepRemoval }
          handleStepAddition={ this.props.handleStepAddition } />
        <h3 className="subtitle">Colors</h3>
        <ColorPicker 
          id="color-step"
          label="Funnel Color" 
          color={ this.props.stepColor }
          handleChange={ this.props.handleBackgroundColorChange } />
        <ColorPicker 
          id="color-text" 
          label="Text Color"
          color={ this.props.textColor }
          handleChange={ this.props.handleTextColorChange } />
      </div>
    )
  }
}

export default Settings