import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head';

 <Head>
        <title>R-II Skincare</title>
        
  </Head>
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
