import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import styles from '../styles/LandingPage.module.css';
import {Card, Col, Row } from "react-bootstrap";
const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {

  return (
    <div className={styles.container}>
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
        <p style={{fontSize:30, color:'black'}}>American Luxury Skincare<br />$120.00 per unit</p>
      </div>
      
      <Card style={{ textAlign:'center' }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Introducing R-II Luxury Skincare - the all in one cream you have been looking for. Face, Eyes, Neck (3 in one, unisex) for all skin types, Luminous, Hydrating, Rejuvenating. <br /> Are you tired of juggling multiple products and expenses for your skincare routine? Your solution is here! Dermatologist-approved.{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
      
      
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
      src="/r-iii.jpg"
      width={800}
      height={500}
      alt="intro"
      />
      </div>
      <Card  style={{ textAlign:'center', marginBottom:20}}>
      
        Ingredients: Alpha-tocopheral, Ascorbic Acid, Zinc Oxide, Mineral Oil, Butyrospermum Parkii, Sodium Hyaluronate Hyaluronan.
      
      </Card>
      <main className={styles.main}>
        <div className={styles.ctaContainer}>
        <div className={styles.ctaButton}>
        <div >
          
            <div >
              <a target="_blank" href="https://square.link/u/Ac48BjlP?src=embed" 
              className={styles.buttom}>Order Now</a>
            </div>
        
        </div>
      </div>
        </div>
      </main>

    </div>
    </div>
  );
}
