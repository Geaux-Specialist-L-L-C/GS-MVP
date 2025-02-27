import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children, title = 'Geaux Specialist', description = 'Innovative solutions across various domains' }) => {
  return (
    <>
      <Head>
        <title>{title} | Geaux Specialist LLC</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | Geaux Specialist LLC`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://geauxspecialist.com" />
        <meta property="og:image" content="https://geauxspecialist.com/images/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Geaux Specialist LLC`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://geauxspecialist.com/images/twitter-card.jpg" />
      </Head>
      
      <div className={`site-wrapper ${styles.siteWrapper}`}>
        <Navigation />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
