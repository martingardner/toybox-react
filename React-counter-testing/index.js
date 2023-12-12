import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './src/Counter/Counter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter initCount={1} />
  </React.StrictMode>,
)