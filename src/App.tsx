import React from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  // return React.createElement('div', { className: 'app' }, React.createElement('h1', {}, 'Hello, World!'))

  return (
    <div className='app'>
      <h1>Hello, World!</h1>
      <button>Click Me</button>
      <Home />
    </div>
  )
}

export default App
