import React , { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Resources from './Components/Resources';

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
        <Route path='/resources' element={<Resources/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App