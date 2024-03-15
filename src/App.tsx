import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './common/Product'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import instance from './apis'

// ! Props = Propeties (Thuộc tính)
// ! Lay ten cua nguoi dung tinh toan... co ket qua la yourname

// ! App là dumb component
const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* Home la UI component */}
      <Footer />
    </>
  )
}

export default App
