import React from 'react'

const contentsTechTips = [
  {
    heading : "1) Deploying Your MERN Stack Application" , 
    desciption : "After building your application, you’ll want to deploy it so others can use it. Here’s a simple overview of how to deploy a MERN stack application:" , 
    point1H : "Frontend Deployment:" ,
    point1D : "You can deploy your React frontend on platforms like Netlify or Vercel. These services allow you to deploy static websites with ease." , 
    point2H : "Backend Deployment:" ,
    point2D : "Deploy your Node.js/Express server on Heroku or Render. These platforms support Node.js applications and make it easy to connect to a MongoDB database." ,
    point3H : "Database Deployment: " ,
    point3D : "If you’re using MongoDB Atlas, you can easily connect it to your deployed application. MongoDB Atlas is a cloud database service that offers free and paid tiers."
  }  ,
  {
    heading : "2) Debugging Tips for Beginners" , 
    desciption : "Debugging is an essential skill for any developer. Here are a few tips to help you debug your MERN stack applications:" , 
    point1H : "Use Console Logs:" ,
    point1D : "console.log() is your best friend when trying to understand what’s happening in your code. Use it to print out variables and check if your logic is working correctly." ,
    point2H : "Backend Deployment: " , 
    point2D : "Deploy your Node.js/Express server on Heroku or Render. These platforms support Node.js applications and make it easy to connect to a MongoDB database." ,
    point3H : "Break Down the Problem: " ,
    point3D : "If something isn’t working, try to isolate the issue by breaking down the problem into smaller parts. Test each part individually to find where the problem lies."
  }  ,
  {
    heading : "3) Learning New Technologies" , 
    desciption : "When learning a new tool or framework, always start with the official documentation. It’s usually the most reliable source of information and provides the best practices." , 
    point1H : "Build Small Projects:" ,
    point1D : "Apply what you’ve learned by building small projects. For example, if you’re learning React, start with a simple to-do list app. This will help you understand how the different parts work together." , 
    point2H : "Join a Community: " ,
    point2D : "Whether it’s a forum, Slack group, or Discord server, joining a community of developers can provide support and inspiration. You can ask questions, share your progress, and learn from others’ experiences." ,
    point3H : "Stay Consistent: ",
    point3D : "Learning a new technology takes time. Stay consistent with your practice, and don’t get discouraged if you don’t understand everything at first. Keep building and experimenting, and things will start to click."
  }  ,
]


const TechTips = () => {
  return (
    <div className='grid justify-items-start mx-32 mt-32'>
      {contentsTechTips.map((content , index) => (
         <div key={index}>
          <h2 className='text-2xl font-semibold pb-4'>{content.heading}</h2>
          <p className='text-xl font-medium text-gray-400 pb-4'>{content.desciption}</p>
          <ul className='list-disc'>
            <li className='pb-2 font-light text-lg'><span className='font-medium text-xl'>{content.point1H}</span> {content.point1D}</li>
            <li className='pb-2 font-light text-lg'><span className='font-medium text-xl'>{content.point2H}</span> {content.point2D}</li>
            <li className='pb-2 font-light text-lg'><span className='font-medium text-xl'>{content.point3H}</span> {content.point3D}</li>
          </ul>
          <hr className='my-16'/>
         </div>
      ))}
    </div>
  )
}

export default TechTips