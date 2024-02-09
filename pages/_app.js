import '@/styles/globals.css'
import { FormspreeProvider } from '@formspree/react';
import Menu from '../components/navig'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <FormspreeProvider project="{your-project-id}">
      <Menu />
      <Component {...pageProps} />
      <Footer />
      </FormspreeProvider>
    </>
  )
}

export default MyApp