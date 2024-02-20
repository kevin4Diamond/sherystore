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
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JEP7ZYZPFL"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JEP7ZYZPFL');
            `,
          }}
        />

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