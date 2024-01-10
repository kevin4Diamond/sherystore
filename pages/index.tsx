import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import styles from '../styles/LandingPage.module.css';
const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);

  const togglePhoneNumber = () => {
    setPhoneNumberVisible(!phoneNumberVisible);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>KABOB TIME</title>
        <meta name="description" content="Delicious Persian Koobideh Kabob" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
      <div className="banner">
        <h2>KABOB TIME</h2>
      </div>
      <header className={styles.header}>
        <h1 className={styles.title}>Try Our Authentic Persian Kabob</h1>
      </header>
      <div className="image-container">
          
          <Image src="/image5.jpg" alt="Image 3" width={400} height={200} />
          <Image src="/image7.jpg" alt="Image 7" width={500} height={200} />
          <Image src="/image6.jpg" alt="Image 4" width={400} height={200} />
        </div>
        
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/myvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      <main className={styles.main}>
        <div className={styles.ctaContainer}>
          
          <button className={styles.ctaButton} onClick={togglePhoneNumber} >
          {phoneNumberVisible ? 'It\'s Kabob-Time' : 'Order Now'}
        </button>
        {phoneNumberVisible && (
          <p className={styles.ctaButton} >Call us now: (949) 444-5070</p>
        )}
        </div>
        
      </main>
    </div>
    </div>
  );
}
