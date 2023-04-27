import { NewsArticle, NewsResponse } from '@/NewsArticles'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import NEwsArticleGrid from '@/components/NEwsArticleGrid'
import { useRouter } from 'next/router'
import Head from 'next/head'
interface  CategoryNewsPageProps{
    newsArticles:NewsArticle[]
}
export const getStaticPaths:GetStaticPaths =async()=>{
const categorySlugs=[
    "business",
"entertainment",
"general",
'health',
"science",
'sports',
"technology",
];

const paths =categorySlugs.map((slug)=>(
    {
        params:{
            category:slug
        }
    }
))

return{
    paths,
    fallback:false
}


}


export const  getStaticProps: GetStaticProps = async({params})=>{
     const category=params?.category?.toString()

     const response= await  fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
     const newResponse:NewsResponse= await response.json()
     return{
        props:{
            newsArticles:newResponse,
        },
        revalidate:5 * 60
     }
}

const categoryNewsPage = ({newsArticles}:CategoryNewsPageProps) => {
    const router=useRouter();
    const categoryName=router.query.category?.toString();

    const title="Category: " + categoryName
  return (
    <div>
        <Head>
            <title key={"title"} >{`${title} -Nexrt js News App`}</title>
        </Head>
      <main>
        <h1>{title}</h1>
         <NEwsArticleGrid articles={newsArticles}/>
      </main>
    </div>
  )
}

export default categoryNewsPage
