import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import styles from '../styles/LandingPage.module.css';
const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {

  return (
    <div className={styles.container}>
      <Head>
        <title>R-II Luxury Skincare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="skincare, luminous, hydrating, rejuvenating, cost effective skincare, all in one skincare, pietra, all skin type, hypoalergenic,luxury, moisture, Hyaluronic Acid, vitamin e, shea butter, mineral oil, vitamin c, day and night cream, eye cream, neck cream. anti wrinkle, zinc oxide spf 50  sunscreen"/>
           ...   other stuff here
          <meta property="og:title" content="R-II Skincare" key="og-title"/>
          <meta name="description" content="For all skin types, rejuvinating, hydrating, Luminous" />
          <meta property="og:url" content="https://sherystore.com" key="og-url"/>
          <meta property="og:image" content="./r-iii.jpg"
          key="og-image" />
          <meta property="og:site_name" content="R-II Skincare" key="og-site" />
            <meta property="twitter:site" content="@riiskincare"/>
            <meta name="twitter:card" content="summary_large_image" key="tw-card"/>
            <meta property="twitter:title" content="R-II American Luxury Skincare"/>
            <meta property="twitter:description" content="For all skin types, rejuvinating, hydrating, Luminous"/>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
      <div className="banner">
        R-II <br />
        <p style={{fontSize:30}}>American Luxury Skincare</p>
      </div>
      <header className={styles.header}>
        <h1 className={styles.title}>Face, Eyes, Neck (3 in one, unisex) for all skin types, Luminous, Hydrating, Rejuvenating</h1>
      </header>
      <div className="image-container">
      <Image 
      src="/checkout.png"
      width={120}
      height={120}
      alt="checkout"
      />
      </div>
      <div className="image-container">
      <Image 
      src="/intro2.jpg"
      width={1000}
      height={597}
      priority={false}
      alt="intro"
      />
      
      </div>
      <p style={{ textAlign:'center', Color:"#f5f0f0"}}>
        Ingredients: Vitamin E, Vitamin C, Zinc Oxide, Mineral Oil, Shea Butter, Hyaluronic Acid, and more
      </p>
    
      <main className={styles.main}>
        <div className={styles.ctaContainer}>
        <div className={styles.ctaButton}>
        <div >
          
          <div className={styles.top}>
            <div style={{padding: 20}}>
              <a target="_blank" href="https://square.link/u/Ac48BjlP?src=embed" 
              className={styles.buttom}>Buy now</a>
            </div>
        </div>
        </div>
      </div>
          
        </div>
        
      </main>
    </div>
    </div>
  );
}
