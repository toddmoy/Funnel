// The DataForm controls addition, editing, and deletion of Steps in the Funnel.
import React, { Component } from 'react'
import StepInput from './StepInput'

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

  export default DataForm