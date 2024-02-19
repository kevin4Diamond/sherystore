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
      <header className={styles.header}>
        <h1 className={styles.title}>Introducing R-II Luxury Skincare - the all in one cream you have been looking for. Face, Eyes, Neck (3 in one, unisex) for all skin types, Luminous, Hydrating, Rejuvenating. <br /> Are you tired of juggling multiple products and expenses for your skincare routine? Your solution is here! </h1>
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
      src="/r-iii.jpg"
      width={800}
      height={500}
      alt="intro"
      />
      </div>
      <p style={{ textAlign:'center', Color:"black"}}>
        Ingredients: Vitamin E, Vitamin C, Zinc Oxide, Mineral Oil, Shea Butter, Hyaluronic Acid.
      </p>

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
     
      <div className="banner">
        R-II <br />
        <p style={{fontSize:30, color:'black'}}>Deep Exfoliating Powder <br />$50.00 per unit</p>
        <header className={styles.header}>
        <h1 className={styles.title}>Introducing our exclusive 2-in-1 exfoliant and mask – a skincare breakthrough! This transformative product not only refines your skin with a gentle rub but also doubles as a soothing mask when applied as per specific instructions. Combat acne spots and bid farewell to blackheads as you indulge in this multi-functional skincare essential. Unveil radiant, clearer skin with the one and only exfoliant that does it all.</h1>
      </header>
        
      </div>
      <div className="image-container">
      <Image 
      src="/exfoliate2.jpg"
      width={800}
      height={500}
      alt="intro"
      />
      </div>
      <p style={{ textAlign:'justify', Color:"black", width:800, alignItem:'center', marginLeft:20}}>
      Directions: Experience the magic by blending 1 tablespoon of water with 1/2 teaspoon of our R-II Exfoliating Powder. Gently rub the mixture onto your skin for 1 to 2 minutes, then rinse and dry for a truly fantastic result. <br />
      Ingredients: Crafted with care, our formula includes Carbonite Calcium Powder, White Petroleum, Olive Oil, Citric Acid, and Paraffin. Indulge in a skincare ritual that pampers your skin with these quality ingredients for a radiant glow.
      </p>
 
    <main className={styles.main}>
        <div className={styles.ctaContainer}>
        <div className={styles.ctaButton}>
        <div >
          
            <div >
              <a target="_blank" href="https://square.link/u/iWTFokSY?src=embed" 
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
