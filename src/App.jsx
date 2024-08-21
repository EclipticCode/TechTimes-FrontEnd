import React , { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {

  const [darkMode , setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='h-screen w-auto dark:bg-darkMode dark:text-textDarkMode'>
      <Navbar toggleDarkMode = {toggleDarkMode} darkMode = {darkMode}/>
      </div>
    </div>
  )
}

export default App