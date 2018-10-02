import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Components/Root'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
