import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( { toggleDarkMode , darkMode }) => {

  const username = localStorage.getItem("login")

  const handleLogout = () => {
    localStorage.setItem("login" , "")
    localStorage.setItem("token" , "")
    window.location.reload()
    alert("Logout Successful")
  }

  return (
  <div>
      <div className='sm:block md:flex items-center justify-between md:p-2 w-auto dark:bg-navBar border-b-2 dark:border-fuchsia-500'>
       <div className='flex-shrink-0 cursor-pointer space-x-12 sm:py-4'>
       <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 italic ml-4">
        <span className="relative px-6 py-3 text-xl transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            <Link to={`/`}>Tech Times</Link>
        </span>
      </button>
       </div>
       <div className='flex space-x-12 sm:pl-4'>
       <div><button className='active:bg-fuchsia-500 p-1 rounded-full'><Link to={`/`}>Home</Link></button></div>
       <div><button className='active:bg-fuchsia-500 p-1 rounded-full'><Link to={`/resources`}>Resources</Link></button></div> 
       <div><button className='active:bg-fuchsia-500 p-1 rounded-full'><Link to={`/techTips`}>Tech Tips</Link></button></div>
       <div><button className='active:bg-fuchsia-500 p-1 rounded-full'><Link to={`/about`}>About</Link></button></div>
       </div>
       
      <div className='flex items-center space-x-12 sm:p-4'>
      <div className=''>
        <button className='' onClick={toggleDarkMode}>{ darkMode ? <i className="fa-regular fa-sun p-3 rounded-3xl border-2"></i> : <i className="fa-regular fa-moon py-3 px-3.5 rounded-3xl border-2"></i> }</button>
      </div>
      <div className=''>
      { username ? <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 mr-4" onClick={() => handleLogout()}>
        <span className="relative px-6 py-2.5 text-sm transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
        Logout
        </span>
      </button> : 
      <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 mr-4">
      <span className="relative px-6 py-2.5 text-sm transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
       <Link to={`/login`}>Login</Link>
      </span>
    </button>}
      </div>
      </div>
       </div>
  </div>
   
  )
}

export default Navbar