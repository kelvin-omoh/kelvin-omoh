import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/NewsArticles'
import NewsArticleEntry from '@/components/NewsArticleEntry'
import NEwsArticleGrid from '@/components/NEwsArticleGrid'

interface  BreakingNewsPageProps{
  newsArticles:NewsArticle[],
}

export const getServerSideProps:GetServerSideProps<BreakingNewsPageProps>= async()=>{

   const res=await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`)

   const newsRes:NewsResponse=await res.json()
   return{
    props:{
      newsArticles:newsRes.articles
    }
   }
}


export default function BreakingNewsPage({newsArticles}:BreakingNewsPageProps) {
  return (
    <>
    <Head>
      <title key={"title"}>BreakingNews - NextJS News App</title>
    </Head>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1 className=' font-semibold'>Breaking News</h1>
     <NEwsArticleGrid articles={newsArticles}/>
    </main>
    </>
  )
}
