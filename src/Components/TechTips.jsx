import React from 'react'
import { contentsTechTips } from './constants'


const TechTips = () => {
  return (
    <div className='grid justify-items-start mx-32 mt-32'>
      {contentsTechTips.map((content , index) => (
         <div key={index}>
          <h2 className='md:text-2xl sm:text-xl font-semibold pb-4'>{content.heading}</h2>
          <p className='md:text-xl sm:text-lg font-medium text-gray-400 pb-4'>{content.desciption}</p>
          <ul className='list-disc'>
            <li className='pb-2 font-light md:text-lg sm:text-base'><span className='font-medium md:text-xl sm:text-base'>{content.point1.topic}</span> {content.point1.description}</li>
            <li className='pb-2 font-light md:text-lg sm:text-base'><span className='font-medium md:text-xl sm:text-base'>{content.point2.topic}</span> {content.point2.description}</li>
            <li className='pb-2 font-light md:text-lg sm:text-base'><span className='font-medium md:text-xl sm:text-base'>{content.point3.topic}</span> {content.point3.description}</li>
          </ul>
          <hr className='my-16'/>
         </div>
      ))}
    </div>
  )
}

export default TechTips