import { NewsArticle } from '@/NewsArticles'
import React from 'react'
import NewsArticleEntry from './NewsArticleEntry'

interface NEwsArticleGridProps{
    articles:NewsArticle[]
}
const NEwsArticleGrid = ({articles}:NEwsArticleGridProps) => {
  return (
    <>
     <div className="flex  items-center m-1 w-full font-medium py-1 px-2 bg-white-300 rounded-md text-blue-700 bg-blue-100 border border-blue-300 ">
            <div slot="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-info w-5 h-5 mx-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </div>
            <div className="text-xl font-normal  max-w-full flex-initial">
                <div className="py-2">This is an info message
                    <div className="text-sm font-base">More information about the message can be found <a href="/#">here</a></div>
                </div>
            </div>
           
        </div>


        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 p-4 justify-center items-center  w-[100vw] '>
       
       {articles.map((article)=>(
         <div >
            <div className='my-2 ' key={article.url}>
               <NewsArticleEntry article={article}/>
            </div>
         </div>
       ))}
     </div> 
    </>
   
  )
}

export default NEwsArticleGrid
