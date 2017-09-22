import React, { Component } from 'react'
import Step from './Step'
import './Funnel.css'

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

export default Funnel