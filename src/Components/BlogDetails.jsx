import React from 'react'
import { useParams } from 'react-router-dom';
import { BlogDetailsContent } from './constants';

const BlogDetails = () => {

    const { id } = useParams() ;
    const blogId = parseInt(id)
const blogContent = BlogDetailsContent.find((blogContent) => blogContent.id === blogId)

  return (
    <div className='grid justify-items-start mt-16 mx-32'>
   
             <h2 className='text-3xl font-bold my-16'>{blogContent?.heading}</h2>
        <img src={blogContent?.imgSrc} alt="content-image" className='size-full md:size-auto mb-16 mx-auto'/>
       <div className='mb-16'>
       <h4 className='text-2xl pb-4 font-semibold'>Introduction</h4>
        <p className='text-lg tracking-wide font-light dark:text-gray-400 leading-relaxed'>{blogContent?.introductionContent}</p>
       </div>
       <div className='mb-16'>
       <h4 className='text-2xl pb-4 font-semibold'>{blogContent?.firstTopic?.heading}</h4>
        <ul className='list-disc text-lg tracking-wide font-light dark:text-gray-400 leading-relaxed'>
            <li><span className='font-semibold'>{blogContent?.firstTopic?.subHeading1}</span>{blogContent?.firstTopic?.subHeading1Content}</li>
            <li><span className='font-semibold'>{blogContent?.firstTopic?.subHeading2}</span>{blogContent?.firstTopic?.subHeading2Content}</li>
            <li><span className='font-semibold'>{blogContent?.firstTopic?.subHeading3}</span>{blogContent?.firstTopic?.subHeading3Content}</li>
           {blogContent.firstTopic.subHeading4 ? ( <li><span className='font-semibold'>{blogContent?.firstTopic?.subHeading4}</span>{blogContent?.firstTopic?.subHeading4Content}</li>) : <></>}
            
        </ul>
       </div>
       <div className='mb-16'>
       <h4 className='text-2xl pb-4 font-semibold'>{blogContent?.secondTopic?.heading}</h4>
        <ul className='list-decimal text-lg tracking-wide font-light dark:text-gray-400 leading-relaxed'>
            <li><span className='font-semibold'>{blogContent?.secondTopic?.subHeading1}</span>{blogContent?.secondTopic?.subHeading1Content}</li>
            <li><span className='font-semibold'>{blogContent?.secondTopic?.subHeading2}</span>{blogContent?.secondTopic?.subHeading2Content}</li>
            <li><span className='font-semibold'>{blogContent?.secondTopic?.subHeading3}</span>{blogContent?.secondTopic?.subHeading3Content}</li>
            {blogContent.secondTopic.subHeading4 ? (<li><span className='font-semibold'>{blogContent?.secondTopic?.subHeading4}</span>{blogContent?.secondTopic?.subHeading4Content}</li>) : <></>}
        </ul>
       </div>
       <div className='mb-16'>
       <h4 className='text-2xl pb-4 font-semibold'>Conclusion</h4>
       <p className='font-light text-lg dark:text-gray-400 leading-relaxed'>{blogContent?.conclusionContent}</p>
       </div>
        </div>
      
  )
}

export default BlogDetails