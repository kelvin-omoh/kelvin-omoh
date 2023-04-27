import { NewsArticle } from '@/NewsArticles'
import NEwsArticleGrid from '@/components/NEwsArticleGrid'
import NewsArticleEntry from '@/components/NewsArticleEntry'
import Head from 'next/head'
import React, { FC, FormEvent, useState } from 'react'

const search:FC = () => {
  const [searchResults,setSearchResults]=useState<NewsArticle[] |null>(null)
  const [searchResultsLoading,setSearchResultsLoading]=useState<boolean>(false)
  const [searchResultsLoadingISError,setSearchResultsLoadingIsError]=useState<boolean>(false)
  
  const handleSubmit=async(e:FormEvent<HTMLFormElement> )=>{
    e.preventDefault()
    const  formData=new FormData(e.target as HTMLFormElement);
    const searchQuery=formData.get('searchQuery')?.toString().trim();

    if(searchQuery){
       try{
         setSearchResults(null)
         setSearchResultsLoadingIsError(false)
         setSearchResultsLoading(true)
         const res=await fetch("/api/search-news?q="+searchQuery)
         const articles :NewsArticle[]= await res.json()
         setSearchResults(articles)
       }
       catch(e){
        console.log(e);
        setSearchResultsLoadingIsError(true)
        
       }
       finally{
        setSearchResultsLoading(false)
       }
    }
  }
  
  return (
    <div>
      <Head>
        <title  key={"title"}>Search news - Next js News App</title>
      </Head>
        <main className=' h-[100vh]  flex flex-col gap-4 p-4'>
              <h1 className=' text-[1.3em]' >Seacrch news Page</h1>
              <form onSubmit={handleSubmit} className=' flex flex-col gap-3' name='search-input'>
                 <label htmlFor="">search query</label>
                 <input name='searchQuery' className='p-5 ' type="text" placeholder='E.g politics, sport....' />
                 <button disabled={searchResultsLoading} className=' p-3 bg-blue-500 text-white'> search</button>
              </form>

              <div className=' flex flex-col items-center '>
                {searchResultsLoading && <p>Loading........</p>}
                {searchResultsLoadingISError && <p>SOmething Went Wrong . Please try again</p> }

                {searchResults?.length ===0 && <p>Nothing Found. please try a different Query </p> }
                {searchResults && <NEwsArticleGrid articles={searchResults} /> }
              </div>
        </main>
    
    </div>
  )
}

export default search
