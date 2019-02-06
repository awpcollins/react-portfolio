import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import './css/custom.css'

ReactDOM.render(<App />, document.getElementById('root'))

import ghpages from 'gh-pages'
 
ghpages.publish('dist', function(err) {})
