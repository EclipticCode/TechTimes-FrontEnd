import React from 'react'

const lists = [
    { href : "https://www.freecodecamp.org/" ,
      websiteName : "freeCodeCamp" ,
      description : " A nonprofit interactive learning platform that covers JavaScript and web development."
    } , 
    { href : "https://www.w3schools.com/" ,
        websiteName : "W3Schools" ,
        description : "Known for its beginner-friendly tutorials, W3Schools offers detailed guides on web development technologies."
      } , 
      { href : "https://www.sololearn.com/en/" ,
        websiteName : "SoloLearn" ,
        description : "A mobile-first platform that provides bite-sized lessons and coding challenges in a gamified format."
      } , 
      { href : "https://overapi.com/" ,
        websiteName : "OverAPI" ,
        description : "A collection of cheat sheets for various programming languages and frameworks, making it a handy quick-reference guide."
      } , 
      { href : "https://www.skillreactor.io/" ,
        websiteName : "SkillReactor" ,
        description : " SkillReactor helps developers learn by building real-world projects and receiving feedback."
      } , 

]



const Resources = () => {
  return (
    <div className='grid justify-items-center m-32'>
        <h1 className='text-5xl font-bold'>Best Online Learning Sites for Programming</h1>
        <div className='mt-16 h-auto w-3/4 border-2 border-teal-500 rounded-md dark:bg-navBar text-left p-6 font-light text-lg dark:border-teal-500 '>
         Discover the best online learning sites for programming to kickstart or advance your coding skills from the comfort of your home. Explore top platforms like Codecademy, freeCodeCamp, Coursera, and more.
        </div>
        <div className='mt-16 h-auto w-3/4 text-left p-6 font-light text-xl'>
        Looking to dive into programming or enhance your coding skills? Discover the best online platforms to kickstart or advance your programming journey right from the comfort of your home. We've curated a list of top-notch sites offering a wide range of programming languages, interactive learning experiences, and community support to cater to both beginners and experienced coders. Here's what we found:
        </div>
          <div className='text-lg mt-16 mb-20 w-3/4 p-6 text-left'>
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