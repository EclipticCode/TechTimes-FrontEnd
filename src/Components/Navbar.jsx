import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( { toggleDarkMode , darkMode }) => {
  return (
  <div>
      <div className='sm:block md:flex items-center justify-between p-2 w-auto dark:bg-navBar dark:text-textDarkMode border-b-2 dark:border-teal-500'>
       <div className='flex-shrink-0 cursor-pointer space-x-12'>
       <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 italic">
        <span className="relative px-6 py-3 text-xl transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Tech Times
        </span>
      </button>
       </div>
       <div className='flex space-x-12'>
       <div className=''><button>Home</button></div>
       <div className=''>Resources</div> 
       <div className=''>About</div>
       <div className=''>Tech Tips</div>
       </div>
       
      <div className='flex  items-center space-x-12'>
      <div className=''>
        <button className='' onClick={toggleDarkMode}>{ darkMode ? <i className="fa-regular fa-sun p-3 rounded-3xl border-2"></i> : <i className="fa-regular fa-moon py-3 px-3.5 rounded-3xl border-2"></i> }</button>
      </div>
      <div className=''>
      <button className="relative inline-flex items-center justify-center p-0.5 font-medium overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
        <span className="relative px-6 py-2.5 text-sm transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Login
        </span>
      </button>
      </div>
      </div>
       </div>
  </div>
   
  )
}

export default Navbar