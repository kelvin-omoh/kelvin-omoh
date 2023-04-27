import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (<>
            <div className={inter.className}>
              <Head>
              <title key={"title"}>Next js News App/title</title>
                <meta key={'description'} name='description' content='Next js '></meta>
                <meta name='viewport' content='width=device-width , initial-scale'/>
              </Head>
              <div className='my-8 '>
              <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                <Navbar/>
                 <Component {...pageProps} />
          
              </div>
               </div>
  </>)
}
