import React , { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Resources from './Components/Resources';
import TechTips from './Components/TechTips';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {

  const [darkMode , setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='h-full w-auto dark:bg-darkMode dark:text-textDarkMode'>
      <Navbar toggleDarkMode = {toggleDarkMode} darkMode = {darkMode}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/resources' element={<Resources/>}></Route>
        <Route path='/techTips' element={<TechTips/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </div>
  )
}

export default App