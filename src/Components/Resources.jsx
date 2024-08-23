import React from 'react'
import { lists } from './constants'


const Resources = () => {
  return (
    <div className='grid justify-items-center mt-16'>
        <h1 className='text-5xl font-bold mt-16'>Best Online Learning Sites for Programming</h1>
        <div className='mt-16 h-auto w-3/4 border-2 border-teal-500 rounded-md dark:bg-navBar text-left p-6 font-light text-lg dark:border-teal-500 hover:opacity-80'>
         Discover the best online learning sites for programming to kickstart or advance your coding skills from the comfort of your home. Explore top platforms like Codecademy, freeCodeCamp, Coursera, and more.
        </div>
        <div className='mt-16 h-auto w-3/4 text-left p-6 font-light text-xl'>
        Looking to dive into programming or enhance your coding skills? Discover the best online platforms to kickstart or advance your programming journey right from the comfort of your home. We've curated a list of top-notch sites offering a wide range of programming languages, interactive learning experiences, and community support to cater to both beginners and experienced coders. Here's what we found:
        </div>
          <div className='text-lg mt-16 w-3/4 p-6 text-left'>
            <ul className='list-disc space-y-4'>
                {lists.map((list , index) => (
                    <li key={index}><a className="hover:underline hover:dark:text-teal-500" href={list.href} target='_blank'>{list.websiteName}</a>: {list.description}</li>
                ))}
            </ul>
          </div>
    </div>
  )
}

export default Resources