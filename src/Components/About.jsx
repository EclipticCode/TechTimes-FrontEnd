import React from 'react'

const contents = [
    { heading : "About Me" ,
      description : "Hello!👋 I’m Janani, a software developer with a deep passion for technology and a keen interest in building web applications that make a difference. My journey in the tech world began with curiosity and has grown into a full-fledged passion for coding, problem-solving, and continuous learning."
    } ,
    { heading : "Why I Love the MERN Stack" ,
        description : "As a developer, 🤓 I've explored various technologies, but the MERN stack (MongoDB, Express.js, React, and Node.js) has truly captured my interest. The MERN stack offers a powerful combination of tools that allow me to create dynamic, responsive, and full-stack applications seamlessly. I appreciate how it enables me to work with JavaScript across the entire development process, from front-end to back-end, making development faster and more efficient.The flexibility of MongoDB, the simplicity of Express.js, the interactivity of React, and the robustness of Node.js make this stack an ideal choice for building modern web applications. Whether it’s developing a sleek user interface or managing data efficiently on the server side, the MERN stack has empowered me to bring my ideas to life."
      } ,
      { heading : "My Coding Philosophy" ,
        description : "I believe that coding is not just about writing lines of code; it's about crafting solutions that are both effective and elegant. My approach to development emphasizes clean code, scalability, and user-centric design. I strive to write code that not only works but is also easy to maintain and understand. Continuous learning and staying updated with the latest trends are key to my growth as a developer, and I’m always eager to explore new technologies that can enhance my skill set."
      } ,
      { heading : "Beyond the Screen" ,
        description : "When I’m not coding, I enjoy diving into a good book, 📖 exploring new technologies, or tinkering with side projects. I’m also an advocate for lifelong learning and love sharing my knowledge with others. This blog is a reflection of my journey in the tech world, where I share insights, tutorials, and experiences to help others on their path."
      } ,

]

const About = () => {
  return (
    <div className='grid justify-items-center mt-16 mx-32'>
        {contents.map((content , index) => (
          <div key={index}>
              <h2 className='text-3xl font-semibold mt-16'>{content.heading}</h2>
              <div className='mt-4 font-medium text-gray-500'>{content.description}</div>
           </div>
        ))}
         <div className='mt-16 h-auto w-3/4 border-2 border-teal-500 rounded-md dark:bg-navBar text-left p-6 font-light text-lg dark:border-teal-500 hover:opacity-80'>
         Feel free to connect 🤝 with me through this blog or on social media. Whether you have questions, suggestions, or just want to discuss tech, I’m always open to conversations. Let’s learn and grow together in this ever-evolving field!😊🙌
        </div>
    </div>
  )
}

export default About