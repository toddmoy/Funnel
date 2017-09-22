import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

var data = [
  { "title": "Click Signup", "percentage": "100" },
  { "title": "Create Account", "percentage": "40" },
  { "title": "Complete Profile", "percentage": "20" },
]

ReactDOM.render(<App steps={data} />, document.getElementById('root'))
registerServiceWorker()
