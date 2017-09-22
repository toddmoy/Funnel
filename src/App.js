import React, { Component } from 'react'
import './App.css'

// A Funnel contains 0..n Steps

class Funnel extends Component {
  
    render() {
      let steps = []
      let noData = <div className="emptyState"><p className="emptyState__icon">❄️💩❄️</p><p className="emptyState__content">When you add a step, cool shit happens here.</p></div>
      let stepColor = this.props.stepColor
      let textColor = this.props.textColor
  
      // Show the steps, if there are any. Else, show the empty state.
  
      if (this.props.steps !== 0) {
        this.props.steps.forEach( function(step, index) {
          steps.push(
            <Step 
              key={ index }
              title={ step.title } 
              percentage={ step.percentage } 
              backgroundColor={ stepColor } 
              textColor={ textColor }  />
          )
        })
      } else {
        steps = noData
      }
  
      return (
        <div className="funnel">{ steps }</div>
      )
    }
  
  }
  
  
  
  // A step contains the container div, a bar whose height changes, and a label. 
  
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
  
  
  
  // Settings contains controls that affect the Funnel aesthetics and content.
  // It'd be cool to store this in Local for return visits. 
  
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
  
  
  
  // The DataForm controls addition, editing, and deletion of Steps in the Funnel.
  
  class DataForm extends Component {
  
    render() {
      let form = []
      let titleHandler = this.props.handleTitleChange
      let percentageHandler = this.props.handlePercentageChange
      let removalHandler = this.props.handleStepRemoval
      let additionHandler = this.props.handleStepAddition
  
      this.props.steps.forEach(function( step, index ) {
        form.push(<StepInput
                    key={ index }
                    stepId={ index } 
                    title={ step.title } 
                    percentage={ step.percentage }
                    handleTitleChange={ titleHandler }
                    handlePercentageChange={ percentageHandler }
                    handleStepRemoval={ removalHandler } 
                  />)
      })
  
      return (
        <div className="dataForm">
          { form }
          <button className="btn-add" onClick={ additionHandler }>Add step</button>
        </div>
      )
    }
  
  }
  
  
  
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
  
  
  
  // The ColorPicker changes colors of things.
  
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
  
  
  
  // The App controls state, handles events, and lays out controls.
  
  class App extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        textColor: "#333333",
        stepColor: "#50E3C2",
        steps: props.steps
      }
    }
  
    handlePercentageChange = (stepId, value) => {
      let tmp = this.state.steps
      tmp[stepId].percentage = value
      this.setState({ "steps": tmp })
    }
  
    handleTitleChange = (stepId, value) => {
      let tmp = this.state.steps
      tmp[stepId].title = value
      this.setState({ "steps": tmp })
    }
  
    handleBackgroundColorChange = (e) => {
      this.setState({ "stepColor": e })
    }
  
    handleTextColorChange = (e) => {
      this.setState({ "textColor": e })
    }
  
    handleStepRemoval = (stepId) => {
      let tmp = this.state.steps
      tmp.splice(stepId, 1)
      this.setState({ "steps": tmp })
    }
  
    handleStepAddition = () => {
      let step = { "title": "New Step", "percentage": "50" }
      let tmp = this.state.steps
      tmp.push(step)
      this.setState({ "steps": tmp })
    }
  
    render() {
      return (
        <div className="app">
  
          <main className="main">
            <Funnel 
              stepColor={ this.state.stepColor }
              textColor={ this.state.textColor }
              steps={ this.state.steps } />
          </main>
  
          <aside className="sidebar">
            <Settings 
              stepColor={ this.state.stepColor }
              textColor={ this.state.textColor }
              handleBackgroundColorChange={ this.handleBackgroundColorChange }
              handleTextColorChange={ this.handleTextColorChange }
              handlePercentageChange={ this.handlePercentageChange }
              handleTitleChange={ this.handleTitleChange }
              handleStepRemoval={ this.handleStepRemoval }
              handleStepAddition={ this.handleStepAddition }
              steps={ this.state.steps } />
          </aside>
  
        </div>
      );
    }
  }

export default App
