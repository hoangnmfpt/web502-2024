import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
function App() {
  // JSX
  const handleClick = () => {
    console.log('hello')
  }
  return (
    <>
      <Header />
      <Home />
      {/* <h2>Xin chao cac bạn!</h2>
      <button className='btn' onClick={handleClick}>
        Click me!
      </button> */}

      <Footer />
    </>
  )
  // return React.createElement('div', { className: 'app' }, React.createElement('h1', {}, 'Hello, World!'))
}

export default App
