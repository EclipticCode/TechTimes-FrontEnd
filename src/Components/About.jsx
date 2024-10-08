import React from 'react'
import { contents } from './constants'

const About = () => {
  return (
    <div className='grid justify-items-center mt-16 mx-32'>
        {contents.map((content , index) => (
          <div key={index}>
              <h2 className='sm:text-lg md:text-3xl font-semibold mt-16'>{content.heading}</h2>
              <div className='sm:text-base md:text-lg mt-4 font-medium text-gray-500 '>{content.description}</div>
           </div>
        ))}
         <div className='mt-16 h-auto w-3/4 border-2 border-fuchsia-400 rounded-md dark:bg-navBar text-left p-6 font-light md:text-lg dark:border-fuchsia-400 hover:opacity-80'>
         Feel free to connect 🤝 with me through this blog or on social media. Whether you have questions, suggestions, or just want to discuss tech, I’m always open to conversations. Let’s learn and grow together in this ever-evolving field!😊🙌
        </div>
    </div>
  )
}

export default About