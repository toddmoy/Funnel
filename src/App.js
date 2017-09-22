import React, { Component } from 'react'
import Funnel from './Funnel'
import Settings from './Settings'
import './App.css'
  
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
    )
  }
}

export default App
