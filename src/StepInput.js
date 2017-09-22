import React, { Component } from 'react'

// The StepInput controls a single Step. It affects the title and height.
  
class StepInput extends Component {
  render() {
    return (
      <div className="settingWrapper stepInput">
        <label className="visuallyHidden">Name</label>
        <input
          type="text" 
          value={ this.props.title } 
          placeholder="Enter title"
          onClick={ (e) => { e.target.select() } }
          onChange={ 
            (e) => { 
              this.props.handleTitleChange( this.props.stepId, e.target.value ) 
            }} 
        />
        <label className="visuallyHidden">Value</label> 
        <input 
          type="number" 
          min="0" 
          max="100" 
          step="5"
          placeholder="val"
          value={ this.props.percentage }
          onClick={ (e) => { e.target.select() } }
          onChange={ 
            (e) => { 
              this.props.handlePercentageChange( this.props.stepId, e.target.value ) 
            }} 
        />%
        <button tabIndex="-1" onClick={ 
          () => { 
            this.props.handleStepRemoval( this.props.stepId ) 
          }}>×</button>
      </div>
    )
  }
}

export default StepInput