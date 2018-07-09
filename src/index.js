import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import articles from './fixtures'
import './animation.css'

ReactDOM.render(<App articles={articles} />, document.getElementById('root'))
